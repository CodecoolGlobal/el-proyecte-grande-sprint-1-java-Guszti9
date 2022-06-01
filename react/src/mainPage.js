import './mainPage.css';


function MainPage(){
    return (
        <div>
            <div className="container search">
                <div className="upper-bar">
                    <div className="select">
                        <select name="year" id="year">
                            <option value="choose-year">Choose year...</option>
                            <option value="less-than-2500">2500-</option>
                            <option value="2500-3000">2500-3000</option>
                            <option value="3000-3500">3000-3500</option>
                            <option value="3500-4000">3500-4000</option>
                            <option value="more-than-4000">4000+</option>
                        </select>
                        <div className="select_arrow">
                        </div>
                        <select name="weapons" id="weapons">
                            <option value="choose-weapons">Weapons...</option>
                            <option value="weapons-available">Weaponized</option>
                            <option value="weapons-unavailable">No Weapons</option>
                        </select>
                        <select name="mass" id="mass">
                            <option value="choose-year">Choose mass...</option>
                            <option value="less-than-50000">50.000-</option>
                            <option value="50000-100000">50.000-100.000</option>
                            <option value="more-than-100000">100.000+</option>
                        </select>
                        <select name="max-crew" id="max-crew">
                            <option value="choose-year">Maximum crew...</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                </div>
                <div className="lower-bar">

                </div>
            </div>
            <div className="container result">
                <p>hapa</p>
            </div>
        </div>

    )
}

export default MainPage;