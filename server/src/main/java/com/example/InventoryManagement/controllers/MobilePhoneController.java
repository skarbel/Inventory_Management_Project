package com.example.InventoryManagement.controllers;

import com.example.InventoryManagement.models.Laptop;
import com.example.InventoryManagement.models.MobilePhone;
import com.example.InventoryManagement.repositories.MobilePhoneRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MobilePhoneController {

    MobilePhoneRepository mobilePhoneRepository;

    @GetMapping(value = "/phones")
    public ResponseEntity<List<MobilePhone>> getAllMobilePhones(){
        return new ResponseEntity<>(mobilePhoneRepository.findAll(), HttpStatus.OK);
    }

}
