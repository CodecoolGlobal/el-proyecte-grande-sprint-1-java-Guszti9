import {useEffect, useState} from "react";

function ShipImage(props) {
    const [shipImage, setShipImage] = useState([]);

    useEffect( () => {
        console.log(props.image)
        if (props.image !== undefined) {
            setShipImage(props.image);
        }
    }, [props])


    return (
        <div className="image-container">
            <div className="left-arrow arrow">
                <img src="shipDetailsImages/leftArrow.png"/>
            </div>
            <div className="ship-picture">
                <img src={shipImage[0]} />
            </div>
            <div className="right-arrow arrow">
                <img src="shipDetailsImages/rightArrow.png"/>
            </div>
        </div>
    );
}

export default ShipImage;