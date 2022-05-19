package com.codecool.spacer.controller;


import com.codecool.spacer.model.User;
import com.codecool.spacer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("api/user/{id}")
    public User getUserById(@PathVariable int id){
        return userService.getUserById(id);
    }

    @GetMapping("api/user/all")
    public List<User> getUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("api/user/add")
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @PutMapping("api/user/edit/{id}")
    public void editUser(@PathVariable int id, @RequestBody User user){
        userService.editUser(user, id);
    }

    @DeleteMapping("api/user/delete/{id}")
    public void deleteUser(@PathVariable int id){
        userService.deleteUser(id);
    }
}
