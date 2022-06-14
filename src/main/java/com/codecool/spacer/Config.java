package com.codecool.spacer;

import com.codecool.spacer.dao.SpaceShipDao;
import com.codecool.spacer.dao.UserDao;
import com.codecool.spacer.dao.mem.SpaceShipDaoMem;
import com.codecool.spacer.dao.mem.UserDaoMem;
import com.codecool.spacer.service.SpaceShipService;
import com.codecool.spacer.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class Config {

    @Bean
    @Scope("singleton")
    public SpaceShipService getSpaceShipService(SpaceShipDao spaceShipDao) {
        return new SpaceShipService(spaceShipDao);
    }

    @Bean
    @Scope("singleton")
    public SpaceShipDao getSpaceShipDao() {
        return new SpaceShipDaoMem();
    }

    @Bean
    @Scope("singleton")
    public UserService getUserService(UserDao userDao) {
        return new UserService(userDao);
    }

    @Bean
    @Scope("singleton")
    public UserDao getUserDao() {
        return new UserDaoMem();
    }
}
