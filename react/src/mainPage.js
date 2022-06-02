import './mainPage.css';
import {useState} from "react";

async function apiPost(url, payload) {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        let data = response.json()
        console.log(data)
        return data;
    }
}

async function filter(year, weapons, mass, price, classification, fuelType, manufacturer){
    const payLoad = {
        minYear: year ? year[0] : null,
        maxYear: year ? year[1] : null,
        weapons: weapons,
        minMass: mass ? mass[0] : null,
        maxMass: mass ? mass[1] : null,
        minPrice: price ? price[0] : null,
        maxPrice: price ? price[1] : null,
        classification: classification,
        fuelType: fuelType,
        manufacturer: manufacturer};
    return await apiPost("http://localhost:8080/api/spaceship/filter", payLoad);
}

function convertYear(year){
    let filterReadyYear;
    let splitYear;
    if (year.length === 0){
        return null;
    }
    if (year.includes("<")){
        splitYear = year.split(" ");
        if (splitYear[0] === "<"){
            filterReadyYear = [0, parseInt(splitYear[1])]
        } else {
            filterReadyYear = [parseInt(splitYear[0]), 10000]
        }
    } else {
        splitYear = year.split("-");
        filterReadyYear = [parseInt(splitYear[0]), parseInt(splitYear[1])]
    }
    return filterReadyYear;
}

function convertWeapons(weapons){
    let filterReadyWeapons;
    if (weapons.length === 0){
        return null;
    }
    if (weapons === "WEAPONIZED"){
        filterReadyWeapons = true;
    } else {
        filterReadyWeapons = false;
    }
    return filterReadyWeapons;
}

function convertMass(mass){
    let filterReadyMass;
    let splitMass;
    if (mass.length === 0){
        return null;
    }
    if (mass.includes("<")){
        splitMass = mass.split(" ");
        if (splitMass[0] === "<"){
            filterReadyMass = [0, parseInt(splitMass[1].split(".").join(""))]
        } else {
            filterReadyMass = [parseInt(splitMass[0].split(".").join("")), 1000000]
        }
    } else {
        splitMass = mass.split("-");
        filterReadyMass = [parseInt(splitMass[0].split(".").join("")), parseInt(splitMass[1].split(".").join(""))]
    }
    return filterReadyMass;
}

function convertPrice(price){
    let filterReadyPrice;
    let splitPrice;
    if (price.length === 0){
        return null;
    }
    if (price.includes("<")){
        splitPrice = price.split(" ");
        if (splitPrice[0] === "<"){
            filterReadyPrice = [0, parseInt(splitPrice[1].split(".").join(""))]
        } else {
            filterReadyPrice = [parseInt(splitPrice[0].split(".").join("")), 10000000]
        }
    } else {
        splitPrice = price.split("-");
        filterReadyPrice = [parseInt(splitPrice[0].split(".").join("")), parseInt(splitPrice[1].split(".").join(""))]
    }
    return filterReadyPrice;
}

function convertClassification(classification){
    if (classification.length === 0){
        return null;
    }
    return classification;
}

function convertFuelType(fuelType){
    if (fuelType.length === 0){
        return null;
    }
    return fuelType;
}

function convertManufacturer(manufacturer){
    let filterReadyManufacturer;
    let splitManufacturer = manufacturer.split(" ")
    if (manufacturer.length === 0){
        return null;
    }
    if (splitManufacturer.length === 1){
        filterReadyManufacturer = splitManufacturer[0];
    } else {
        filterReadyManufacturer = splitManufacturer.join("_");
    }
    return filterReadyManufacturer;
}

function YearSelect({filter}){
    const [year, setYear] = useState(["Year", "< 2500", "2500-3000", "3000-3500", "3500-4000", "4000 <"])
    const yearList = year.map(Year => Year)
    const handleYearChange = (e) => filter(yearList[e.target.value]);

    return (
        <div className="select">
        < select
            onChange={e => handleYearChange(e)}
            className="year" >
            {
                yearList.map((address, key) => <option key={key} value={key}>{address}</option>)
            }
        </select >
        </div>
    )
}

function WeaponSelect({filter}){
    const [weapon, setWeapons] = useState(["Weapons", "WEAPONIZED", "NO WEAPONS"])
    const weaponList = weapon.map(Weapon => Weapon);
    const handleWeaponsChange = (e) => filter(weaponList[e.target.value]);

    return (
        <div className="select">
            < select
                onChange={e => handleWeaponsChange(e)}
                className="weapon" >
                {
                    weaponList.map((address, key) => <option key={key} value={key}>{address}</option>)
                }
            </select >
        </div>
    )
}

