package com.codecool.spacer.model;

import com.codecool.spacer.model.shipdata.Classification;
import com.codecool.spacer.model.shipdata.FuelType;
import com.codecool.spacer.model.shipdata.Manufacturer;

import java.math.BigDecimal;

public class Filter {
    private String brand;
    private int year;
    private boolean weapons;
    private int mass;
    private int length;
    private int maxCrew;
    private BigDecimal price;
    private Classification classification;
    private FuelType fuelType;
    private Manufacturer manufacturer;
    private User user;
    private boolean isAvailable;

    public Filter(String brand, int year, boolean weapons, int mass, int length, int maxCrew, BigDecimal price, Classification classification, FuelType fuelType, Manufacturer manufacturer, User user, boolean isAvailable) {
        this.brand = brand;
        this.year = year;
        this.weapons = weapons;
        this.mass = mass;
        this.length = length;
        this.maxCrew = maxCrew;
        this.price = price;
        this.classification = classification;
        this.fuelType = fuelType;
        this.manufacturer = manufacturer;
        this.user = user;
        this.isAvailable = isAvailable;
    }


}
