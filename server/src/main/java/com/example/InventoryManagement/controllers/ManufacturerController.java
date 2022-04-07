package com.example.InventoryManagement.controllers;

import com.example.InventoryManagement.models.Manufacturer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ManufacturerController {

    @GetMapping(value = "/inventory/manufacturer")
    public List<String> getManufacturers(){
        List<String> manufacturers = new ArrayList<>();
        for(Manufacturer manufacturer : Manufacturer.values()){
            manufacturers.add(manufacturer.name());
        }
        return manufacturers;
    }
}
