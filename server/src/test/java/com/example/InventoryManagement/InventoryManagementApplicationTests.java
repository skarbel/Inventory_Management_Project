package com.example.InventoryManagement;

import com.example.InventoryManagement.models.Laptop;
import com.example.InventoryManagement.models.Manufacturer;
import com.example.InventoryManagement.models.MobilePhone;
import com.example.InventoryManagement.models.TV;
import com.example.InventoryManagement.repositories.LaptopRepository;
import com.example.InventoryManagement.repositories.MobilePhoneRepository;
import com.example.InventoryManagement.repositories.TvRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
class InventoryManagementApplicationTests {

	@Autowired
	LaptopRepository laptopRepository;

	@Autowired
	MobilePhoneRepository mobilePhoneRepository;

	@Autowired
	TvRepository tvRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canAddLaptop() {
		Laptop laptop = new Laptop("MacBook Air", Manufacturer.APPLE, "lap13a", "Laptop", 13.3, 8, 256, 25,450, 887);
		laptopRepository.save(laptop);
	}

	@Test
	public void canAddMobilePhone() {
		MobilePhone mobilePhone = new MobilePhone("13 PRO MAX", Manufacturer.APPLE, "mpai13m", "Mobile Phone" , 8,950,1049,  "Graphite" , 6.7);
		mobilePhoneRepository.save(mobilePhone);
	}

	@Test
	public void canAddTv() {
		TV tv = new TV("Q60T", Manufacturer.SAMSUNG, "tvsq60t", "TV", 12, 250, 400, "4K QLED", true, 43);
		tvRepository.save(tv);
	}

	@Test
	public void canFindLaptopsByScreenSize() {
		List<Laptop> foundLaptops = laptopRepository.findByScreenSize(15.6);
		assertEquals(3, foundLaptops.size());
	}

	@Test
	public void canFindTvsByResolution(){
		List<TV> foundTvs = tvRepository.findByScreenResolution("HD Ready");
		assertEquals(2, foundTvs.size());
	}

	@Test
	public void canFindPhonesByManufacturer() {
		List<MobilePhone> foundPhones = mobilePhoneRepository.findByManufacturer(Manufacturer.APPLE);
		assertEquals(4, foundPhones.size());
	}

}
