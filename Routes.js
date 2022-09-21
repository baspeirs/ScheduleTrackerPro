const express = require("express")
const router = express.Router();
const {google} = require("googleapis");
const apis = google.getSupportedAPIs();
require("dotenv").config();
const passport = require("passport");
const db = require("./Models");
var isAuthenticated = require("./config/middleware/isAuthendticated");

// ADD SECONDARY QUERRY TO "ADD EMPLOYEE" ROUTE FOR GOOGLE SHEET DATA VALIDATION UPDATE
    // SetDataValidationRequest 
    // {
    //     "range": {
    //         object (GridRange)
    //     },
    //     "rule": {
    //         object (DataValidationRule)
    //     }
    // }


// ============= Google API for Google Sheets ==============
router.get("/api/store_schedule", async (req, res) => {
    console.log("Grabbing Schedule from Google Doc")

    const sheets = google.sheets({
        version: "v4",
        auth: process.env.GOOGLE_ACCOUNT_API_KEY
    });

    // read rows from spreadsheet
    const getManagerShifts = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Manager!C1:J1",
        majorDimension: "ROWS"
    });
    const getManager = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Manager!C2:M50",
        majorDimension: "ROWS"
    });
    const getDriverShifts = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Driver!C1:J1",
        majorDimension: "ROWS"
    });
    const getDrivers = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Driver!C2:M50",
        majorDimension: "ROWS"
    });
    const getInStoreShifts = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "In Store!C1:J1",
        majorDimension: "ROWS"
    });
    const getInStore= await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "In Store!C2:M50",
        majorDimension: "ROWS"
    });
    const getDates= await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "In Store!A2:B8",
        majorDimension: "ROWS"
    });
    
    returnData = {
        managers: getManager.data,
        managerShifts: getManagerShifts.data,
        drivers: getDrivers.data,
        driverShifts: getDriverShifts.data,
        inStore: getInStore.data,
        inStoreShifts: getInStoreShifts.data,
        dates: getDates.data
    };

    res.json(returnData);
});

// ============= User Routes For Database ==================
router.post("/api/register", (req, res) => {
    console.log("registering user.");

    db.User.register(
        new db.User({
            username: req.body.username,
            email: req.body.email,
            created: req.body.created,
            name: req.body.name,
            phoneNumber: req.body.number,
            manager: req.body.manager
        }),
        req.body.password,
        function(err, user) {
            if (err) {
                return res.json(err)
            }
            passport.authenticate("local", { session: false })
            (req, res, function(data) {
                res.json(req.user);
            })
        }
    )
});

// user login route (use a post request for log in)
router.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) next(err);
        if (!user) res.json(info);
        req.logIn(user, err => {
            if (err) next(err);
            return res.json(user)
        });
    })(req, res, next);
});

// user log out route (get request for logout function)
router.get("/api/logout", (req, res) => {
    req.logout();
    res.json({ message: "logged out" });
})

router.get("/api/authorized", isAuthenticated, function (req, res) {
    res.json(req.user);
});

// get user route
router.get("/api/user/:id", (req, res) => {
    db.User.find({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch(err => console.log(err))
});

router.get("/api/directory", (req, res) => {
    console.log("called from back")
    db.User.find()
    .then(result => {
        res.json(result)
    })
})


module.exports = router;