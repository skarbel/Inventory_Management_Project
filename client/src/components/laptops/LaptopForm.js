import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import '../laptops/Laptop.css'


const LaptopForm = ({laptop, onCreate, onUpdate, manufacturers}) => {

    const [stateLaptop, setStateLaptop] = useState({
        model: "",
        manufacturer: "",
        productNumber: "",
        category: "",
        screenSize: 0.0,
        ram: 0,
        storage: 0,
        stock: 0,
        buyingPrice: 0,
        sellingPrice: 0
    })

    useEffect(() => {
        if(laptop){
            let copiedLaptop = {...laptop}
            setStateLaptop(copiedLaptop);
        }
    }, [laptop])

    let heading = "";
    if(!laptop) {
        heading = "Add laptop to inventory"
    } else {
        heading = "Edit " + laptop.manufacturer + " " + laptop.model;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(stateLaptop.id){
            onUpdate(stateLaptop);
        } else {
            onCreate(stateLaptop);
        }
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedLaptop = {...stateLaptop};
        copiedLaptop[propertyName] = event.target.value;
        setStateLaptop(copiedLaptop)
    }



    

    const handleManufacturer = (event) => {
        const index = parseInt(event.target.value);
        const selectedManufacturer = manufacturers[index];
        let copiedLaptop = {...stateLaptop};
        copiedLaptop['manufacturer'] = selectedManufacturer;
        setStateLaptop(copiedLaptop);
        }

    const manufacturerOptions = manufacturers.map((manufacturer, index) => {
        return <option key={index} value={index}>{manufacturer}</option>
    })


    const findLaptopManufacturerIndex = () => {
        if(laptop){
            for(let manufacturer of manufacturers){
                if(manufacturer == laptop.manufacturer){
                    console.log(parseInt(manufacturers.indexOf(manufacturer)));
                    return manufacturers.indexOf(manufacturer)
                }
            }
            return null
    }
    }

    const backUrl = "/api/laptops"

    return (
        <>
        <div className="background">
        <form onSubmit={handleSubmit}>
        <div class="container ">
            <div class="row">
        		<div class="col-0">
				</div>
      			<div class="col-12">
                    <div className="dropbtn">
                    <Link to={backUrl}>
                    <button className="backbtn" type="button">Back</button>
                    </Link>
                  <button className="savebtn" type="submit">Save</button>
                  </div>
                </div>
			</div>
            <table class="table ">
            <thead class="table-dark">
            <tr>
            <th scope="col">  </th>
            <th scope="col"> {heading} </th>
            </tr>
            </thead>
        {/* <h3>{heading}</h3>
        <form onSubmit={handleSubmit}>
        <p>Manufacturer: 
        <select name="manufacturer" onChange={handleManufacturer} defaultValue={findLaptopManufacturerIndex() || "select-manufacturer"}>
        <option disabled value="select-manufacturer">Manufacturer</option>
        {manufacturerOptions}
        </select>
        </p>
    
        <p>Model:<input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateLaptop.model}/></p>
        <p>Product Number:<input type="text" placeholder="Product number" name="productNumber" onChange={handleChange} value={stateLaptop.productNumber}/></p>
        <p>Category:<input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateLaptop.category}/></p>
        <p>Screen Size:<input type="number" placeholder="Screen size" name="screenSize" onChange={handleChange} value={stateLaptop.screenSize}/></p>
        <p>RAM:<input type="number" placeholder="Ram" name="ram" onChange={handleChange} value={stateLaptop.ram}/></p>
        <p>Storage:<input type="number" placeholder="Storage" name="storage" onChange={handleChange} value={stateLaptop.storage}/></p>
        <p>In Stock:<input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateLaptop.stock}/></p>
        <p>Price:<input type="number" placeholder="Selling price" name="sellingPrice" onChange={handleChange} value={stateLaptop.sellingPrice}/></p>
        <p>Purchase Price:<input type="number" placeholder="Buying price" name="buyingPrice" onChange={handleChange} value={stateLaptop.buyingPrice}/></p>
        </form>
        </div> */}
            <tbody>
            <tr>
            <td>
                <div className="edit-details" >
                <p>Manufacturer</p>
                <p>Model</p>
                <p>Product Number</p>
                <p>Category</p>
                <p>Screen Size</p>
                <p>RAM</p>
                <p>Storage</p>
                <p>In Stock</p>
                <p>Price</p>
                <p>Purchase Price</p>
                </div>
            </td>
            <td>
                <p><select name="manufacturer" onChange={handleManufacturer} defaultValue={findLaptopManufacturerIndex() || "select-manufacturer"}>
                    <option disabled value="select-manufacturer">Manufacturer</option>
                    {manufacturerOptions}
                    </select>
                </p>
                <p><input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateLaptop.model}/></p>
                <p><input type="text" placeholder="Product number" name="productNumber" onChange={handleChange} value={stateLaptop.productNumber}/></p>
                <p><input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateLaptop.category}/></p>
                <p><input type="number" placeholder="Screen size" name="screenSize" onChange={handleChange} value={stateLaptop.screenSize}/></p>
                <p><input type="number" placeholder="Ram" name="ram" onChange={handleChange} value={stateLaptop.ram}/></p>
                <p><input type="number" placeholder="Storage" name="storage" onChange={handleChange} value={stateLaptop.storage}/></p>
                <p><input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateLaptop.stock}/></p>
                <p><input type="number" placeholder="Selling price" name="sellingPrice" onChange={handleChange} value={stateLaptop.sellingPrice}/></p>
                <p><input type="number" placeholder="Buying price" name="buyingPrice" onChange={handleChange} value={stateLaptop.buyingPrice}/></p>
            </td>
            {/* <td>{laptopScreen}</td>
            <td>{laptopPrice}</td>
            <td>{laptopDetails}</td> */}
            </tr>
            </tbody>
            </table>
        </div>
        </form>
        </div>
        </>
    )
}

export default LaptopForm;