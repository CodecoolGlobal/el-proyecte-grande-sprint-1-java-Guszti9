import './mainPage.css';
import {useEffect, useState} from "react";
import {convertFunctions} from "./convertFunctions";
import {YearSelect, WeaponSelect, MassSelect, PriceSelect, ClassSelect, FuelTypeSelect, ManufacturerSelect} from "./selectors";

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