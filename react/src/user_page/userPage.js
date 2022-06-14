import UserPicture from "./userPicture";
import GetUserDetails from "./userDetails";
import UserAdvertisements from "./userAdvertisements";
import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";

function UserPage(props){

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
        <div id={"wrapper"}>
            <UserPicture image={data.picture}/>
            <GetUserDetails id={data}/>
            <div id="advertisement-box">
                <UserAdvertisements id={props.id}/>
            </div>
            <Outlet/>
        </div>
    )
}

export default UserPage;