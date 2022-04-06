package com.example.InventoryManagement.models;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class TV extends Item{

    @Column(name = "screen_resolution")
    private String screenResolution;

    @Column(name = "smart")
    private boolean smart;

    @Column(name = "screen")
    private int screen;


    public TV(String model, Manufacturer manufacturer, String productNumber, String category, int stock, int buyingPrice, int sellingPrice, String screenResolution, boolean smart, int screen) {
        super(model, manufacturer, productNumber, category, stock, buyingPrice, sellingPrice);
        this.screenResolution = screenResolution;
        this.smart = smart;
        this.screen = screen;
    }

    public TV() {
    }

    public String getScreenResolution() {
        return screenResolution;
    }

    public void setScreenResolution(String screenResolution) {
        this.screenResolution = screenResolution;
    }

    public boolean isSmart() {
        return smart;
    }

    public void setSmart(boolean smart) {
        this.smart = smart;
    }

    public int getScreen() {
        return screen;
    }

    public void setScreen(int screen) {
        this.screen = screen;
    }

    public int purchasePrice() {
        return getBuyingPrice();
    }

    @Override
    public int calculateMarkup() {
        return getSellingPrice() - getBuyingPrice();
    }
}
