package com.codecool.spacer.service;

import com.codecool.spacer.dao.SpaceShipDao;
import com.codecool.spacer.model.Filter;
import com.codecool.spacer.model.SpaceShip;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class SpaceShipService {
    private final SpaceShipDao spaceShipDao;

    @Autowired
    public SpaceShipService(SpaceShipDao spaceShipDao) {
        this.spaceShipDao = spaceShipDao;
    }

    public SpaceShip getSpaceShipById(int id) {
        return spaceShipDao.getSpaceShipById(id);
    }

    public List<SpaceShip> getSpaceShips() {
        return spaceShipDao.getSpaceShips();
    }

    public List<SpaceShip> filterSpaceShips(Filter filter) {
        return spaceShipDao.filterSpaceShips(filter);
    }

    public void addSpaceShip(SpaceShip spaceShip) {
        spaceShipDao.addSpaceShip(spaceShip);
    }

    public void editSpaceShip(int id, SpaceShip spaceShip) {
        spaceShipDao.editSpaceShip(id, spaceShip);
    }

    public void deleteSpaceShip(int id) {
        spaceShipDao.deleteSpaceShip(id);
    }

    public void rentSpaceShip(int id) {
        spaceShipDao.deleteSpaceShip(id);
    }
}
