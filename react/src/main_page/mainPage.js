import './mainPage.css';
import {useEffect, useState} from "react";
import {convertFunctions} from "./convertFunctions";

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
        return data;
    }
}

async function filter(year, weapons, mass, price, classification, fuelType, manufacturer){
    const payLoad = {
        minYear: year ? year[0] : null,
        maxYear: year ? year[1] : null,
        weapons: weapons ? weapons : null,
        minMass: mass ? mass[0] : null,
        maxMass: mass ? mass[1] : null,
        minPrice: price ? price[0] : null,
        maxPrice: price ? price[1] : null,
        classification: classification ? classification : null,
        fuelType: fuelType ? fuelType : null,
        manufacturer: manufacturer ? manufacturer : null};
    return await apiPost("http://localhost:8080/api/spaceship/filter", payLoad);
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

function SearchContainer() {
    const [year, setYear] = useState("");
    const [weapons, setWeapons] = useState("");
    const [mass, setMass] = useState("");
    const [price, setPrice] = useState("");
    const [classification, setClassification] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [filteredShips, setFilteredShips] = useState([]);

    let yearToFilter = convertFunctions.convertYear(year);
    let weaponsToFilter = convertFunctions.convertWeapons(weapons);
    let massToFilter = convertFunctions.convertMass(mass);
    let priceToFilter = convertFunctions.convertPrice(price);
    let classificationToFilter = convertFunctions.convertClassification(classification);
    let fuelTypeToFilter = convertFunctions.convertFuelType(fuelType);
    let manufacturerToFilter = convertFunctions.convertManufacturer(manufacturer);

    useEffect(() => {
        filter(yearToFilter, weaponsToFilter, massToFilter, priceToFilter, classificationToFilter, fuelTypeToFilter, manufacturerToFilter).then(getResult);
    }, [year, weapons, mass, price, classification, fuelType, manufacturer])

    function getResult(data) {
        setFilteredShips(data);
    }

    return (
        <div>
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
            </div>
            <ResultContainer result={filteredShips}/>
        </div>
    )
}

function ResultContainer({result}){
    return(
        <div className="container result">
            <div>
                {result?.map((r, index) => <p key={index}>{r.name}</p>)}
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