package com.codecool.spacer.model;

import com.codecool.spacer.model.shipdata.Classification;
import com.codecool.spacer.model.shipdata.FuelType;
import com.codecool.spacer.model.shipdata.Manufacturer;

import java.math.BigDecimal;

public class Filter {
    private final Integer minYear;
    private final Integer maxYear;
    private final Boolean weapons;
    private final Integer minMass;
    private final Integer maxMass;
    private final Integer maxCrew;
    private final BigDecimal minPrice;
    private final BigDecimal maxPrice;
    private final Classification classification;
    private final FuelType fuelType;
    private final Manufacturer manufacturer;
    private final Integer userId;
    private final Boolean isAvailable;

    public Filter(Integer minYear, Integer maxYear, Boolean weapons, Integer minMass, Integer maxMass, Integer maxCrew, BigDecimal minPrice, BigDecimal maxPrice, Classification classification, FuelType fuelType, Manufacturer manufacturer, Integer userId, Boolean isAvailable) {
        this.minYear = minYear;
        this.maxYear = maxYear;
        this.weapons = weapons;
        this.minMass = minMass;
        this.maxMass = maxMass;
        this.maxCrew = maxCrew;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.classification = classification;
        this.fuelType = fuelType;
        this.manufacturer = manufacturer;
        this.userId = userId;
        this.isAvailable = isAvailable;
    }

    public Integer getMinYear() {
        return minYear;
    }

    public Integer getMaxYear(){ return maxYear;}

    public Boolean getWeapons() {
        return weapons;
    }

    public Integer getMinMass() {
        return minMass;
    }

    public Integer getMaxMass(){
        return maxMass;
    }

    public Integer getMaxCrew() {
        return maxCrew;
    }

    public BigDecimal getMinPrice() {
        return minPrice;
    }

    public BigDecimal getMaxPrice(){
        return maxPrice;
    }

    public Classification getClassification() {
        return classification;
    }

    public FuelType getFuelType() {
        return fuelType;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public Integer getUserId(){
        return userId;
    }

    public Boolean isAvailable() {
        return isAvailable;
    }
}
