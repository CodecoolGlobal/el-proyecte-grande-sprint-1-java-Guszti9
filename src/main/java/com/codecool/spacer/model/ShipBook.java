package com.codecool.spacer.model;

import java.util.Date;

public class ShipBook {
    private int userId;
    private Date startDay;
    private Date endDay;

    public ShipBook(int userId, Date startDay, Date endDay) {
        this.userId = userId;
        this.startDay = startDay;
        this.endDay = endDay;
    }
}
