import './userPage.css';
import React, {useEffect} from "react";

function GetUserDetails(){
    const [data, setData] = React.useState([]);

    const getData = () => {
        fetch("http://localhost:8080/api/user/{id}", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080'
            }
        }).then(function (response){
            return response.json();
        }).then(function (data){
            console.log(data);
            setData(data);
        });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {data.map((d) => <td>{d.name}</td>)}
        </div>
    )
}

function userDetails(){
    return (
        <div id={"user-details"}>
            <table className="blueTable">
                <thead>
                <tr>
                    <th>UserName</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <GetUserDetails/>
                </tr>
                <tr>
                    <td>cell1_2</td>
                </tr>
                <tr>
                    <td>cell1_3</td>
                </tr>
                <tr>
                    <td>cell1_4</td>
                </tr>
                <tr>
                    <td>cell1_5</td>
                </tr>
                <tr>
                    <td>cell1_6</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default userDetails;