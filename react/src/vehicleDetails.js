import {useEffect, useState} from "react";


function VehicleDetails(props) {
    const [ship, setShip] = useState({nane: null});

    const fetchShip = id => {
        console.log(id);

        fetch(`http://localhost:8080/api/spaceship/${id}`).
        then(result => result.json()).
        then(result => setShip(result), (error) => console.log("error"));
    }

    useEffect(() => {
        fetchShip(props.id)
    }, [])

    if (ship) {
        return  (
            <body>
            {ship.name}
            </body>
        );
    }

}

export default VehicleDetails;