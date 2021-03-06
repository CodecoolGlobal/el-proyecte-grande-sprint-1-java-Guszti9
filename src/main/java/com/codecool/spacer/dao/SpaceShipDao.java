package com.codecool.spacer.dao;

import com.codecool.spacer.model.Filter;
import com.codecool.spacer.model.SpaceShip;
import com.codecool.spacer.model.User;

import java.util.Date;
import java.util.List;

public interface SpaceShipDao {

    SpaceShip getSpaceShipById(int id);

    List<SpaceShip> getSpaceShips();

    List<SpaceShip> filterSpaceShips(Filter filter);

    void addSpaceShip(SpaceShip spaceShip);

    void addSpaceShips(SpaceShip[] spaceShips);

    void editSpaceShip(int id, SpaceShip spaceShip);

    void deleteSpaceShip(int id);

    void rentSpaceShip(int id, User targetUser, Date StartDate, Date endDate);

    List<List<Date>> getRentedDates(int id);
}
