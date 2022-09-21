import React, { useState } from "react";
import "../Styles/DayCard.css";
import DatePicker from "react-date-picker";
import IndividualDayCard from "./IndividualDayCard";

const IndividualDayContainer = (props) => {
    const [date, updateDate] = useState({
        selectedDate: new Date(Date.now()),
        selectedDateObj: {
            date: ["", ""],
                shift: "",
                shiftType: "Select a date to view your shifts for that day"
        }
    });

    const onDateChange = (selectedDate) => {
        console.log(selectedDate)
        let foundMatch = false;
        props.schedule.forEach(day => {
            console.log(day)
            const [m, d, y] = day.date[1].toString().split("/");
            let scheduleDate = new Date(+y, +m -1, +d);
            
            if(scheduleDate.getTime() === selectedDate.getTime()) {
                foundMatch = true
                updateDate({
                    selectedDate: new Date(selectedDate),
                    selectedDateObj: day
                });
                
            }
        })
        if(!foundMatch) {
            console.log("does not match")
            updateDate({
                selectedDate: new Date(date.selectedDate),
                selectedDateObj: {
                    date: ["", ""],
                    shift: "",
                    shiftType: "Schedule for this date is not ready"
                }
            })
        }
    }

    return (
        <div id="dayContainer">
            <DatePicker
                onChange={onDateChange}
                value={date.selectedDate}
            />
            <IndividualDayCard 
                dayObj={date.selectedDateObj}
            />
        </div>
    )
}

export default IndividualDayContainer;