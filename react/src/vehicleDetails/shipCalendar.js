import Calendar from 'react-calendar'
import {useState} from "react";

function ShipCalendar(props) {
    const [value, onChange] = useState(null);
    const [type, setType] = useState("null")
    const [rentedDates, setRentedDates] = useState([new Date(2022, 6, 2)])

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

    const colorRentDay = (date, view) => {
        if (rentedDates.find(d=> d.getTime() === date.date.getTime()) !== undefined) {
            return "rented-date";
        }
    }

    return (
        <div className="calendar-container">
            <div className="calendar-div">
                <Calendar
                    onChange={onClick}
                    value={value}
                    tileClassName={colorRentDay}
                />
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