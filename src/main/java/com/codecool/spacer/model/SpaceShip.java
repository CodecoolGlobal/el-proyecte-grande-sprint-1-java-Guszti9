package com.codecool.spacer.model;

import com.codecool.spacer.model.calendar.ShipCalendar;
import com.codecool.spacer.model.shipdata.Classification;
import com.codecool.spacer.model.shipdata.FuelType;
import com.codecool.spacer.model.shipdata.Manufacturer;

import java.math.BigDecimal;
import java.util.List;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class SpaceShip {
    @Id
    private long id;

    private String name;
    private String brand;
    private Integer year;
    private String description;
    private Boolean weapons;
    private Integer mass;
    private Integer length;
    private Integer maxCrew;
    private BigDecimal price;
    private Classification classification;
    private FuelType fuelType;
    private Manufacturer manufacturer;
    @ElementCollection(targetClass=String.class)
    private List<String> image;
    @OneToOne(mappedBy="ship")
    private ShipCalendar shipCalendar;
    @ManyToOne
    private User user;
    private Boolean isAvailable;

    public SpaceShip(String name, String brand, Integer year, String description, Boolean weapons, Integer mass, Integer length, Integer maxCrew, BigDecimal price, Classification classification, FuelType fuelType, Manufacturer manufacturer, List<String> image, User user) {
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
        this.image = image;
        this.shipCalendar = new ShipCalendar(this);
        this.user = user;
        this.isAvailable = true;
    }

    public void editSpaceShip(SpaceShip spaceShip) {
        name = spaceShip.getName();
        brand = spaceShip.getBrand();
        year = spaceShip.getYear();
        description = spaceShip.getDescription();
        weapons = spaceShip.getWeapons();
        mass = spaceShip.getMass();
        length = spaceShip.getLength();
        maxCrew = spaceShip.getMaxCrew();
        price = spaceShip.getPrice();
        classification = spaceShip.getClassification();
        fuelType = spaceShip.getFuelType();
        manufacturer = spaceShip.getManufacturer();
        isAvailable = spaceShip.getIsAvailable();
    }
}
