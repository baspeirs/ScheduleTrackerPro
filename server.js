const express = require("express");
const mongoose = require("mongoose");
const {google} = require("googleapis");
// const routes = require("./routes");
const apis = google.getSupportedAPIs();
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serve up static files on heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/api/store_schedule", async (req, res) => {

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


// start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});