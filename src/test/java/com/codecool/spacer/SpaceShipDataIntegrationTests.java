package com.codecool.spacer;

import java.util.List;
import java.math.BigDecimal;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
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
        boolean hasWeapons = false;
        int mass = 10000;
        int length = 500;
        int maxCrew = 250;
        BigDecimal price = new BigDecimal(15000);
        List<String> images = List.of();
        User user = null;
        SpaceShip newShip = new SpaceShip("My cool ship",
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

        SpaceShip ship = shipRepository.save(newShip);

        assertEquals("My cool ship", ship.getName());
        assertNull(ship.getUser());
    }

    @Test
    public void findShipById(){
        boolean hasWeapons = false;
        int mass = 10000;
        int length = 500;
        int maxCrew = 250;
        BigDecimal price = new BigDecimal(15000);
        List<String> images = List.of();
        User user = null;
        SpaceShip newShip = new SpaceShip("My cool ship",
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

        SpaceShip ship = shipRepository.save(newShip);

        Optional<SpaceShip> foundShip = shipRepository.findById(0L);

        assertThat(foundShip).isNotNull();
    }
}
