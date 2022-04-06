package com.example.InventoryManagement.models;

import com.example.InventoryManagement.interfaces.IBuy;
import com.example.InventoryManagement.interfaces.ISell;

import javax.persistence.*;

@Entity
@Inheritance(strategy= InheritanceType.TABLE_PER_CLASS)
public abstract class Item implements IBuy, ISell {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "id")
    private Long id;

    @Column(name = "model")
    private String model;

    @Column(name = "manufacturer")
    private Manufacturer manufacturer;

    @Column(name = "product_number")
    private String productNumber;

    @Column(name = "category")
    private String category;

    @Column(name = "stock")
    private int stock;

    @Column(name = "buying_price")
    private int buyingPrice;

    @Column(name = "selling_price")
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

    public Item() {
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
