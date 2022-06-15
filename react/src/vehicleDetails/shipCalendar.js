import Calendar from 'react-calendar'
import {useState, useEffect} from "react";

function ShipCalendar(props) {
    const [value, onChange] = useState(null);
    const [type, setType] = useState("null");
    const [rentedDates, setRentedDates] = useState([]);

    function fetchRentedDates(id) {
        fetch(`http://localhost:8080/api/spaceship/${id}/rented`).
        then(result => result.json()).
        then(result => {
            console.log(result);
            let rentedDatesCollector = [];
            for (let dateEndpoints of result) {
                for (let date of getDatesInRange(new Date(dateEndpoints[0]), new Date(dateEndpoints[1]))) {
                    rentedDatesCollector.push(date);
                }
            }
            setRentedDates(rentedDatesCollector);
        });
    }

    function fetchRent() {
        fetch(`http://localhost:8080/api/spaceship/${props.id}/rent/0`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([value[0], value[1]])
        }).then();
    }

    useEffect( () => {
        if (props.id !== undefined) {
            fetchRentedDates(props.id);
        }
    }, [props])

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
            fetchRent();
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