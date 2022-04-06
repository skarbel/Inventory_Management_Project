package com.example.InventoryManagement.controllers;

import com.example.InventoryManagement.models.Laptop;
import com.example.InventoryManagement.models.MobilePhone;
import com.example.InventoryManagement.repositories.MobilePhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MobilePhoneController {

    @Autowired
    MobilePhoneRepository mobilePhoneRepository;

    @GetMapping(value = "/mobilephones")
    public ResponseEntity<List<MobilePhone>> getAllMobilePhones(){
        return new ResponseEntity<>(mobilePhoneRepository.findAll(),HttpStatus.OK);
    }

    @GetMapping(value = "/mobilephones/{id}")
    public ResponseEntity getMobilePhone(@PathVariable Long id){

        return new ResponseEntity(mobilePhoneRepository.findById(id), HttpStatus.OK);
    }
}
