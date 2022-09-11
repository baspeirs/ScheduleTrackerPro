import axios from "axios";

let APIData =  {
    getSchedule: function (schedule) {
        return axios.get("/api/store_schedule", schedule);
    }
}

export default APIData;