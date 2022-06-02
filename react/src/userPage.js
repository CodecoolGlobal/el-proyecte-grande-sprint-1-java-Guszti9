import UserPicture from "./userPicture";
import GetUserDetails from "./userDetails";
import UserAdvertisements from "./userAdvertisements";


function userPage(){
    return (
        <div id={"wrapper"}>
            <UserPicture/>
            <GetUserDetails id={1}/>
            <UserAdvertisements id={0}/>
        </div>
    )
}

export default userPage;