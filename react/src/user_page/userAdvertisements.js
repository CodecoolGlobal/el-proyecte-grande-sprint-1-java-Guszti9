import React, {useEffect} from "react";
import './userPage.css';
import {Link, useParams} from "react-router-dom";

function UserAdvertisements(props) {
    let params = useParams();
    const [data, setData] = React.useState([]);

    const getData = async () => {
        await fetch(`http://localhost:8080/api/user/${params.userId}/ships`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (myResp) {
            setData(myResp);
        });
    }
    useEffect(() => {
        getData().then(function () {
        });
    }, []);


    return (
        data.map((d) =>
            <Link className="ship-image-link" to={"/spaceship-details/" + d.id}>
                <div className="card" data-id={d.id}>
                    <div className="card-text">
                        <h2 className="ship-name-text">{d.name}</h2>
                        <img src={"../" + d.image[0]} width="170" height="140"
                             alt="pic" className="ship-image"></img>
                        <p className="ship-name-text">Price: {d.price} $</p>
                    </div>
                </div>
            </Link>
        )
    )
}

export default UserAdvertisements;