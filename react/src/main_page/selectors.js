import {useState} from "react";

export function YearSelect({filter}){
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

export function WeaponSelect({filter}){
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

export function MassSelect({filter}){
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

export function PriceSelect({filter}){
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

export function ClassSelect({filter}){
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

export function FuelTypeSelect({filter}){
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

export function ManufacturerSelect({filter}){
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