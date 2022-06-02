import Calendar from 'react-calendar'
import {useState} from "react";

function ShipCalendar(props) {
    const [value, onChange] = useState(null);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null)

    const onClick = date => {
        if (fromDate === null) {
            setFromDate(date);
        } else if (toDate !== null) {
            setToDate(null);
            setFromDate(date);
        } else {
            setToDate(date);
        }

        if (toDate !== null && fromDate !== null ) {
            let interval = [toDate, fromDate]
            onChange(interval)
            console.log(value);
        } else {
            onChange(date);
        }
    }

    return (
        <div className="calendar-container">
            <div className="calendar-div">
                <Calendar onChange={onClick} value={value} />
            </div>
            <div className="controller-div">
                <button>
                    Rent
                </button>
                <p>Cost: </p>
            </div>
        </div>
    );
}

export default ShipCalendar