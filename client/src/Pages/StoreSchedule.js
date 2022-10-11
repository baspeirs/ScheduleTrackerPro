import React, { useState, useEffect } from "react";
import API from "../Utilities/API";
import DayCard from "../Components/DayCard";
import NavBar from "../Components/NavBar";
import "../Styles/StoreSchedule.css"

const StoreSchedule = (props) => {
    const [schedule, setSchedule] = useState({
        scheduleArr: []
    });

    class Day {
        constructor(date, managerShifts, managers, driverShifts, drivers, inStoreShifts, inStores) {
            this.date = date;
            this.managerShifts = managerShifts;
            this.managers = managers;
            this.driverShifts = driverShifts;
            this.drivers = drivers;
            this.inStoreShifts = inStoreShifts;
            this.inStores = inStores;
        }
    }

    useEffect(() => {
        API.getSchedule()
            .then(res => {
                let tempScheduleArray = []
                for (let i=0; i<res.data.dates.values.length; i++) {
                    const dayOBJ = new Day (res.data.dates.values[i], res.data.managerShifts.values[0],res.data.managers.values[i], res.data.driverShifts.values[0],res.data.drivers.values[i], res.data.inStoreShifts.values[0],res.data.inStore.values[i])
                    tempScheduleArray.push(dayOBJ)
                }
                console.log(tempScheduleArray)
                setSchedule({

                    scheduleArr: tempScheduleArray
                });
            })
            .catch(err => { console.log(err) })
    }, [])

    return (
        <div id="storeSchedule">
            <NavBar user={props.user} logout={props.logout} />
            <div className="container">
            {schedule.scheduleArr.map(obj => (
                <DayCard 
                    dayOBJ={obj}
                />
            ))}
        </div>
        </div>
        
    )
}

export default StoreSchedule;