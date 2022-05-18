package com.codecool.spacer.dao.mem;

import com.codecool.spacer.model.*;

import java.math.BigDecimal;
import java.util.List;

public class SpaceShipDaoMem {
    private List<SpaceShip> spaceShips;


    public SpaceShip getSpaceShipById(int id){
        return null;
    }

    public List<SpaceShip> getSpaceShips() {
        return spaceShips;
    }

    public void addSpaceShip(SpaceShip spaceShip){

    }

    public void deleteSpaceShip(SpaceShip spaceShip){

    }

    public void rentSpaceShip(SpaceShip spaceShip){

    }

    private List<SpaceShip> filterByBrand(String brand, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByYear(int year, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByWeapons(boolean weapons, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByMass(int mass, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByLength(int length, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByMaxCrew(int maxCrew, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByBrand(BigDecimal price, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByClassification(Classification classification, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByFuelType(FuelType fuelType, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByManufacturer(Manufacturer manufacturer, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByUser(User use, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterAvailable(List<SpaceShip> spaceShips){
        return null;
    }
}
