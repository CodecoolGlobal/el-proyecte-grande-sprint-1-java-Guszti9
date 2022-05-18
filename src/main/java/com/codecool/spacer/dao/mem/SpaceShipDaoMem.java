package com.codecool.spacer.dao.mem;

import com.codecool.spacer.dao.SpaceShipDao;
import com.codecool.spacer.model.*;

import java.math.BigDecimal;
import java.util.List;

public class SpaceShipDaoMem implements SpaceShipDao {
    private List<SpaceShip> spaceShips;

    @Override
    public SpaceShip getSpaceShipById(int id){
        return null;
    }

    @Override
    public List<SpaceShip> getSpaceShips() {
        return spaceShips;
    }

    @Override
    public List<SpaceShip> filterSpaceShips(Filter filter) {
        return null;
    }

    @Override
    public void addSpaceShip(SpaceShip spaceShip){

    }

    @Override
    public void editSpaceShip(int id, SpaceShip spaceShip) {

    }

    @Override
    public void deleteSpaceShip(int id) {

    }

    @Override
    public void rentSpaceShip(int id) {

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

    private List<SpaceShip> filterByUser(User user, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterAvailable(List<SpaceShip> spaceShips){
        return null;
    }
}
