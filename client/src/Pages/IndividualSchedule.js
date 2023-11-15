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

    const scheduleMapper = (date, shiftArray, employeeArray) => {
        return  employeeArray.map((employee, index) => {
            return {
                employee,
                date,
                shift: shiftArray[0][index]
            } 
        });
    };

    useEffect(() => {
        API.getSchedule()
            .then(res => {
                console.log("response data from google sheets api call");
                console.log(res.data)
                let tempScheduleArray = []
                res.data.dates.values.forEach((date, index) => {
                    let shiftFound = false;
                    const managerSchedule = scheduleMapper(date, res.data.managerShifts.values, res.data.managers.values[index]);
                    managerSchedule.forEach(manager => {
                        if (manager.employee === props.user.name) {
                            const managerShift = new Day(manager.date, "Manager", manager.shift);
                            tempScheduleArray.push(managerShift);
                            shiftFound = true;
                        }
                    });
                    const driverSchedule = scheduleMapper(date, res.data.driverShifts.values, res.data.drivers.values[index]);
                    driverSchedule.forEach(driver => {
                        if (driver.employee === props.user.name) {
                            const driverShift = new Day(driver.date, "Driver", driver.shift);
                            tempScheduleArray.push(driverShift);
                            shiftFound = true;
                        }
                    });
                    const inStoreSchedule = scheduleMapper(date, res.data.inStoreShifts.values, res.data.inStore.values[index]);
                    inStoreSchedule.forEach(inStore => {
                        if (inStore.employee === props.user.name) {
                            const inStoreShift = new Day(inStore.date, "In Store", inStore.shift);
                            tempScheduleArray.push(inStoreShift);
                            shiftFound = true;
                        }
                    });

                    if (!shiftFound) {
                                const dayOBJ = new Day(res.data.dates.values[index], null, "Day Off")
                                tempScheduleArray.push(dayOBJ)
                            }
                });
                
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