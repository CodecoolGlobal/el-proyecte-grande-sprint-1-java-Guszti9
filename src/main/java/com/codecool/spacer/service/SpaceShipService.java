package com.codecool.spacer.service;

import com.codecool.spacer.dao.SpaceShipDao;
import com.codecool.spacer.model.SpaceShip;

import java.util.List;

public class SpaceShipService {
    private SpaceShipDao spaceShipDao;

    public SpaceShip getSpaceShipById(int id) {
        return spaceShipDao.getSpaceShipById(id);
    }

    public List<SpaceShip> getSpaceShips() {
        return spaceShipDao.getSpaceShips();
    }

    public List<SpaceShip> filterSpaceShip() {
        return spaceShipDao.filterSpaceShips();
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
