import UserPicture from "./userPicture";
import GetUserDetails from "./userDetails";
import UserAdvertisements from "./userAdvertisements";
import {Outlet} from "react-router-dom";


function UserPage(){
    return (
        <div id={"wrapper"}>
            <UserPicture/>
            <GetUserDetails id={0}/>
            <div id="advertisement-box">
                <UserAdvertisements id={0}/>
            </div>
            <Outlet/>
        </div>
    )
}

export default UserPage;