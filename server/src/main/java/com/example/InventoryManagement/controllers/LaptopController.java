package com.example.InventoryManagement.controllers;


import com.example.InventoryManagement.models.Laptop;
import com.example.InventoryManagement.repositories.LaptopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LaptopController {

    @Autowired
    LaptopRepository laptopRepository;

    @GetMapping(value = "/laptops")
    public ResponseEntity<List<Laptop>> getAllLaptops(){
        return new ResponseEntity<>(laptopRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/laptops/{id}")
    public ResponseEntity getLaptop(@PathVariable Long id){
        return new ResponseEntity(laptopRepository.findById(id), HttpStatus.OK);
    }


}


