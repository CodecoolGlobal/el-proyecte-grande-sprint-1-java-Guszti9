package com.codecool.spacer.dao.mem;

import com.codecool.spacer.dao.UserDao;
import com.codecool.spacer.model.SpaceShip;
import com.codecool.spacer.model.User;
import com.codecool.spacer.service.SpaceShipService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class UserDaoMem implements UserDao {
    private final List<User> allUsers = new ArrayList<>();

    @Autowired
    private SpaceShipService spaceShipService;

    public void setSpaceShipService(SpaceShipService spaceShipService) {
        this.spaceShipService = spaceShipService;
    }

    @Override
    public User getUserById(int userId) {
        return allUsers.stream().filter(u -> u.getId() == userId).findFirst().orElseGet(null);
    }

    @Override
    public List<User> getAllUsers() {
        return allUsers;
    }

    @Override
    public void addUser(User user){
        allUsers.add(user);
    }

    @Override
    public void editUser(User user, int userId) {
        allUsers.stream().filter(u -> u.getId() == userId).findFirst().ifPresent(u -> u.editUser(user));
    }

    @Override
    public void deleteUser(int userId){
        allUsers.remove(allUsers.stream().filter(u -> u.getId() == userId).findFirst().get());
    }

    @Override
    public void addShipToUser(int userId, SpaceShip spaceShip) {
        spaceShipService.addSpaceShip(spaceShip);
        allUsers.stream().filter(u -> u.getId() == userId).findFirst().ifPresent(u -> u.addShip(spaceShip));
    }
}
