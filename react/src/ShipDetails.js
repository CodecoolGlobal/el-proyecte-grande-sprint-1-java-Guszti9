import {useEffect, useState} from "react";

function ShipDetails(props) {
    const [userName, setUserName] = useState();

    const fetchUserName = id => {
        if (id !== undefined) {
            fetch(`http://localhost:8080/api/user/${id}`)
                .then(result => result.json())
                .then(result => {
                    setUserName(result.firstName + " " + result.lastName);
                }, (error) => console.log("error"));
        }
    }

    useEffect( () => {
        fetchUserName(props.ship.userId);
    }, [props]);

    return (
        <table>
            <tr>
                <th><p>Brand:</p></th>
                <th><p>{props.ship.brand}</p></th>
            </tr>
            <tr>
                <th><p>Year:</p></th>
                <th><p>{props.ship.year}</p></th>
            </tr>
            <tr>
                <th><p>Mass: </p></th>
                <th><p>{props.ship.mass}</p></th>
            </tr>
            <tr>
                <th><p>Length: </p></th>
                <th><p>{props.ship.length}</p></th>
            </tr>
            <tr>
                <th><p>Max Crew: </p></th>
                <th><p>{props.ship.maxCrew}</p></th>
            </tr>
            <tr>
                <th><p>Price: </p></th>
                <th><p>{props.ship.price}</p></th>
            </tr>
            <tr>
                <th><p>Classification: </p></th>
                <th><p>{props.ship.classification}</p></th>
            </tr>
            <tr>
                <th><p>Fuel Type: </p></th>
                <th><p>{props.ship.fuelType}</p></th>
            </tr>
            <tr>
                <th><p>Manufacturer: </p></th>
                <th><p>{props.ship.manufacturer}</p></th>
            </tr>
            <tr>
                <th><p>User Name: </p></th>
                <th><p>{userName}</p></th>
            </tr>
        </table>
    );
}

export default ShipDetails;