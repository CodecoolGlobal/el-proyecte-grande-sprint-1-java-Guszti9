import './userPicture.css'
import logo from '../images/spacer_logo.png';

function userPicture(props){
    return (
        <div id="user-picture">
            <img src={"../" + props.image} width="400" height="300"></img>
        </div>
    )
}

export default userPicture;