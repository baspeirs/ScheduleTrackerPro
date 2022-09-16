import React from "react";
import "../Styles/DayCard.css"


const IndividualDayCard = (props) => {


    // const logMessage = () => {
    //     console.log(props)
    // }

    return (
        <div className="dayCard">
            <h3>{props.dayOBJ.date[0]}</h3>
            <h3>{props.dayOBJ.date[1]}</h3>
            <p>{props.dayOBJ.shiftType}</p>
            <p>{props.dayOBJ.shift}</p>
        </div>
    )
}

export default IndividualDayCard;