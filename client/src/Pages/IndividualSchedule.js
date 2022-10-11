import React, { useState, useEffect } from "react";
import API from "../Utilities/API";
import IndividualDayContainer from "../Components/IndividualDayContainer";
import NavBar from "../Components/NavBar";
import "../Styles/IndividualSchedule.css"

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
                        const dayOBJ = new Day(res.data.dates.values[i], null, "Day Off")
                        tempScheduleArray.push(dayOBJ)
                    }
                }
                setSchedule({
                    scheduleArr: tempScheduleArray
                });
            })
            .catch(err => { console.log(err) })
    }, [])

    return (
        <div id="individualSchedule">
            <NavBar user={props.user} logout={props.logout} />
            <div className="container">
            <h2 id="individual-schedule-header">View your schedule</h2>
            <h4 id="individual-schedule-subheader">select date</h4>
            <IndividualDayContainer 
                schedule={schedule.scheduleArr}
            />
            </div>
            
        </div>
    )
}

export default IndividualSchedule;