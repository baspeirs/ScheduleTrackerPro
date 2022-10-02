import React, { useState, useEffect } from "react";
import API from "../Utilities/API";
import IndividualDayContainer from "../Components/IndividualDayContainer";
import NavBar from "../Components/NavBar";

const IndividualSchedule = (props) => {
    const [schedule, setSchedule] = useState({
        scheduleArr: []
    });

    

    class Day {
        constructor(date, shiftType, shift) {
            this.date = date;
            this.shiftType = shiftType;
            this.shift = shift;
        }
    }

    useEffect(() => {
        API.getSchedule()
            .then(res => {
                console.log("api has been called")
                let tempScheduleArray = []
                for (let i = 0; i < res.data.dates.values.length; i++) {
                    let shiftFound = false

                    res.data.managers.values[i].forEach(name => {
                        if (name === props.user.name) {
                            const dayOBJ = new Day(res.data.dates.values[i], "Manager", res.data.managerShifts.values[0][i]);
                            tempScheduleArray.push(dayOBJ);
                            shiftFound = true;
                        }
                    });
                    res.data.drivers.values[i].forEach(name => {
                        if (name === props.user.name) {
                            const dayOBJ = new Day(res.data.dates.values[i], "Driver", res.data.driverShifts.values[0][i]);
                            tempScheduleArray.push(dayOBJ);
                            shiftFound = true;
                        }
                    });
                    res.data.inStore.values[i].forEach(name => {
                        if (name === props.user.name) {
                            const dayOBJ = new Day(res.data.dates.values[i], "In Store", res.data.inStoreShifts.values[0][i]);
                            tempScheduleArray.push(dayOBJ);
                            shiftFound = true;
                        }
                    });

                    if (!shiftFound) {
                        const dayOBJ = new Day(res.data.dates.values[i], "Day Off", null)
                        tempScheduleArray.push(dayOBJ)
                    }
                }
                setSchedule({
                    scheduleArr: tempScheduleArray
                });
            })
            .catch(err => { console.log(err) })
    }, [])

    const logMessage = (e) => {
        e.preventDefault()
        console.log(schedule)
    }

    return (
        <div id="individualSchedule">
            <NavBar logout={props.logout} />
            <div className="container">
            <h2>
                Hello Individual Schedule
            </h2>
            <IndividualDayContainer 
                schedule={schedule.scheduleArr}
            />
            <button onClick={logMessage}>Debug Log</button>
            </div>
            
        </div>
    )
}

export default IndividualSchedule;