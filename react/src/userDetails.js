import './userPage.css';
import React, {useEffect} from "react";

function GetUserDetails(props) {
    const [data, setData] = React.useState([]);

    const getData = () => {
        fetch(`http://localhost:8080/api/user/${props.id}`, {
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


    return (
        <div id={"user-details"}>
            <table className="blueTable">
                <tbody>
                <tr>
                    {data?.map(d => <td>{d.faceBook}</td>)}
                </tr>
                </tbody>
            </table>
        </div>

    )
}

export default GetUserDetails;