package com.codecool.spacer.service;

import com.codecool.spacer.dao.UserDao;
import com.codecool.spacer.model.User;

import java.util.List;

public class UserService {

    private UserDao userDao;

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
}
