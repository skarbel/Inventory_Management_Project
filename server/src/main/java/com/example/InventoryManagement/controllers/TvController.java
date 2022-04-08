package com.example.InventoryManagement.controllers;

import com.example.InventoryManagement.models.Laptop;
import com.example.InventoryManagement.models.TV;
import com.example.InventoryManagement.repositories.TvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TvController {

    @Autowired
    TvRepository tvRepository;

    @GetMapping(value = "/tvs")
    public ResponseEntity<List<TV>> getAllTvs(){
        return new ResponseEntity<>(tvRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/tvs/{id}")
    public ResponseEntity getTv(@PathVariable Long id){
        return new ResponseEntity(tvRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/tvs")
    public ResponseEntity<TV> postTv(@RequestBody TV tv){
        tvRepository.save(tv);
        return new ResponseEntity<>(tv, HttpStatus.CREATED);
    }

    @PatchMapping(value="/tvs/{id}")
    public ResponseEntity<TV> updateTv(@RequestBody TV tv){
        tvRepository.save(tv);
        return new ResponseEntity<>( tv, HttpStatus.OK);
    }

}
