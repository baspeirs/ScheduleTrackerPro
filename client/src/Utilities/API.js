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
    },
    getUser: function (id) {
        return axios.get("/api/user/" + id)
    },
    updateUser: function (id, update) {
        return axios.put("api/updateUser/" + id, update)
    },
    deleteUser: function (id) {
        return axios.delete("api/deleteUser/" + id)
    }
}

export default APIData;