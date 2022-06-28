import './addSpaceShip.css';
import {WeaponSelect, FuelTypeSelect, ClassSelect, ManufacturerSelect} from "../main_page/mainPageSelectors";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

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

async function addShip(name, brand, year, description, weapons, mass, length, maxCrew, price, classification, fuelType, manufacturer, userId){
    const payLoad = {
        name: name,
        brand: brand.toUpperCase(),
        year: year,
        description: description,
        weapons: weapons === "WEAPONIZED",
        mass: mass,
        length: length,
        maxCrew: maxCrew,
        price: price,
        classification: classification,
        fuelType: fuelType,
        manufacturer: manufacturer.replace(" ", "_"),
        userId: userId
    }
    return await apiPost("http://localhost:8080/api/spaceship/add", payLoad);
}

function AddSpaceShip(){
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [year, setYear] = useState("");
    const [mass, setMass] = useState("");
    const [description, setDescription] = useState("");
    const [length, setLength] = useState("");
    const [crew, setCrew] = useState("");
    const [classification, setClassification] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [weapons, setWeapons] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [price, setPrice] = useState("");

    function handleChange(e){
        switch (e.currentTarget.name){
            case "name":
                setName(e.currentTarget.value);
                break;
            case "brand":
                setBrand(e.currentTarget.value);
                break;
            case "year":
                setYear(e.currentTarget.value);
                break;
            case "mass":
                setMass(e.currentTarget.value);
                break;
            case "description":
                setDescription(e.currentTarget.value);
                break;
            case "length":
                setLength(e.currentTarget.value);
                break;
            case "max-crew":
                setCrew(e.currentTarget.value);
                break;
            case "price":
                setPrice(e.currentTarget.value);
                break;
        }
    }

    function handleClick(){
        addShip(name, brand, year, description, weapons, mass, length, crew, price, classification, fuelType, manufacturer, 0);
        navigate("/");
    }


    return(
        <div>
            <form>
                <div className="add-container">
                    <h3>Ship name : </h3>
                    <input onChange={handleChange} type="text" name="name" className="text-input"/>
                </div>
                <div className="add-container">
                    <h3>Ship brand : </h3>
                    <input onChange={handleChange} type="text" name="brand" className="text-input"/>
                </div>
                <div className="add-container">
                    <div className="part-container">
                        <h3>Year : </h3>
                        <input onChange={handleChange} type="text" name="year" className="text-input"/>
                    </div>
                    <div className="part-container">
                        <h3>Mass : </h3>
                        <input onChange={handleChange} type="text" name="mass" className="text-input"/>
                    </div>
                </div>
                <div className="add-container">
                    <h3>Description : </h3>
                    <textarea onChange={handleChange} name="description" className="text-input description"/>
                </div>
                <div className="add-container">
                    <div className="part-container">
                        <h3>Length : </h3>
                        <input onChange={handleChange} type="text" name="length" className="text-input"/>
                    </div>
                    <div className="part-container">
                        <h3>Max. crew : </h3>
                        <input onChange={handleChange} type="text" name="max-crew" className="text-input"/>
                    </div>
                </div>
                <div className="add-container">
                    <div className="part-container">
                        <h3>Classification : </h3>
                        <ClassSelect filter={setClassification}/>
                    </div>
                    <div className="part-container">
                        <h3>Fuel Type : </h3>
                        <FuelTypeSelect filter={setFuelType}/>
                    </div>
                </div>
                <div className="add-container">
                    <div className="part-container">
                        <h3>Weapons : </h3>
                        <WeaponSelect filter={setWeapons}/>
                    </div>
                    <div className="part-container">
                        <h3>Manufacturer : </h3>
                        <ManufacturerSelect filter={setManufacturer}/>
                    </div>
                </div>
                <div className="add-container">
                    <h3>Price : </h3>
                    <input onChange={handleChange} type="text" name="price" className="text-input"/>
                </div>
                <input onClick={handleClick} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddSpaceShip;