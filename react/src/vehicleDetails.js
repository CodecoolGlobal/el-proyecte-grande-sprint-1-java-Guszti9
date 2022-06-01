import {useEffect, useState} from "react";
import ShipImage from "./shipImage";
import ShipDescription from "./shipDescription";
import ShipDetails from "./ShipDetails";
import "./vehicle.css"


function VehicleDetails(props) {
    const [ship, setShip] = useState({nane: null});

    const fetchShip = id => {
        fetch(`http://localhost:8080/api/spaceship/${id}`).
        then(result => result.json()).
        then(result => setShip(result), (error) => console.log("error"));
    }

    useEffect( () => {
        fetchShip(props.id)
    }, [])

    if (ship) {
        return  (
            <div className="vehicle-body">
                <div className="vehicle-picture-block">
                    <p>{ship.name}</p>
                    <ShipImage image={ship.image}/>
                </div>
                 <div className="vehicle-description-block">
                    <ShipDescription description={ship.description}/>
                 </div>
                <div className="vehicle-details-block">
                    <ShipDetails ship={ship} />
                </div>
            </div>
        );
    }

}

export default VehicleDetails;