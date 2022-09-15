import axios from "axios";

let APIData = {
    saveUser: function (userData) {
        return axios.post("/api/register", userData);
    },
    getSchedule: function (schedule) {
        return axios.get("/api/store_schedule", schedule);
    },
    isAuthorized: function () {
        return axios.get("/api/authorized")
    },
    login: function (user) {
        return axios.post("/api/login", user);
    },
    logout: function () {
        return axios.get("/api/logout");
    }
}

export default APIData;