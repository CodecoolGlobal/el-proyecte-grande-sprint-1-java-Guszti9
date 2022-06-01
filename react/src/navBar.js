import './navBar.css';
import './App.css'

function NavBar(){
    return (
        <nav>
            <div className="container">
                <div className="button-container left">
                    <a className="button">Main</a>
                </div>
                <div className="button-container left">
                    <a className="button">Profile</a>
                </div>
                <div className="button-container center">
                    <a className="button plus">+</a>
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