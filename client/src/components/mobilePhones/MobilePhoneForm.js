import React, {useEffect, useState} from "react";

const MobilePhoneForm = ({mobilePhone, onCreate, onUpdate, manufacturers}) => {

    const [stateMobilePhone, setStateMobilePhone] = useState({
        model: "",
        manufacturer: "",
        productNumber: "",
        category: "", 
        stock: 0,
        buyingPrice: 0,
        sellingPrice: 0,
        colour: "",
        size: 0.0
    })

    useEffect(() => {
        if(mobilePhone){
            let copiedMobilePhone = {...mobilePhone}
            setStateMobilePhone(copiedMobilePhone);
        }
    }, [mobilePhone])

    let heading = ""
    if(!mobilePhone){
        heading = "Add Mobile Phone to inventory"
    } else {
        heading = "Edit " + mobilePhone.model;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(stateMobilePhone.id){
            onUpdate(stateMobilePhone)
        }else{
            onCreate(stateMobilePhone);
        }
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedMobilePhone = {...stateMobilePhone};
        copiedMobilePhone[propertyName] = event.target.value;
        setStateMobilePhone(copiedMobilePhone)
    }

    const handleManufacturer = (event) => {
        const index = parseInt(event.target.value);
        const selectedManufacturer = manufacturers[index];
        let copiedMobilePhone = {...stateMobilePhone};
        copiedMobilePhone['manufacturer'] = selectedManufacturer;
        setStateMobilePhone(copiedMobilePhone);
        }


   const manufacturerOptions = manufacturers.map((manufacturer, index) => {
        return <option key={index} value={index}>{manufacturer}</option>
    })


    const findMobileLaptopManufacturerIndex = () => {
        if(mobilePhone){
            for(let manufacturer of manufacturers){
                if(manufacturer == mobilePhone.manufacturer){
                    console.log(parseInt(manufacturers.indexOf(manufacturer)));
                    return manufacturers.indexOf(manufacturer)
                }
            }
            return null
    }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div class="container ">
            <div class="row">
        		<div class="col-0">
				</div>
      			<div class="col-12">
                  <button className="dropbtn" type="submit">Save</button>
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
            <select name="manufacturer" onChange={handleManufacturer} defaultValue={findMobileLaptopManufacturerIndex() || "select-manufacturer"}>
            <option disabled value="select-manufacturer">Manufacturer</option>
            {manufacturerOptions}
            </select>
            </p>
            <p>Model:<input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateMobilePhone.model}/></p>
            <p>Product Number:<input type="text" placeholder="Product Number" name="productNumber" onChange={handleChange} value={stateMobilePhone.productNumber}/></p>
            <p>Category:<input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateMobilePhone.category}/></p>
            <p>Colour:<input type="text" placeholder="Colour" name="colour" onChange={handleChange} value={stateMobilePhone.colour}/></p>
            <p>Screen Size:<input type="number" placeholder="Size" name="size" onChange={handleChange} value={stateMobilePhone.size}/></p>
            <p>In Stock:<input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateMobilePhone.stock}/></p>
            <p>Price:<input type="number" placeholder="Selling Price" name="sellingPrice" onChange={handleChange} value={stateMobilePhone.sellingPrice}/></p>
            <p>Purchase Price:<input type="number" placeholder="Buying Price" name="buyingPrice" onChange={handleChange} value={stateMobilePhone.buyingPrice}/></p>
            <p><button type="submit">Save</button></p>
        </form> */}
        <tbody>
            <tr>
            <td>
                <div className="edit-details" >

                {/* <h1 style="color:blue;">A Blue Heading</h1> */}


                <p>Manufacturer</p>
                <p>Model</p>
                <p>Product Number</p>
                <p>Category</p>
                <p>Colour</p>
                <p>Screen Size</p>
                <p>In Stock</p>
                <p>Price</p>
                <p>Purchase Price</p>
                </div>
            </td>
            <td>
                <p><select name="manufacturer" onChange={handleManufacturer} defaultValue={findMobileLaptopManufacturerIndex() || "select-manufacturer"}>
                    <option disabled value="select-manufacturer">Manufacturer</option>
                    {manufacturerOptions}
                    </select>
                </p>
                <p><input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateMobilePhone.model}/></p>
                <p><input type="text" placeholder="Product Number" name="productNumber" onChange={handleChange} value={stateMobilePhone.productNumber}/></p>
                <p><input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateMobilePhone.category}/></p>
                <p><input type="text" placeholder="Colour" name="colour" onChange={handleChange} value={stateMobilePhone.colour}/></p>
                <p><input type="number" placeholder="Size" name="size" onChange={handleChange} value={stateMobilePhone.size}/></p>
                <p><input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateMobilePhone.stock}/></p>
                <p><input type="number" placeholder="Selling price" name="sellingPrice" onChange={handleChange} value={stateMobilePhone.sellingPrice}/></p>
                <p><input type="number" placeholder="Buying price" name="buyingPrice" onChange={handleChange} value={stateMobilePhone.buyingPrice}/></p>
            </td>
            {/* <td>{laptopScreen}</td>
            <td>{laptopPrice}</td>
            <td>{laptopDetails}</td> */}
            </tr>
            </tbody>
            </table>
        </div>
        </form>
        </>
    )
}

export default MobilePhoneForm;
