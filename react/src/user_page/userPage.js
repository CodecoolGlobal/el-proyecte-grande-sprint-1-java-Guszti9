import UserPicture from "./userPicture";
import GetUserDetails from "./userDetails";
import UserAdvertisements from "./userAdvertisements";


function UserPage(){
    return (
        <div id={"wrapper"}>
            <UserPicture/>
            <GetUserDetails id={0}/>
            <div id="advertisement-box">
                <UserAdvertisements id={0}/>
            </div>
        </div>
    )
}

export default UserPage;