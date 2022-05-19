package com.codecool.spacer.model;

import java.util.*;

public class ShipCalendar {
    private int shipId;
    private Calendar calendar;
    private List<ShipBook> rentedDates;

    public ShipCalendar(int shipId) {
        this.shipId = shipId;
        this.calendar = Calendar.getInstance();
        this.rentedDates = new ArrayList<>();
    }

    public boolean addNewBooking(int userId, Date startDate, Date endDate) {
        if (!isTimeOccupied(startDate, endDate)) {
            rentedDates.add(new ShipBook(userId, startDate, endDate));
            return true;
        }
        return false;
    }

    private boolean isTimeOccupied(Date startDate, Date endDate) {
        return false;
    }

    public List<Date> getOccupiedDates() {
        return null;
    }

    public void deleteShipBook(ShipBook shipBook) {
        rentedDates.remove(shipBook);
    }
}
