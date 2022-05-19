package com.codecool.spacer.dao.mem;

import com.codecool.spacer.dao.SpaceShipDao;
import com.codecool.spacer.model.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class SpaceShipDaoMem implements SpaceShipDao {
    private final List<SpaceShip> spaceShips = new ArrayList<>();

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
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getBrand().equals(brand))
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByYear(int year, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getYear() >= year)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByWeapons(boolean weapons, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.hasWeapons() == weapons)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByMass(int minMass, int maxMass, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getMass() >= minMass && spaceShip.getMass() <= maxMass)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByLength(int minLength, int maxLength, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getLength() >= minLength && spaceShip.getLength() <= minLength)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByMaxCrew(int maxCrew, List<SpaceShip> spaceShips){
        return null;
    }

    private List<SpaceShip> filterByPrice(BigDecimal price, List<SpaceShip> spaceShips){
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
