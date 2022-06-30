package com.codecool.spacer;
import java.util.ArrayList;
import java.util.List;
import java.math.BigDecimal;

import com.codecool.spacer.model.SpaceShip;
import com.codecool.spacer.repository.ShipRepository;
import com.codecool.spacer.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import com.codecool.spacer.model.User;

@DataJpaTest
public class UserDataIntegrationTests {

    private UserRepository userRepository;

    @Autowired
    public UserDataIntegrationTests(UserRepository userRepository) {
        this.userRepository= userRepository;
    }

    @Test
    public void addASingleUser(){
        List<SpaceShip> spaceShipList = new ArrayList<>();
        User newUser = new User("Gábor",
                "Julcsika",
                "http://julcsika.onlyfans.com",
                "Julcsika is a very nice male engineer",
                "jugabor",
                "06306394458",
                "gabor@julcsika.com",
                "gabor.julcsika/linkedin.com",
                "gabor.julcsika/facebook.com");
        User user = userRepository.save(newUser);
        assertEquals("Julcsika", user.getLastName());
        assertEquals(spaceShipList, user.getShips());
    }

//    @Test
//    public void addShipToUser(){
//
//    }
}
