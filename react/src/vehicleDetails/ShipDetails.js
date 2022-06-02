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
            <tbody>
                <tr>
                    <th align="left"><p>Brand:</p></th>
                    <th align="left"><p>{props.ship.brand}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>Year:</p></th>
                    <th align="left"><p>{props.ship.year}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>Mass: </p></th>
                    <th align="left"><p>{props.ship.mass}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>Length: </p></th>
                    <th align="left"><p>{props.ship.length}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>Max Crew: </p></th>
                    <th align="left"><p>{props.ship.maxCrew}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>Price: </p></th>
                    <th align="left"><p>{props.ship.price}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>Classification: </p></th>
                    <th align="left"><p>{props.ship.classification}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>Fuel Type: </p></th>
                    <th align="left"><p>{props.ship.fuelType}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>Manufacturer: </p></th>
                    <th align="left"><p>{props.ship.manufacturer}</p></th>
                </tr>
                <tr>
                    <th align="left"><p>User Name: </p></th>
                    <th align="left"><p>{userName}</p></th>
                </tr>
            </tbody>
        </table>
    );
}

export default ShipDetails;