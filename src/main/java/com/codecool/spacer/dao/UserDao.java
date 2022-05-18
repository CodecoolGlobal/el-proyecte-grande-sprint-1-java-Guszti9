package com.codecool.spacer.dao;

import com.codecool.spacer.model.User;

import java.util.List;

public interface UserDao {

    User getUserById(int userId);

    List<User> getAllUsers();

    void addUser(User user);

    void editUser(User user, int userId);

    void deleteUser(int userId);

}
