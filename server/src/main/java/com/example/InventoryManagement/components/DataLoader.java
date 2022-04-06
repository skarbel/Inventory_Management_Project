package com.example.InventoryManagement.components;

import com.example.InventoryManagement.models.Laptop;
import com.example.InventoryManagement.models.Manufacturer;
import com.example.InventoryManagement.models.MobilePhone;
import com.example.InventoryManagement.models.TV;
import com.example.InventoryManagement.repositories.LaptopRepository;
import com.example.InventoryManagement.repositories.MobilePhoneRepository;
import com.example.InventoryManagement.repositories.TvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    LaptopRepository laptopRepository;

    @Autowired
    TvRepository tvRepository;

    @Autowired
    MobilePhoneRepository mobilePhoneRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {

        TV tv1 = new TV("Q60T", Manufacturer.SAMSUNG, "tvsq60t", "TV", 12, 250, 400, "4K QLED", true, 43);
        tvRepository.save(tv1);

        TV tv2 = new TV("AU8000", Manufacturer.SAMSUNG, "tvsau0", "TV", 8, 200, 380, "Crystal 4K", true, 43);
        tvRepository.save(tv2);

        TV tv3 = new TV("TU7020", Manufacturer.SAMSUNG, "tvstu0", "TV", 3, 190, 375, "4K", true, 50);
        tvRepository.save(tv3);

        TV tv4 = new TV("Q80A", Manufacturer.SAMSUNG, "tvsq8a", "TV", 6, 550, 1000, "4K QLED", true, 55);
        tvRepository.save(tv4);

        TV tv5 = new TV("43UP7006LF", Manufacturer.LG, "tvlg43f", "TV", 7, 150, 290, "4K UHD", true, 43);
        tvRepository.save(tv5);

        TV tv6 = new TV("OLED48A16LA", Manufacturer.LG, "tvlg48a", "TV", 15, 360, 590, "4K UHD", true, 50);
        tvRepository.save(tv6);

        TV tv7 = new TV("32LM630BPLA", Manufacturer.LG, "tvlg32a", "TV", 2, 160, 255, "1080p", false, 32);
        tvRepository.save(tv7);

        TV tv8 = new TV("OLED55B16LA", Manufacturer.LG, "tvlg55a", "TV", 4, 600, 1000, "4k OLED", true, 55);
        tvRepository.save(tv8);

        TV tv9 = new TV("BRAVIA KE55A8", Manufacturer.SONY, "tvsnk55", "TV", 1, 800, 1400, "4K OLED", true, 55);
        tvRepository.save(tv9);

        TV tv10 = new TV("BRAVIA KD43X80J", Manufacturer.SONY, "tvsn43j", "TV", 7, 380, 550, "4K UHD", true, 43);
        tvRepository.save(tv10);

        TV tv11 = new TV("BRAVIA XR55A80J", Manufacturer.SONY, "tvsn55j", "TV", 13, 750, 1300, "4K OLED", true, 55);
        tvRepository.save(tv11);

        TV tv12 = new TV("BRAVIA XR-85Z9J", Manufacturer.SONY, "tvsn85j", "TV", 2, 4500, 6500, "8K UHD", true, 85);
        tvRepository.save(tv12);

        TV tv13 = new TV("MI TV 4A", Manufacturer.XIAOMI, "tvxm4a", "TV", 4, 80, 230, "1080p", false, 32);
        tvRepository.save(tv13);

        TV tv14 = new TV("65AE7000FTUK", Manufacturer.HISENSE, "tvh65k", "TV", 2, 280, 450, "4k UHD", true, 55);
        tvRepository.save(tv14);

        TV tv15 = new TV("50A7GQTUK", Manufacturer.HISENSE, "tvh50k", "TV", 6, 280, 430, "4K UHD", true, 50);
        tvRepository.save(tv15);

        TV tv16 = new TV("32A4GTUK", Manufacturer.HISENSE, "tvh32k", "TV", 9, 60, 190, "HD Ready", true, 32);
        tvRepository.save(tv16);

        TV tv17 = new TV("75A6GTUK", Manufacturer.HISENSE, "tvh75k", "TV", 11, 530, 725, "4K UHD", true, 75);
        tvRepository.save(tv17);

        TV tv18 = new TV("100L5FTUK", Manufacturer.HISENSE, "tvh100k", "TV", 3, 1900, 2500, "4K Laser", true, 100);
        tvRepository.save(tv18);

        TV tv19 = new TV("43UL2163DBC", Manufacturer.TOSHIBA, "tvth43c", "TV", 2, 180, 380, "4K", true, 43);
        tvRepository.save(tv19);

        TV tv20 = new TV("32WK3C63DB", Manufacturer.TOSHIBA, "tvth32b", "TV", 1, 110, 220, "HD Ready", false, 32);
        tvRepository.save(tv20);

        MobilePhone phone1 = new MobilePhone("13", Manufacturer.APPLE, "mpai13", "Mobile Phone" , 10,750,1250,  "Midnight" , 6.1);
        mobilePhoneRepository.save(phone1);

        MobilePhone AppleIPhone13Pro = new MobilePhone("13 PRO", Manufacturer.APPLE, "mpai13p", "Mobile Phone" , 9,850,949,  "Midnight" , 6.1);
        mobilePhoneRepository.save(AppleIPhone13Pro);

        MobilePhone AppleIPhone13ProMax = new MobilePhone("13 PRO MAX", Manufacturer.APPLE, "mpai13m", "Mobile Phone" , 8,950,1049,  "Graphite" , 6.7);
        mobilePhoneRepository.save(AppleIPhone13ProMax);

        MobilePhone SamsungGalaxy22 = new MobilePhone("Galaxy S22", Manufacturer.SAMSUNG, "mpsgs22", "Mobile Phone" , 7,680,769,  "Pantom Black" , 6.1);
        mobilePhoneRepository.save(SamsungGalaxy22);

        MobilePhone SamsungGalaxy22Plus = new MobilePhone("Galaxy S22 Plus", Manufacturer.SAMSUNG, "mpsgs22p", "Mobile Phone" , 6,850,949,  "Phantom White" , 6.1);
        mobilePhoneRepository.save(SamsungGalaxy22Plus);

        MobilePhone SamsungGalaxy22Ultra = new MobilePhone("Galaxy S22 Ultra", Manufacturer.SAMSUNG, "mpsgs22u", "Mobile Phone" , 5,950,1149,  "Burgundy" , 6.8);
        mobilePhoneRepository.save(SamsungGalaxy22Ultra);

        MobilePhone Xiaomi11TPro = new MobilePhone("11T Pro", Manufacturer.XIAOMI, "mpx11t", "Mobile Phone" , 4,400,499,  "Celestial Blue" , 6.67);
        mobilePhoneRepository.save(Xiaomi11TPro);

        MobilePhone HuaweiP50Pro = new MobilePhone("P50 Pro", Manufacturer.HUAWEI, "mphp50p", "Mobile Phone" , 3,900,1099,  "Cocoa Gold" , 6.6);
        mobilePhoneRepository.save(HuaweiP50Pro);

        MobilePhone OnePlus10Pro = new MobilePhone("10 Pro", Manufacturer.ONEPLUS, "mp0p10p", "Mobile Phone" , 2,800,899,  "Emerald Forest" , 6.7);
        mobilePhoneRepository.save(OnePlus10Pro);

        Laptop laptop1 = new Laptop("Galaxy Book2 Pro 360", Manufacturer.SAMSUNG, "928", "Laptop",  13.3, 16, 164, 4, 950, 1399);
        laptopRepository.save(laptop1);

        Laptop laptop2 = new Laptop("Pavilion 14", Manufacturer.HP,"lhp14p", "Laptop", 14.0, 4, 164, 12, 230,479);
        laptopRepository.save(laptop2);

        Laptop laptop3 = new Laptop("Stream 11", Manufacturer.HP, "lhp11s", "Laptop", 11.6, 4, 164, 5, 60, 199);
        laptopRepository.save(laptop3);

        Laptop laptop4 = new Laptop("MacBook Air", Manufacturer.APPLE, "lap13a", "Laptop", 13.3, 8, 256, 25,450, 887);
        laptopRepository.save(laptop4);

        Laptop laptop5 = new Laptop("Inspirion", Manufacturer.DELL,"lde15i", "Laptop", 15.6, 4, 256, 11,110, 289);
        laptopRepository.save(laptop5);

        Laptop laptop6 = new Laptop("MacBook Pro", Manufacturer.APPLE, "lap13p", "Laptop",13.0,8,256, 10, 850, 1299);
        laptopRepository.save(laptop6);

        Laptop laptop7 = new Laptop("MacBook Pro", Manufacturer.APPLE, "lap14p", "Laptop", 14.0, 16, 512, 20,1100,1899);
        laptopRepository.save(laptop7);

        Laptop laptop8 = new Laptop("MacBook Pro", Manufacturer.APPLE,"lap16p", "Laptop",16.0,32,1024, 7,1600, 2399);
        laptopRepository.save(laptop8);

        Laptop laptop9 = new Laptop("GRAM 17Z9OP", Manufacturer.LG, "llg17g", "Laptop", 17.0, 8, 512,4, 500, 949);
        laptopRepository.save(laptop9);

        Laptop laptop10 = new Laptop("Chromebook", Manufacturer.ASUS, "las15c", "Laptop", 15.6, 4, 512, 13, 75, 179);
        laptopRepository.save(laptop10);

        Laptop laptop11 = new Laptop("Chromebook", Manufacturer.ASUS, "las15c", "Laptop", 15.6, 4, 512, 13, 75, 179);
        laptopRepository.save(laptop11);






    }
}