function MassSelect({filter}){
    const [mass, setMass] = useState(["Mass", "< 50.000", "50.000-100.000", "100.000 <"]);
    const massList = mass.map(Mass => Mass);
    const handleMassChange = (e) => filter(massList[e.target.value]);

    return (
        <div className="select">
            < select
                onChange={e => handleMassChange(e)}
                className="mass" >
                {
                    massList.map((address, key) => <option key={key} value={key}>{address}</option>)
                }
            </select >
        </div>
    )
}

function PriceSelect({filter}){
    const [price, setPrice] = useState(["Price", "< 100.000", "100.000-500.000", "500.000-1.000.000", "1.000.000 <"]);
    const priceList = price.map(Price => Price);
    const handlePriceChange = (e) => filter(priceList[e.target.value]);

    return (
        <div className="select">
            < select
                onChange={e => handlePriceChange(e)}
                className="price" >
                {
                    priceList.map((address, key) => <option key={key} value={key}>{address}</option>)
                }
            </select >
        </div>
    )
}

function ClassSelect({filter}){
    const [classification, setClassification] = useState(["Classification", "COMBAT", "TRANSPORT", "EXPLORATION", "INDUSTRIAL", "SUPPORT", "COMPETITION", "GROUND", "MULTI"])
    const classificationList = classification.map(Classification => Classification);
    const handleClassificationChange = (e) => filter(classificationList[e.target.value]);

    return (
        <div className="select">
            < select
                onChange={e => handleClassificationChange(e)}
                className="classification" >
                {
                    classificationList.map((address, key) => <option key={key} value={key}>{address}</option>)
                }
            </select >
        </div>
    )
}

function FuelTypeSelect({filter}){
    const [fuelType, setFuelType] = useState(["Fuel Type", "DIESEL", "GASOLINE", "ELECTRIC", "NUCLEAR"]);
    const fuelTypeList = fuelType.map(FuelType => FuelType);
    const handleFuelTypeChange = (e) => filter(fuelTypeList[e.target.value]);

    return (
        <div className="select">
            < select
                onChange={e => handleFuelTypeChange(e)}
                className="fuel-type" >
                {
                    fuelTypeList.map((address, key) => <option key={key} value={key}>{address}</option>)
                }
            </select >
        </div>
    )
}

function ManufacturerSelect({filter}){
    const [manufacturer, setManufacturer] = useState(["Manufacturer", "AEGIS DYNAMICS", "ANVIL AEROSPACE", "CRUSADER INDUSTRIES", "DRAKE INTERPLANETARY", "GREYCAT INDUSTRIAL", "TUMBRIL"])
    const manufacturerList = manufacturer.map(Manufacturer => Manufacturer);
    const handleManufacturerChange = (e) => filter(manufacturerList[e.target.value]);

    return (
        <div className="select">
            < select
                onChange={e => handleManufacturerChange(e)}
                className="manufacturer" >
                {
                    manufacturerList.map((address, key) => <option key={key} value={key}>{address}</option>)
                }
            </select >
        </div>
    )
}

function SearchContainer(){
    const [year, setYear] = useState("");
    const [weapons, setWeapons] = useState("");
    const [mass, setMass] = useState("");
    const [price, setPrice] = useState("");
    const [classification, setClassification] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [filteredShips, setFilteredShips] = useState([]);

    let yearToFilter = convertYear(year);
    let weaponsToFilter = convertWeapons(weapons);
    let massToFilter = convertMass(mass);
    let priceToFilter = convertPrice(price);
    let classificationToFilter = convertClassification(classification);
    let fuelTypeToFilter = convertFuelType(fuelType);
    let manufacturerToFilter = convertManufacturer(manufacturer);

    filter(yearToFilter, weaponsToFilter, massToFilter, priceToFilter, classificationToFilter, fuelTypeToFilter, manufacturerToFilter).then(getResult);

    function getResult(data){
        setFilteredShips(data);
    }

    return (
        <div className="container search">
            <div className="upper-bar">
                <YearSelect filter={setYear}/>
                <WeaponSelect filter={setWeapons}/>
                <MassSelect filter={setMass}/>
                <PriceSelect filter={setPrice}/>
                <ClassSelect filter={setClassification}/>
                <FuelTypeSelect filter={setFuelType}/>
                <ManufacturerSelect filter={setManufacturer}/>
            </div>
            <div>
                {filteredShips?.map((r) => <p>{r.name}</p>)}
            </div>
        </div>
    )
}


function MainPage(){
    return (
        <div>
            <SearchContainer/>
        </div>
    )
}

export default MainPage;