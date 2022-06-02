import Calendar from 'react-calendar'
import {useState} from "react";

function ShipCalendar(props) {
    const [value, onChange] = useState(null);
    const [type, setType] = useState("null")

    const onClick = date => {
        if (type === "null") {
            onChange(date);
            setType("date");
        } else if (type === "date") {
            if (date < value) {
                onChange([date, new Date(value.setDate(value.getDate() + 1))]);
            } else {
                onChange([value, new Date(date.setDate(date.getDate() + 1))]);
            }
            setType("interval");
        } else {
            onChange(date);
            setType("date");
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