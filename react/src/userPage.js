import UserDetails from "./userDetails";
import UserPicture from "./userPicture";

function userPage(){
    return (
        <body>
            <div id={"wrapper"}>
                <UserPicture/>
                <UserDetails/>
            </div>
        </body>
    )
}

export default userPage;