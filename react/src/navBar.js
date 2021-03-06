import './navBar.css';
import './App.css'
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <div className="container">
                <div className="button-container left">
                    <Link className="button" to="/">Main</Link>
                </div>
                <div className="button-container left">
                    <Link className="button" to="/user/1">Profile</Link>
                </div>
                <div className="button-container center">
                    <Link className="button plus" to="/add-spaceship">+</Link>
                </div>
                <div className="button-container right">
                    <a className="button">Login</a>
                </div>
                <div className="button-container right">
                    <a className="button">Register</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;