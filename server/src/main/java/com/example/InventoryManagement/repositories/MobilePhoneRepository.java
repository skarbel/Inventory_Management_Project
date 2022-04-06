package com.example.InventoryManagement.repositories;

import com.example.InventoryManagement.models.Manufacturer;
import com.example.InventoryManagement.models.MobilePhone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MobilePhoneRepository extends JpaRepository<MobilePhone, Long> {

    List<MobilePhone> findByManufacturer(Manufacturer manufacturer);
}
