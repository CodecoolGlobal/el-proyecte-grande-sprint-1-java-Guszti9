package com.codecool.spacer.model.calendar;

import com.codecool.spacer.model.User;
import com.codecool.spacer.model.SpaceShip;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import java.util.stream.Collectors;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class ShipCalendar {
    @Id
    private long id;
    @OneToOne
    private SpaceShip ship;
    @OneToMany
    private List<ShipBook> rentedDates;

    public ShipCalendar(SpaceShip ship) {
        this.ship = ship;
        this.rentedDates = new ArrayList<>();
    }

    public ShipCalendar() {

    }

    public boolean addReservation(User targetUser, Date startDate, Date endDate) {
        if (!isTimeOccupied(startDate, endDate)) {
            ShipBook newBooking = new ShipBook(targetUser, ship, startDate, endDate);
            rentedDates.add(newBooking);
            targetUser.addReservation(newBooking);
            return true;
        }
        return false;
    }

    public void deleteReservation(ShipBook shipBook) {
        rentedDates.remove(shipBook);
        User targetUser = shipBook.getUser();
        targetUser.removeReservation(shipBook);
    }

    private boolean isTimeOccupied(Date startDate, Date endDate) {
        return false;
    }

    public List<Date> getOccupiedDates() {
        return null;
    }

    public List<Date> getFreeDates() {
        return null;
    }

    public List<List<Date>> getRentedDates() {
        return rentedDates.stream().
                           map(r -> Arrays.asList(r.getStartDay(), r.getEndDay())).
                           collect(Collectors.toList());
    }
}
