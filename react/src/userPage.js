import UserPicture from "./userPicture";
import GetUserDetails from "./userDetails";


function userPage(){
    return (
        <div id={"wrapper"}>
            <UserPicture/>
            <GetUserDetails id={1}/>
        </div>
    )
}

export default userPage;