package com.codecool.spacer.dao.mem;

import com.codecool.spacer.dao.UserDao;
import com.codecool.spacer.model.User;

import java.util.ArrayList;
import java.util.List;

public class UserDaoMem implements UserDao {
    private final List<User> allUsers = new ArrayList<>();

    @Override
    public User getUserById(int userId) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return allUsers;
    }

    @Override
    public void addUser(User user){

    }

    @Override
    public void editUser(User user, int userId) {

    }

    @Override
    public void deleteUser(int userId){

    }

}
