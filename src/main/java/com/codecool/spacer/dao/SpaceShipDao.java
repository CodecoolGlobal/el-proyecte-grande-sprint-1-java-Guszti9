package com.codecool.spacer.dao;

import com.codecool.spacer.model.SpaceShip;

import java.util.List;

public interface SpaceShipDao {

    SpaceShip getSpaceShipById(int id);

    List<SpaceShip> getSpaceShips();

    void filterSpaceShips();

    void addSpaceShip(SpaceShip spaceShip);

    void deleteSpaceShip(int id);

    void rentSpaceShip(int id);

}
