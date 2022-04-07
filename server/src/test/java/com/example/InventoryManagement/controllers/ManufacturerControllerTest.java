package com.example.InventoryManagement.controllers;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ManufacturerControllerTest {

    @Test
    void getManufacturers() {
        ManufacturerController controller = new ManufacturerController();
        List<String> actual = controller.getManufacturers();
        assertFalse(actual.isEmpty());
        assertEquals("[SAMSUNG, LG, SONY, HUAWEI, APPLE, DELL, HP, XIAOMI, HISENSE, TOSHIBA, ONEPLUS, ASUS]", actual.toString());
    }
}