package com.codecool.spacer.model;

import com.codecool.spacer.model.calendar.ShipBook;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class User {
    private static int idCounter = 0;
    private final int id = idCounter++;

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
    private List<ShipBook> reservations;

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
        reservations = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Path getPicture() {
        return picture;
    }

    public String getDescription() {
        return description;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public String getFaceBook() {
        return faceBook;
    }

    public String getLinkedIn() {
        return linkedIn;
    }

    public void editUser(User user) {
        firstName = user.getFirstName();
        lastName = user.getLastName();
        picture = user.getPicture();
        description = user.getDescription();
        phoneNumber = user.getPhoneNumber();
        email = user.getEmail();
        faceBook = user.getFaceBook();
        linkedIn = user.getLinkedIn();
    }

    public void addReservation(ShipBook shipBook) {
        reservations.add(shipBook);
    }

    public void removeReservation(ShipBook shipBook) {
        reservations.remove(shipBook);
    }
}
