package com.codecool.spacer.dao;

import com.codecool.spacer.model.SpaceShip;
import com.codecool.spacer.model.User;

import java.util.List;

public interface UserDao {

    User getUserById(int userId);

    List<User> getAllUsers();

    void addUser(User user);

    void editUser(User user, int userId);

    void deleteUser(int userId);

    void addShipToUser(int userId, SpaceShip ship);

    void removeShipFromUser(int userId, int shipId);

    List<SpaceShip> filterByUser(int userId);
}
