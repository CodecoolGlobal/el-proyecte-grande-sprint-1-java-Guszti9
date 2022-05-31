import {useEffect, useState} from "react";
import ShipImage from "./shipImage";
import ShipDescription from "./shipDescription";
import ShipDetails from "./ShipDetails";


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
            <div>
                <p>{ship.name}</p>
                <ShipImage image={ship.image}/>
                <ShipDescription description={ship.description}/>
                <ShipDetails ship={ship} />
            </div>
        );
    }

}

export default VehicleDetails;