import logo from "./images/spacer_logo.png";
import companyName from "./images/spacer_name.png";
import './header.css';

function Header(){
    return (
        <div>
            <header className="header">
                <img src={logo} className="header-logo" alt="logo" />
                <img src={companyName} className="header-name" alt="name" />
            </header>
        </div>
    )
}

export default Header;