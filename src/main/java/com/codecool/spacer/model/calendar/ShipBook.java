package com.codecool.spacer.model.calendar;

import java.util.Date;

import lombok.Data;

import com.codecool.spacer.model.SpaceShip;
import com.codecool.spacer.model.User;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class ShipBook {
    @Id
    private long id;
    @ManyToOne
    private User user;
    @ManyToOne
    private SpaceShip ship;
    private Date startDay;
    private Date endDay;

    public ShipBook(User user, SpaceShip ship, Date startDay, Date endDay) {
        this.user = user;
        this.ship = ship;
        this.startDay = startDay;
        this.endDay = endDay;
    }

}
