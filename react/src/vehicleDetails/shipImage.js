import {useEffect, useState} from "react";

function ShipImage(props) {
    const [shipImage, setShipImage] = useState([]);
    const [imageInd, setImageInd] = useState(0);
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    useEffect( () => {
        if (props.image !== undefined) {
            for (let i = 0; i < props.image.length; i++) {
                if (!props.image[i].startsWith(".")){
                    props.image[i] = "../" + props.image[i];
                }
            }
            if (props.image.length === 1){
                rightArrow.classList.add("hidden")
            }
            setShipImage(props.image);
        }
    }, [props])

    function getLeftPicture() {
        if (imageInd !== 0) {
            setImageInd(imageInd - 1);
            if (rightArrow.classList.contains("hidden")){
                rightArrow.classList.remove("hidden");
            }
        }
        if (imageInd - 1 === 0 && !leftArrow.classList.contains("hidden")){
            leftArrow.classList.add("hidden");
        }
    }

    function getRightPicture() {
        if (imageInd < shipImage.length - 1) {
            setImageInd(imageInd + 1);
            if (leftArrow.classList.contains("hidden")){
                leftArrow.classList.remove("hidden");
            }
        }
        if (imageInd + 1 === shipImage.length - 1){
            rightArrow.classList.add("hidden");
        }
    }

    return (
        <div className="image-container">
            <div className="left-arrow arrow hidden">
                <img onClick={getLeftPicture} src="../shipDetailsImages/leftArrow.png" alt="leftArrow"/>
            </div>
            <div className="ship-picture">
                <img src={shipImage[imageInd]}  alt="shipImage"/>
            </div>
            <div className="right-arrow arrow">
                <img onClick={getRightPicture} src="../shipDetailsImages/rightArrow.png" alt="rightArrow"/>
            </div>
        </div>
    );
}

export default ShipImage;