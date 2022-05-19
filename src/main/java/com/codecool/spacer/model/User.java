package com.codecool.spacer.model;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class User {
    private static int idCounter = 0;
    private int id = idCounter++;

    private String firstName;
    private String lastName;
    private Path picture;
    private String description;
    private String password;
    private String phoneNumber;
    private String email;
    private String linkedIn;
    private String faceBook;
    private List<SpaceShip> ships;

    public User(String firsName, String lastName, Path picture, String description, String password, String phoneNumber, String email, String linkedIn, String facebook) {
        this.firstName = firsName;
        this.lastName = lastName;
        this.picture = picture;
        this.description = description;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.linkedIn = linkedIn;
        this.faceBook = facebook;
        ships = new ArrayList<>();
    }

    public int getId() {
        return id;
    }
}
