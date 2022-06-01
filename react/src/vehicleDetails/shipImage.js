function ShipImage(props) {



    return (
        <div className="image-container">
            <div className="left-arrow arrow">
                <img src="shipDetailsImages/leftArrow.png"/>
            </div>
            <div className="ship-picture">
                <img src={props.image} />
            </div>
            <div className="right-arrow arrow">
                <img src="shipDetailsImages/rightArrow.png"/>
            </div>
        </div>
    );
}

export default ShipImage;