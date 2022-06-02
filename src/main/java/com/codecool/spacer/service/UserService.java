package com.codecool.spacer.service;

import com.codecool.spacer.dao.UserDao;
import com.codecool.spacer.model.SpaceShip;
import com.codecool.spacer.model.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserService {
    private final UserDao userDao;

    @Autowired
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public User getUserById(int userId){
        return userDao.getUserById(userId);
    }

    public List<User> getAllUsers(){
        return userDao.getAllUsers();
    }

    public void addUser(User user){
        userDao.addUser(user);
    }

    public void editUser(User user, int userId){
        userDao.editUser(user, userId);
    }

    public void deleteUser(int userId){
        userDao.deleteUser(userId);
    }

    public void addShipToUser(int userId, SpaceShip ship) {
        userDao.addShipToUser(userId, ship);
    }

    public void removeShipFromUser(int userId, int shipId) {
        userDao.removeShipFromUser(userId, shipId);
    }

    public List<SpaceShip> getUserShips(int userId){
        return userDao.filterByUser(userId);
    }
}
