import './userPicture.css'
import logo from './images/spacer_logo.png';

function userPicture(){
    return (
        <div id="user-picture">
            <img src={logo} width="300" height="300"></img>
        </div>
    )
}

export default userPicture;