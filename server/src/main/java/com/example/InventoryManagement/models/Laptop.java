package com.example.InventoryManagement.models;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Laptop extends Item{

    @Column(name = "screen_size")
    private double screenSize;

    @Column(name = "RAM")
    private int RAM;

    @Column(name = "storage")
    private int storage;


    public Laptop(String model, Manufacturer manufacturer, String productNumber, String category, double screenSize, int RAM, int storage, int stock, int buyingPrice, int sellingPrice) {
        super(model, manufacturer, productNumber, category, stock, buyingPrice, sellingPrice);
        this.screenSize = screenSize;
        this.RAM = RAM;
        this.storage = storage;
    }

    public Laptop() {
    }

    public double getScreenSize() {
        return screenSize;
    }

    public void setScreenSize(double screenSize) {
        this.screenSize = screenSize;
    }

    public int getRAM() {
        return RAM;
    }

    public void setRAM(int RAM) {
        this.RAM = RAM;
    }

    public int getStorage() {
        return storage;
    }

    public void setStorage(int storage) {
        this.storage = storage;
    }

    public int purchasePrice() {
        return getBuyingPrice();
    }

    public int calculateMarkup() {
        return getSellingPrice() - getBuyingPrice();
    }
}
