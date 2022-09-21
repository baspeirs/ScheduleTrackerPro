import axios from "axios";

let APIData = {
    saveUser: function (userData) {
        return axios.post("/api/register", userData);
    },
    getSchedule: function () {
        return axios.get("/api/store_schedule");
    },
    isAuthorized: function () {
        return axios.get("/api/authorized")
    },
    login: function (user) {
        return axios.post("/api/login", user);
    },
    logout: function () {
        return axios.get("/api/logout");
    },
    getDirectory: function () {
        return axios.get("/api/directory");
    }
}

export default APIData;