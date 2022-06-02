import React from "react";
import '../user_page/userPage.css';


function MainPageCard({shipInfo, index}){
    return(
        <div className="card" data-id={shipInfo.id} key={index}>
            <div className="card-text">
                <h2 className="ship-name-text">{shipInfo.brand}</h2>
                <img src={shipInfo.image[0]} alt="img" width="170" className="ship-image"/>
                <h3 className="ship-name-text">{shipInfo.price} $</h3>
            </div>
        </div>
    )
}

export default MainPageCard;