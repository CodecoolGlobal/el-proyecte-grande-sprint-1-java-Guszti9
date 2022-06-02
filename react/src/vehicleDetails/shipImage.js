import {useEffect, useState} from "react";

function ShipImage(props) {
    const [shipImage, setShipImage] = useState([]);
    const [imageInd, setImageInd] = useState(0);

    useEffect( () => {
        if (props.image !== undefined) {
            setShipImage(props.image);
        }
    }, [props])

    function getLeftPicture() {
        if (imageInd !== 0) {
            setImageInd(imageInd - 1);
        }
    }

    function getRightPicture() {
        if (imageInd < shipImage.length - 1) {
            setImageInd(imageInd + 1);
        }
    }

    return (
        <div className="image-container">
            <div className="left-arrow arrow">
                <img onClick={getLeftPicture} src="shipDetailsImages/leftArrow.png"/>
            </div>
            <div className="ship-picture">
                <img src={shipImage[imageInd]} />
            </div>
            <div className="right-arrow arrow">
                <img onClick={getRightPicture} src="shipDetailsImages/rightArrow.png"/>
            </div>
        </div>
    );
}

export default ShipImage;