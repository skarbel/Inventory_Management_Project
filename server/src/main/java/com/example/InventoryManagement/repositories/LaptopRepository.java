package com.example.InventoryManagement.repositories;

import com.example.InventoryManagement.models.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LaptopRepository extends JpaRepository<Laptop, Long> {

    List<Laptop> findByScreenSize(double screenSize);

}
