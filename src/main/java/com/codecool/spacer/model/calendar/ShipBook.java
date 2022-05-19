
package com.codecool.spacer.model.calendar;

import java.util.Date;

public class ShipBook {
    private int userId;
    private int shipId;
    private Date startDay;
    private Date endDay;

    public ShipBook(int userId, int shipId, Date startDay, Date endDay) {
        this.userId = userId;
        this.shipId = shipId;
        this.startDay = startDay;
        this.endDay = endDay;
    }

    public int getShipId() {
        return shipId;
    }

    public int getUserId() {
        return userId;
    }
}
