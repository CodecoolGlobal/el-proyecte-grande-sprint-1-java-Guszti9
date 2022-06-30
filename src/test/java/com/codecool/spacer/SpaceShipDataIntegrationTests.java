package com.codecool.spacer;

import java.util.List;
import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

import com.codecool.spacer.model.SpaceShip;
import com.codecool.spacer.model.User;
import com.codecool.spacer.model.shipdata.Classification;
import com.codecool.spacer.model.shipdata.FuelType;
import com.codecool.spacer.model.shipdata.Manufacturer;
import com.codecool.spacer.repository.ShipRepository;

@DataJpaTest
public class SpaceShipDataIntegrationTests {

    private ShipRepository shipRepository;

    @Autowired
    public SpaceShipDataIntegrationTests(ShipRepository shipRepository) {
        this.shipRepository = shipRepository;
    }

    @Test
    public void sanity() {
        assertTrue(true);
    }

    @Test
    public void addASingleShip() {
        var hasWeapons = false;
        var mass = 10000;
        var length = 500;
        var maxCrew = 250;
        var price = new BigDecimal(15000);
        List<String> images = List.of();
        User user = null;
        var newShip = new SpaceShip("My cool ship",
                                    "Rebels",
                                    2088,
                                    "This is the coolest ship ever",
                                    hasWeapons,
                                    mass,
                                    length,
                                    maxCrew,
                                    price,
                                    Classification.TRANSPORT,
                                    FuelType.DIESEL,
                                    Manufacturer.TUMBRIL,
                                    images,
                                    user);

        var ship = shipRepository.save(newShip);

        assertEquals("My cool ship", ship.getName());
        assertEquals(null, ship.getUser());
    }
}
