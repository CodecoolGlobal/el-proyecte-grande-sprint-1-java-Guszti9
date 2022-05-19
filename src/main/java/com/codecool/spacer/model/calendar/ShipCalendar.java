package com.codecool.spacer.model.calendar;

import com.codecool.spacer.model.User;
import com.codecool.spacer.model.calendar.ShipBook;
import com.codecool.spacer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

public class ShipCalendar {
    private int shipId;
    private Calendar calendar;
    private List<ShipBook> rentedDates;

    @Autowired
    private UserService userService;

    public ShipCalendar(int shipId) {
        this.shipId = shipId;
        this.calendar = Calendar.getInstance();
        this.rentedDates = new ArrayList<>();
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    public boolean addReservation(int userId, Date startDate, Date endDate) {
        if (!isTimeOccupied(startDate, endDate)) {
            ShipBook newBooking = new ShipBook(userId, shipId, startDate, endDate);
            rentedDates.add(newBooking);
            User targetUser = userService.getUserById(userId);
            targetUser.addReservation(newBooking);
            return true;
        }
        return false;
    }

    public void deleteReservation(ShipBook shipBook) {
        rentedDates.remove(shipBook);
        int userId = shipBook.getUserId();
        User targetUser = userService.getUserById(userId);
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
}
