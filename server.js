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
    const getMonday = await sheets.spreadsheets.values.get({
        // auth,
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Monday!B2:E50"
    });
    
    returnData = {
        monday: getMonday.data
    };

    res.json(returnData);
});


// start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});