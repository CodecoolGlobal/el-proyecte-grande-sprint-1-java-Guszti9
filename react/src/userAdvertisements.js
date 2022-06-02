import React, {useEffect} from "react";
import './userPage.css';
import logo from './images/spacer_name.png';

function UserAdvertisements (props) {
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
        getData().then(function () {});
    }, [data]);

    return(
        data.map((d) =>
            <div className="card" data-id={d.id}>
                <div className="card-text">
                    <h2>{d.name}</h2>
                    <img src={logo} width="170" height="140" alt="pic"></img> {/*src={logo} will be src={d.image}*/}
                    <p>Price: {d.price} $</p>
                </div>
            </div>)
    )
}

export default UserAdvertisements;