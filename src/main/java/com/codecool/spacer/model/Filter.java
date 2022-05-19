package com.codecool.spacer.model;

import com.codecool.spacer.model.shipdata.Classification;
import com.codecool.spacer.model.shipdata.FuelType;
import com.codecool.spacer.model.shipdata.Manufacturer;

import java.math.BigDecimal;

public class Filter {
    private String brand;
    private Integer year;
    private Boolean weapons;
    private Integer minMass;
    private Integer maxMass;
    private Integer minLength;
    private Integer maxLength;
    private Integer maxCrew;
    private BigDecimal minPrice;
    private BigDecimal maxPrice;
    private Classification classification;
    private FuelType fuelType;
    private Manufacturer manufacturer;
    private Integer userId;
    private Boolean isAvailable;

    public Filter(String brand, Integer year, Boolean weapons, Integer minMass, Integer maxMass, Integer minLength, Integer maxLength, Integer maxCrew, BigDecimal minPrice, BigDecimal maxPrice, Classification classification, FuelType fuelType, Manufacturer manufacturer, Integer userId, Boolean isAvailable) {
        this.brand = brand;
        this.year = year;
        this.weapons = weapons;
        this.minMass = minMass;
        this.maxMass = maxMass;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.maxCrew = maxCrew;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.classification = classification;
        this.fuelType = fuelType;
        this.manufacturer = manufacturer;
        this.userId = userId;
        this.isAvailable = isAvailable;
    }

    public String getBrand() {
        return brand;
    }

    public Integer getYear() {
        return year;
    }

    public Boolean getWeapons() {
        return weapons;
    }

    public Integer getMinMass() {
        return minMass;
    }

    public Integer getMaxMass(){
        return maxMass;
    }

    public Integer getMinLength() {
        return minLength;
    }

    public Integer getMaxLength(){
        return maxLength;
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
