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
    }, [data]);

    return (
        <div id={"user-details"}>
            <table className="blueTable">
                <thead>
                    <th>
                        {data.firstName} {data.lastName}
                    </th>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {data.linkedIn}
                    </td>
                </tr>
                <tr>
                    <td>
                        e-mail: {data.email}
                    </td>
                </tr>
                <tr>
                    <td>
                        facebook: {data.faceBook}
                    </td>
                </tr>
                <tr>
                    <td>
                        phone: {data.phoneNumber}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}

export default GetUserDetails;