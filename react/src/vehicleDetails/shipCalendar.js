import Calendar from 'react-calendar'
import {useState} from "react";

function ShipCalendar(props) {
    const [value, onChange] = useState(null);
    const [type, setType] = useState("null")
    const [rentedDates, setRentedDates] = useState([new Date(2022, 6, 2)])

    function getDatesInRange(startDate, endDate) {
        const date = new Date(startDate.getTime());

        const dates = [];

        while (date < endDate) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return dates;
    }

    function isDateIntervalFree(startDate, endDate) {
        for (let rentDate of rentedDates) {
            if (startDate.getTime() < rentDate.getTime() && rentDate.getTime() < endDate.getTime()) {
                return false;
            }
        }
        return true;
    }

    const rentShip = () => {
        onChange(null);
        setType("null");

        if (value.length === 2) {
            setRentedDates(rentedDates.concat(getDatesInRange(value[0], value[1])));
        }
    }

    const onClick = date => {
        if (rentedDates.some(e => e.getTime() === date.getTime())) return;

        if (type === "null") {
            onChange(date);
            setType("date");
        } else if (type === "date") {
            if (date < value) {
                if (isDateIntervalFree(date, value)) {
                    onChange([date, new Date(value.setDate(value.getDate() + 1))]);
                    setType("interval");
                }

            } else {
                if (isDateIntervalFree(value, date)) {
                    onChange([value, new Date(date.setDate(date.getDate() + 1))]);
                    setType("interval")
                }
            }
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
                <button onClick={rentShip}>
                    Rent
                </button>
                <p>Cost: </p>
            </div>
        </div>
    );
}

export default ShipCalendar