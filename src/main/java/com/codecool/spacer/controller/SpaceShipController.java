package com.codecool.spacer.controller;

import com.codecool.spacer.model.Filter;
import com.codecool.spacer.model.SpaceShip;
import com.codecool.spacer.service.SpaceShipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SpaceShipController {
    private SpaceShipService spaceShipService;

    @Autowired
    public SpaceShipController(SpaceShipService spaceShipService) {
        this.spaceShipService = spaceShipService;
    }

    @CrossOrigin
    @GetMapping("api/spaceship/{id}")
    public SpaceShip getSpaceShipById(@PathVariable int id){
        return spaceShipService.getSpaceShipById(id);
    }

    @GetMapping("api/spaceship/all")
    public List<SpaceShip> getSpaceShips(){
        return spaceShipService.getSpaceShips();
    }

    @PostMapping("api/spaceship/filter")
    public List<SpaceShip> filterSpaceShips(@RequestBody Filter filter){
        return spaceShipService.filterSpaceShips(filter);
    }

    @PostMapping("api/spaceship/add")
    public void addSpaceShip(@RequestBody SpaceShip spaceShip){
        spaceShipService.addSpaceShip(spaceShip);
    }

    @PostMapping("api/spaceship/add-ships")
    public void addSpaceShips(@RequestBody SpaceShip[] spaceShips){
        spaceShipService.addSpaceShips(spaceShips);
    }

    @PutMapping("api/spaceship/{id}/edit")
    public void editSpaceShip(@PathVariable int id, @RequestBody SpaceShip spaceShip){
        spaceShipService.editSpaceShip(id, spaceShip);
    }

    @DeleteMapping("api/spaceship/{id}/delete")
    public void deleteSpaceShip(@PathVariable int id){
        spaceShipService.deleteSpaceShip(id);
    }

    @PostMapping("api/spaceship/{id}/rent")
    public void rentSpaceShip(@PathVariable int id){
        spaceShipService.rentSpaceShip(id);
    }
}
