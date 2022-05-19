package com.codecool.spacer.model;

import com.codecool.spacer.model.calendar.ShipCalendar;
import com.codecool.spacer.model.shipdata.Classification;
import com.codecool.spacer.model.shipdata.FuelType;
import com.codecool.spacer.model.shipdata.Manufacturer;

import java.math.BigDecimal;
import java.util.GregorianCalendar;

public class SpaceShip {
    private static int idCounter = 0;
    private int id = idCounter++;

    private String name;
    private String brand;
    private int year;
    private String description;
    private boolean weapons;
    private int mass;
    private int length;
    private int maxCrew;
    private BigDecimal price;
    private Classification classification;
    private FuelType fuelType;
    private Manufacturer manufacturer;
    private ShipCalendar shipCalendar;
    private int userId;
    private boolean isAvailable;

    public SpaceShip(String name, String brand, int year, String description, boolean weapons, int mass, int length, int maxCrew, BigDecimal price, Classification classification, FuelType fuelType, Manufacturer manufacturer, int userId) {
        this.name = name;
        this.brand = brand;
        this.year = year;
        this.description = description;
        this.weapons = weapons;
        this.mass = mass;
        this.length = length;
        this.maxCrew = maxCrew;
        this.price = price;
        this.classification = classification;
        this.fuelType = fuelType;
        this.manufacturer = manufacturer;
        this.shipCalendar = new ShipCalendar(id);
        this.userId = userId;
        this.isAvailable = true;
    }

    //GETTERS

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getBrand() {
        return brand;
    }

    public int getYear() {
        return year;
    }

    public String getDescription() {
        return description;
    }

    public boolean getWeapons() {
        return weapons;
    }

    public int getMass() {
        return mass;
    }

    public int getLength() {
        return length;
    }

    public int getMaxCrew() {
        return maxCrew;
    }

    public BigDecimal getPrice() {
        return price;
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

    public int getUserId() {
        return userId;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void editSpaceShip(SpaceShip spaceShip) {
        brand = spaceShip.getBrand();
        year = spaceShip.getYear();
        weapons = spaceShip.hasWeapons();
        length = spaceShip.getLength();
        maxCrew = spaceShip.getMaxCrew();
        price = spaceShip.getPrice();
        classification = spaceShip.getClassification();
        fuelType = spaceShip.getFuelType();
        manufacturer = spaceShip.getManufacturer();
        isAvailable = spaceShip.isAvailable();
    }
}
