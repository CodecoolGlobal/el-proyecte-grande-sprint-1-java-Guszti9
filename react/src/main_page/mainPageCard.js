import React from "react";
import '../user_page/userPage.css';
import {Link} from "react-router-dom";


function MainPageCard({shipInfo, index}){
    return(
        <div className="card" data-id={shipInfo.id} key={index}>
            <Link className="ship-image-link" to={"/spaceship-details/" + shipInfo.id}>
                <div className="card-text">
                    <h2 className="ship-name-text">{shipInfo.brand}</h2>
                    <img src={shipInfo.image[0]} alt="img" width="170" className="ship-image"/>
                    <h3 className="ship-name-text">{shipInfo.price} $</h3>
                </div>
            </Link>
        </div>
    )
}

export default MainPageCard;