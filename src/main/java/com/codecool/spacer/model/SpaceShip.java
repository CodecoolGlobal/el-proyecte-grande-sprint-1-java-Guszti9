package com.codecool.spacer.model;

import java.math.BigDecimal;
import java.util.Calendar;
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
    private Calendar calendar;
    private User user;
    private boolean isAvailable;

    public SpaceShip(String name, String brand, int year, String description, boolean weapons, int mass, int length, int maxCrew, BigDecimal price, Classification classification, FuelType fuelType, Manufacturer manufacturer, User user) {
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
        this.calendar = new GregorianCalendar();
        this.user = user;
        this.isAvailable = true;
    }
}
