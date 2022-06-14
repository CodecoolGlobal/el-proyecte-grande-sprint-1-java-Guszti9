import {useEffect, useState} from "react";
import ShipImage from "./shipImage";
import ShipDescription from "./shipDescription";
import ShipDetails from "./ShipDetails";
import "./vehicle.css"
import ShipCalendar from "./shipCalendar";
import {Outlet, useParams} from "react-router-dom";


function VehicleDetails() {
    let params = useParams()
    const [ship, setShip] = useState([]);

    const fetchShip = id => {
        fetch(`http://localhost:8080/api/spaceship/${id}`).
        then(result => result.json()).
        then(result => setShip(result), (error) => console.log("error"));
    }

    useEffect( () => {
        fetchShip(parseInt(params.spaceshipId))
    }, [])

    if (ship) {
        console.log(ship)
        return  (
            <div className="vehicle-body">
                <div className="vehicle-picture-block">
                    <h3 id="ship-name">{ship.name}</h3>
                    <ShipImage image={ship.image}/>
                </div>
                 <div className="vehicle-description-block">
                    <ShipDescription description={ship.description}/>
                 </div>
                <div className="vehicle-details-block">
                    <ShipDetails ship={ship} />
                </div>
                <div className="vehicle-calendar-block">
                    <ShipCalendar />
                </div>
                <Outlet/>
            </div>
        );
    }

}

export default VehicleDetails;