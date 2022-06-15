package com.codecool.spacer.dao.mem;

import com.codecool.spacer.dao.SpaceShipDao;
import com.codecool.spacer.model.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class SpaceShipDaoMem implements SpaceShipDao {
    private List<SpaceShip> spaceShips = new ArrayList<>();

    @Override
    public SpaceShip getSpaceShipById(int id){
        for (SpaceShip spaceShip : spaceShips) {
            if (spaceShip.getId() == id){
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
        return spaceShips.stream()
                .filter(i -> filter.getMinYear() == null && filter.getMaxYear() == null
                        || i.getYear() >= filter.getMinYear() && i.getYear() <= filter.getMaxYear())
                .filter(i -> filter.getWeapons() == null
                        || i.getWeapons() == filter.getWeapons())
                .filter(i -> filter.getMinMass() == null && filter.getMaxMass() == null
                        || i.getMass() >= filter.getMinMass() && i.getMass() <= filter.getMaxMass())
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
        this.spaceShips.addAll(Arrays.asList(spaceShips));
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
    public void rentSpaceShip(int id, int userId, Date StartDate, Date endDate) {
        SpaceShip ship = getSpaceShipById(id);
        ship.getShipCalendar().addReservation(userId, StartDate, endDate);
    }

    private List<SpaceShip> filterAvailable(List<SpaceShip> spaceShips){
        return spaceShips.stream()
                .filter(SpaceShip::isAvailable)
                .collect(Collectors.toList());
    }
}
