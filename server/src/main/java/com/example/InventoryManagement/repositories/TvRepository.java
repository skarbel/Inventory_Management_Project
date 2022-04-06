package com.example.InventoryManagement.repositories;

import com.example.InventoryManagement.models.TV;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TvRepository extends JpaRepository<TV, Long> {

    List<TV> findByScreenResolution(String screenResolution);
}
