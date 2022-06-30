package com.codecool.spacer.model;

import com.codecool.spacer.model.calendar.ShipBook;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class User {
    @Id
    private long id;

    private String firstName;
    private String lastName;
    private String picture;
    private String description;
    private String password;
    private String phoneNumber;
    private String email;
    private String linkedIn;
    private String faceBook;
    @OneToMany(mappedBy="user")
    private List<SpaceShip> ships;
    @OneToMany(mappedBy="user")
    private List<ShipBook> reservations;

    public User(String firsName, String lastName, String picture, String description, String password, String phoneNumber, String email, String linkedIn, String facebook) {
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

    public User() {

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

    public void addShip(SpaceShip spaceShip) {
        ships.add(spaceShip);
    }

    public boolean removeShip(int shipId) {
        Optional<SpaceShip> ship = ships.stream().filter(s -> s.getId() == shipId).findFirst();

        if(ship.isPresent()) {
            ships.remove(ship.get());
            return true;
        } else return false;
    }

    public void addReservation(ShipBook shipBook) {
        reservations.add(shipBook);
    }

    public void removeReservation(ShipBook shipBook) {
        reservations.remove(shipBook);
    }
}
