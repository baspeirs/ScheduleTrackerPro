const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const User = new Schema({
    username: {
        type: String,
        required: "Employees need a username for sign in"
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    name: {
        type: String,
        required: "Plsease give the employee a name"
    },
    phoneNumber: {
        type: Number
    },
    manager: {
        type: Boolean
    }
})

module.exports = mongoose.model("User", User)