import React, { useState, useEffect } from "react";
import EmployeeShiftCard from "./EmployeeShiftCard";
import "../Styles/DayCard.css"


const DayCard = (props) => {
    const [schedule, setSchedule] = useState({
        managers: [],
        drivers: [],
        inStores: []
    });

    class Shift {
        constructor(name, shift) {
            this.name = name
            this.shift = shift
        }
    }

    useEffect(() => {
        let managersArr = [];
        let driversArr = [];
        let inStoresArr = [];
        for (let i = 0; i < props.dayOBJ.managerShifts.length; i++) {
            const shiftObj = new Shift(props.dayOBJ.managers[i], props.dayOBJ.managerShifts[i])
            managersArr.push(shiftObj)
        }
        for (let i = 0; i < props.dayOBJ.driverShifts.length; i++) {
            const shiftObj = new Shift(props.dayOBJ.drivers[i], props.dayOBJ.driverShifts[i])
            driversArr.push(shiftObj)
        }
        for (let i = 0; i < props.dayOBJ.inStoreShifts.length; i++) {
            const shiftObj = new Shift(props.dayOBJ.inStores[i], props.dayOBJ.inStoreShifts[i])
            inStoresArr.push(shiftObj)
        }

        setSchedule({
            managers: managersArr,
            drivers: driversArr,
            inStores: inStoresArr
        })
    }, [])

    return (
        <div className="dayCard">
            <div className="cardHeader">
                <h2 className="card-day">{props.dayOBJ.date[0]} {props.dayOBJ.date[1]}</h2>
            </div>
            <h3 className="shift-type">Managers</h3>
            <div className="shifts-holder-card">
                {schedule.managers.map((shift, index) => (
                    <EmployeeShiftCard
                        key={`manager${index}`}
                        shift={shift}
                        classType="shift-manager employee-shift-card"
                    />
                ))}
            </div>

            <h3 className="shift-type">Drivers</h3>
            <div className="shifts-holder-card">
                {schedule.drivers.map((shift, index) => (
                    <EmployeeShiftCard
                        key={`driver${index}`}
                        shift={shift}
                        classType="shift-driver employee-shift-card"
                    />
                ))}
            </div>
            <h3 className="shift-type">In Shops</h3>
            <div className="shifts-holder-card">
                {schedule.inStores.map((shift, index) => (
                    <EmployeeShiftCard
                        key={`inStore${index}`}
                        shift={shift}
                        classType="shift-inStore employee-shift-card"
                    />
                ))}
            </div>
        </div>
    )
}

export default DayCard;