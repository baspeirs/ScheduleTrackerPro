import React from "react";
import "../Styles/IndividualSchedule.css";


const IndividualDayCard = (props) => {

    return (
        <div>
            <p className="individual-shift-type">{props.dayObj.shiftType}</p>
            <div className={props.classType}>
                <p className="shift-date">{props.dayObj.date[0]} {props.dayObj.date[1]}</p>
                <h3 className="shift-time">{props.dayObj.shift}</h3>
            </div>
        </div>

    )
}

export default IndividualDayCard;