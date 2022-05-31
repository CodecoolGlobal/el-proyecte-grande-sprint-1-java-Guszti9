import {useEffect, useState} from "react";

function ShipDetails(props) {
    const [userName, setUserName] = useState("none");

    const fetchUserName = id => {
        fetch(`http://localhost:8080/api/user/${id}`).
        then(result => result.json()).
        then(result => {
            setUserName(result.firstName + " " + result.lastName);
        }, (error) => console.log("error"));
    }

    useEffect( () => {
        console.log("1");
        fetchUserName(props.ship.userId);
    }, [props]);

    return (
        <div>
            <div>
                <div><p>Brand:</p></div>
                <div><p>{props.ship.brand}</p></div>
            </div>
            <div>
                <div><p>Year:</p></div>
                <div><p>{props.ship.year}</p></div>
            </div>
            <div>
                <div><p>Mass: </p></div>
                <div><p>{props.ship.mass}</p></div>
            </div>
            <div>
                <div><p>Length: </p></div>
                <div><p>{props.ship.length}</p></div>
            </div>
            <div>
                <div><p>Max Crew: </p></div>
                <div><p>{props.ship.maxCrew}</p></div>
            </div>
            <div>
                <div><p>Price: </p></div>
                <div><p>{props.ship.price}</p></div>
            </div>
            <div>
                <div><p>Classification: </p></div>
                <div><p>{props.ship.classification}</p></div>
            </div>
            <div>
                <div><p>Fuel Type: </p></div>
                <div><p>{props.ship.fuelType}</p></div>
            </div>
            <div>
                <div><p>Manufacturer: </p></div>
                <div><p>{props.ship.manufacturer}</p></div>
            </div>
            <div>
                <div><p>User Name: </p></div>
                <div><p>{userName}</p></div>
            </div>
        </div>
    );
}

export default ShipDetails;