import React, { useState } from "react";
import "../Styles/DayCard.css";
import "../Styles/DatePicker.css";
import DatePicker from "react-date-picker";
import IndividualDayCard from "./IndividualDayCard";

const IndividualDayContainer = (props) => {
    const [date, updateDate] = useState({
        selectedDate: new Date(Date.now()),
        selectedDateObj: {
            date: ["", ""],
                shift: "Select a date to view your shifts for that day",
                shiftType: ""
        },
        classType: "emptyState-day-card",
        iconSrcLink: ""
        // add an image link state variable for images based on which of the three-four states we need
        //get icons from jasmine
    });

    const onDateChange = (selectedDate) => {
        let foundMatch = false;
        props.schedule.forEach(day => {
            const [m, d, y] = day.date[1].toString().split("/");
            let scheduleDate = new Date(+y, +m -1, +d);
            
            if(scheduleDate.getTime() === selectedDate.getTime()) {
                foundMatch = true
                if(day.shift.toLowerCase() === "day off") {
                    updateDate({
                        selectedDate: new Date(selectedDate),
                        selectedDateObj: day,
                        classType: "individual-dayoff-card"
                    });
                }
                else {
                    updateDate({
                        selectedDate: new Date(selectedDate),
                        selectedDateObj: day,
                        classType: "individual-day-card"
                    });
                }
                
            }
        })
        if(!foundMatch) {
            console.log("does not match")
            updateDate({
                selectedDate: new Date(date.selectedDate),
                selectedDateObj: {
                    date: ["", ""],
                    shift: "Schedule for this date is not ready",
                    shiftType: ""
                },
                classType: "dataless-day-card"
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
                classType={date.classType}
            />
        </div>
    )
}

export default IndividualDayContainer;