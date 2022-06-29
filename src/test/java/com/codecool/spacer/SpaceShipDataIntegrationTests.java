package com.codecool.spacer;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class SpaceShipDataIntegrationTests {

    @Test
    public void sanity() {
        assertTrue(true);
    }

}
