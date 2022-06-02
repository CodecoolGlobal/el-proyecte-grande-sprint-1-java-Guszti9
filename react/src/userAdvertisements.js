import React, {useEffect} from "react";
import './userPage.css';

function UserAdvertisements (props) {
    const [data, setData] = React.useState([]);

    const getData = () => {
        fetch(`http://localhost:8080/api/user/${props.id}/ships`, {
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
        getData();
    }, []);

    console.log(data)

    return(
        data.map((d) =>
            <div className="card">
                <div className="card-image"></div>
                <div className="card-text">
                    <h2>{d.name}</h2>
                    <p>{d.price}</p>
                </div>
            </div>)
    )
}

export default UserAdvertisements;