package com.codecool.spacer.dao.mem;

import com.codecool.spacer.dao.SpaceShipDao;
import com.codecool.spacer.model.*;
import com.codecool.spacer.model.shipdata.Classification;
import com.codecool.spacer.model.shipdata.FuelType;
import com.codecool.spacer.model.shipdata.Manufacturer;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class SpaceShipDaoMem implements SpaceShipDao {
    private List<SpaceShip> spaceShips = new ArrayList<>();

    @Override
    public SpaceShip getSpaceShipById(int id){
        for (SpaceShip spaceShip : spaceShips) {
            if (spaceShip.getUserId() == id){
                return spaceShip;
            }
        }
        return null;
    }

    @Override
    public List<SpaceShip> getSpaceShips() {
        return spaceShips;
    }

    @Override
    public List<SpaceShip> filterSpaceShips(Filter filter) {
        /* List<SpaceShip> resultSpaceShipList = new ArrayList<>(spaceShips);

        if (filter.getYear() != null){
            resultSpaceShipList = filterByYear(filter.getYear(), resultSpaceShipList);
        }

        if (filter.getWeapons() != null){
            resultSpaceShipList = filterByWeapons(filter.getWeapons(), resultSpaceShipList);
        }

        if (filter.getMinMass() != null && filter.getMaxMass() != null){
            resultSpaceShipList = filterByMass(filter.getMinMass(), filter.getMaxMass(), resultSpaceShipList);
        }

        if (filter.getMinLength() != null && filter.getMaxLength() != null){
            resultSpaceShipList = filterByLength(filter.getMinLength(), filter.getMaxLength(), resultSpaceShipList);
        }

        if (filter.getMaxCrew() != null){
            resultSpaceShipList = filterByMaxCrew(filter.getMaxCrew(), resultSpaceShipList);
        }

        if (filter.getMinPrice() != null && filter.getMaxPrice() != null){
            resultSpaceShipList = filterByPrice(filter.getMinPrice(), filter.getMaxPrice(), resultSpaceShipList);
        }

        if (filter.getClassification() != null){
            resultSpaceShipList = filterByClassification(filter.getClassification(), resultSpaceShipList);
        }
        if (filter.getFuelType() != null){
            resultSpaceShipList = filterByFuelType(filter.getFuelType(), resultSpaceShipList);
        }

        if (filter.getManufacturer() != null){
            resultSpaceShipList = filterByManufacturer(filter.getManufacturer(), resultSpaceShipList);
        }

        if (filter.getUserId() != null){
            resultSpaceShipList = filterByUser(filter.getUserId(), resultSpaceShipList);
        }

        if (filter.isAvailable() != null){
            resultSpaceShipList = filterAvailable(resultSpaceShipList);
        }

        return resultSpaceShipList;

         */
        return spaceShips.stream()
                .filter(i -> filter.getYear() == null
                        || i.getYear() >= filter.getYear())
                .filter(i -> filter.getWeapons() == null
                        || i.getWeapons() == filter.getWeapons())
                .filter(i -> filter.getMinMass() == null && filter.getMaxMass() == null
                        || i.getMass() >= filter.getMinMass() && i.getMass() <= filter.getMaxMass())
                .filter(i -> filter.getMinLength() == null && filter.getMaxLength() == null
                        || i.getLength() >= filter.getMaxLength() && i.getLength() <= filter.getMaxLength())
                .filter(i -> filter.getMaxCrew() == null
                        || i.getMaxCrew().equals(filter.getMaxCrew()))
                .filter(i -> filter.getMinPrice() == null && filter.getMaxPrice() == null
                        || i.getPrice().compareTo(filter.getMinPrice()) > 0 && i.getPrice().compareTo(filter.getMaxPrice()) < 0)
                .filter(i -> filter.getClassification() == null
                        || i.getClassification().equals(filter.getClassification()))
                .filter(i -> filter.getFuelType() == null
                        || i.getFuelType().equals(filter.getFuelType()))
                .filter(i -> filter.getManufacturer() == null
                        || i.getManufacturer().equals(filter.getManufacturer()))
                .collect(Collectors.toList());
    }

    @Override
    public void addSpaceShip(SpaceShip spaceShip){
        spaceShips.add(spaceShip);
    }

    @Override
    public void addSpaceShips(SpaceShip[] spaceShips){
        for (SpaceShip spaceShip : spaceShips) {
            this.spaceShips.add(spaceShip);
        }
    }

    @Override
    public void editSpaceShip(int id, SpaceShip spaceShip) {
        spaceShips.stream().filter(s -> s.getId() == id).findFirst().ifPresent(s -> s.editSpaceShip(spaceShip));
    }

    @Override
    public void deleteSpaceShip(int id) {
        spaceShips.stream().filter(s -> s.getId() == id).findFirst().ifPresent(spaceShips::remove);
    }

    @Override
    public void rentSpaceShip(int id) {

    }

    /*private List<SpaceShip> filterByYear(int year, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getYear() >= year)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByWeapons(boolean weapons, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getWeapons() == weapons)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByMass(int minMass, int maxMass, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getMass() >= minMass && spaceShip.getMass() <= maxMass)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByLength(int minLength, int maxLength, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getLength() >= minLength && spaceShip.getLength() <= maxLength)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByMaxCrew(int maxCrew, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getMaxCrew() == maxCrew)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByPrice(BigDecimal minPrice, BigDecimal maxPrice, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getPrice().compareTo(minPrice) > 0 && spaceShip.getPrice().compareTo(maxPrice) < 0)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByClassification(Classification classification, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getClassification().equals(classification))
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByFuelType(FuelType fuelType, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getFuelType().equals(fuelType))
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterByManufacturer(Manufacturer manufacturer, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getManufacturer().equals(manufacturer))
                .collect(Collectors.toList());
    }
    */

    private List<SpaceShip> filterByUser(Integer userId, List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(spaceShip -> spaceShip.getUserId() == userId)
                .collect(Collectors.toList());
    }

    private List<SpaceShip> filterAvailable(List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(SpaceShip::isAvailable)
                .collect(Collectors.toList());
    }
}
