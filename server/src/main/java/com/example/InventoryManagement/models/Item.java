package com.example.InventoryManagement.models;

import com.example.InventoryManagement.interfaces.IBuy;
import com.example.InventoryManagement.interfaces.ISell;

public abstract class Item implements IBuy, ISell {

    private Long id;
    private String model;
    private Manufacturer manufacturer;
    private String productNumber;
    private String category;
    private int stock;
    private int buyingPrice;
    private int sellingPrice;


    public Item(String model, Manufacturer manufacturer, String productNumber, String category, int stock, int buyingPrice, int sellingPrice) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.productNumber = productNumber;
        this.category = category;
        this.stock = stock;
        this.buyingPrice = buyingPrice;
        this.sellingPrice = sellingPrice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getProductNumber() {
        return productNumber;
    }

    public void setProductNumber(String productNumber) {
        this.productNumber = productNumber;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public int getBuyingPrice() {
        return buyingPrice;
    }

    public void setBuyingPrice(int buyingPrice) {
        this.buyingPrice = buyingPrice;
    }

    public int getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(int sellingPrice) {
        this.sellingPrice = sellingPrice;
    }
}
