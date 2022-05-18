package com.codecool.spacer.dao.mem;

import com.codecool.spacer.dao.UserDao;
import com.codecool.spacer.model.User;

import java.util.List;

public class UserDaoMem implements UserDao {

    List<User> allUsers;

    @Override
    public User getUserById(int userId) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return null;
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
