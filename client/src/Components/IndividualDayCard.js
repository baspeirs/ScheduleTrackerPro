import React from "react";
import "../Styles/DayCard.css"


const IndividualDayCard = (props) => {

    return (
        <div className="dayCard">
            <h3>{props.dayObj.date[0]}</h3>
            <h3>{props.dayObj.date[1]}</h3>
            <p>{props.dayObj.shiftType}</p>
            <p>{props.dayObj.shift}</p>
        </div>
    )
}

export default IndividualDayCard;