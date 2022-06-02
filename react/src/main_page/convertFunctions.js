export let convertFunctions = {

    convertYear: function(year){
        let filterReadyYear;
        let splitYear;
        if (year.length === 0 || year === "Year"){
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
},

    convertWeapons: function(weapons){
        let filterReadyWeapons;
        if (weapons.length === 0 || weapons === "Weapons"){
            return null;
        }
        filterReadyWeapons = weapons === "WEAPONIZED";
        return filterReadyWeapons;
},

    convertMass: function(mass){
        let filterReadyMass;
        let splitMass;
        if (mass.length === 0 || mass === "Mass"){
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
},

    convertPrice: function(price){
        let filterReadyPrice;
        let splitPrice;
        if (price.length === 0 || price === "Price"){
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
},

    convertClassification: function(classification){
        if (classification.length === 0 || classification === "Classification"){
            return null;
        }
        return classification;
},

    convertFuelType: function(fuelType){
        if (fuelType.length === 0 || fuelType === "Fuel Type"){
            return null;
        }
        return fuelType;
},

    convertManufacturer: function(manufacturer){
        let filterReadyManufacturer;
        let splitManufacturer = manufacturer.split(" ")
        if (manufacturer.length === 0 || manufacturer === "Manufacturer"){
            return null;
        }
        if (splitManufacturer.length === 1){
            filterReadyManufacturer = splitManufacturer[0];
        } else {
            filterReadyManufacturer = splitManufacturer.join("_");
        }
        return filterReadyManufacturer;
    }
};