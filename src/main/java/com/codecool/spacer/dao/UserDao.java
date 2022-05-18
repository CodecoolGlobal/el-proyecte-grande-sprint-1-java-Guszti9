package com.codecool.spacer.dao;

import com.codecool.spacer.model.User;

public interface UserDao {
    void addUser(User user);
    void editUser(User user, int userId);
    void deleteUser(int userId);
}
