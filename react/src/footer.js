import './footer.css'

function Footer(){
    return (
        <div>
            <a href="https://www.facebook.com" target="_blank" className="fa fa-facebook"/>
            <a href="https://www.twitter.com" target="_blank" className="fa fa-twitter"/>
            <a href="https://www.linkedin.com" target="_blank" className="fa fa-linkedin"/>
            <a href="https://www.instagram.com" target="_blank" className="fa fa-instagram"/>
            <a href="https://www.vimeo.com" target="_blank" className="fa fa-vimeo"/>
            <p id={"footer-text"}> Copyright © 2022 SpaceR Inc. All rights reserved. Registration on or use of this site constitutes acceptance of our
                Terms of Service
                ,
                Privacy Policy
                and
                Cookies Policy
                .</p>
        </div>
    )
}

export default Footer;