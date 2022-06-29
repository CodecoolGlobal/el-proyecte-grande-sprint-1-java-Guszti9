package com.codecool.spacer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codecool.spacer.model.SpaceShip;

@Repository
public interface ShipRepository extends JpaRepository<SpaceShip, Long> {

}
