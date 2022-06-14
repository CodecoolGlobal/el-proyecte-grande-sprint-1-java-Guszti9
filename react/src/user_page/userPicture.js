import './userPicture.css'
import logo from '../images/spacer_logo.png';

function userPicture(props){
    return (
        <div id="user-picture">
            <img src={props.image} width="300" height="300"></img>
        </div>
    )
}

export default userPicture;