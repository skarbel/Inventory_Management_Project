import React, {useEffect, useState} from "react";

const LaptopForm = ({laptop, onCreate, onUpdate}) => {

    const [stateLaptop, setStateLaptop] = useState({
        model: "",
        manufacturer: null,
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
        heading = "Edit" + laptop.model;
    }

    const handleChange = (event) => {
        let propertyName = event.target.model;
        let copiedLaptop = {...stateLaptop};
        copiedLaptop[propertyName] = event.target.value;
        setStateLaptop(copiedLaptop)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(stateLaptop.id){
            onUpdate(stateLaptop);
        } else {
            onCreate(stateLaptop);
        }
    }
    

    // const handleManufacturer = (event) => {
    //     const index = parseInt(event.target.value);
    //     const selectedManufacturer = manufacturers[index];
    //     let copiedLaptop = {...stateLaptop};
    //     copiedLaptop['manufacturer'] = selectedManufacturer;
    //     setStateLaptop(copiedLaptop);
    //     }

    // const manufacturerOptions = manufacturers.map((manufacturer, index) => {
    //     return <option key={index} value={index}>{manufacturer}</option>
    // })

    return (
        <>
        <h3>{heading}</h3>
        <form onSubmit={handleSubmit}>
        <p>Model  
        <input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateLaptop.model}/>
        </p>
        <p>Manufacturer
        <select name="manufacturer" onChange={handleChange} defaultValue={"select-manufacturer"}>
        <option selected="">Manufacturer</option>
        <option>SAMSUNG</option>
        <option>LG</option>
        <option>SONY</option>
        <option>HUAWEI</option>
        <option>APPLE</option>
        <option>DELL</option>
        <option>HP</option>
        <option>XAOMI</option>
        <option>HISENSE</option>
        <option>TOSHIBA</option>
        <option>ONEPLUS</option>
        <option>ASUS</option>
        </select>
        </p>
        <p>Placeholder<input type="text" placeholder="Product number" name="productNumber" onChange={handleChange} value={stateLaptop.productNumber}/></p>
        <p>Category<input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateLaptop.category}/></p>
        <p>Screen Size<input type="number" placeholder="Screen size" name="screenSize" onChange={handleChange} value={stateLaptop.screenSize}/></p>
        <p>RAM<input type="number" placeholder="Ram" name="ram" onChange={handleChange} value={stateLaptop.ram}/></p>
        <p>Storage<input type="number" placeholder="Storage" name="storage" onChange={handleChange} value={stateLaptop.storage}/></p>
        <p>Stock<input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateLaptop.stock}/></p>
        <p>Purhase amount from manufacturer<input type="number" placeholder="Buying price" name="buyingPrice" onChange={handleChange} value={stateLaptop.buyingPrice}/></p>
        <p>Selling price<input type="number" placeholder="Selling price" name="sellingPrice" onChange={handleChange} value={stateLaptop.sellingPrice}/></p>
        <p><button type="submit">Save</button></p>
        </form>
        </>
    )
}

export default LaptopForm;