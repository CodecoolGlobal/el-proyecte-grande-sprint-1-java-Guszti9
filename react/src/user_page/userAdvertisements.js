import React, {useEffect} from "react";
import './userPage.css';
import logo from '../images/spacer_name.png';
import {Link} from "react-router-dom";

function UserAdvertisements(props) {
    const [data, setData] = React.useState([]);

    const getData = async () => {
        await fetch(`http://localhost:8080/api/user/${props.id}/ships`, {
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

    console.log(data.image)

    return (
        data.map((d) =>
            <Link to={"/spaceship-details/" + d.id}>
                <div className="card" data-id={d.id}>
                    <div className="card-text">
                        <h2>{d.name}</h2>
                        <img src={d.image[0]} width="170" height="140"
                             alt="pic"></img> {/*src={logo} will be src={d.image}*/}
                        <p>Price: {d.price} $</p>
                    </div>
                </div>
            </Link>
        )
    )
}

export default UserAdvertisements;