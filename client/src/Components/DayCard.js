import React from "react";
import TableData from "./TableData";
import "../Styles/DayCard.css"


const DayCard = (props) => {


    // const logMessage = () => {
    //     console.log(props)
    // }

    return (
        <div className="dayCard">
            <div className="cardHeader">
                <h2>{props.dayOBJ.date[0]} {props.dayOBJ.date[1]}</h2>
            </div>

            <div className="managerTable">
            <h3>Managers</h3>
                <table className="scheduleTable">
                    <tr>
                        {props.dayOBJ.managerShifts.map(shift => (
                            <TableData
                                data={shift}
                            />
                        ))}
                    </tr>
                    <tr>
                        {props.dayOBJ.managers.map(employee => (
                            <TableData
                                data={employee}
                            />
                        ))}
                    </tr>
                </table>
            </div>

            <div className="driverTable">
            <h3>Drivers</h3>
                <table className="scheduleTable">
                    <tr>
                        {props.dayOBJ.driverShifts.map(shift => (
                            <TableData
                                data={shift}
                            />
                        ))}
                    </tr>
                    <tr>
                        {props.dayOBJ.drivers.map(employee => (
                            <TableData
                                data={employee}
                            />
                        ))}
                    </tr>
                </table>
            </div>

            <div className="inStoreTable">
            <h3>In Store</h3>
                <table className="scheduleTable">
                    <tr>
                        {props.dayOBJ.inStoreShifts.map(shift => (
                            <TableData
                                data={shift}
                            />
                        ))}
                    </tr>
                    <tr>
                        {props.dayOBJ.inStores.map(employee => (
                            <TableData
                                data={employee}
                            />
                        ))}
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default DayCard;