import React, {useEffect} from "react";
import { useState } from "react";


const TvForm = ({tv, onCreate, onUpdate, manufacturers}) => {

    const [stateTv, setStateTv] = useState({
        model: "",
        manufacturer: "",
        productNumber: "",
        category: "",
        stock: 0,
        buyingPrice: 0,
        sellingPrice: 0,
        screenResolution: 0,
        smart: true,
        screen: 0
    })

    useEffect(() => {
        if(tv){
            let copiedTv = {...tv}
            setStateTv(copiedTv)
        }
    }, [tv])

    let heading = "";
    if(!tv){
        heading = "Create TV"
    } else {
        heading = "Edit " + tv.model;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(stateTv.id){
            onUpdate(stateTv);
        } else{
            onCreate(stateTv);
        }

    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedTv = {...stateTv};
        copiedTv[propertyName] = event.target.value;
        setStateTv(copiedTv)
    }

    //to pre-populate the edit form of the dropdown
    const isSmart = () => {
        if(tv){
            return tv.smart;
        }else{
            return null;
        }
    }

    const findTvManufacturerIndex = () => {
        if(tv){
            for(let manufacturer of manufacturers){
                if(manufacturer == tv.manufacturer){
                    console.log(parseInt(manufacturers.indexOf(manufacturer)));
                    return manufacturers.indexOf(manufacturer)
                }
            }
            return null
    }
    }

    const handleManufacturer = (event) => {
        const index = parseInt(event.target.value);
        const selectedManufacturer = manufacturers[index];
        let copiedTv = {...stateTv};
        copiedTv['manufacturer'] = selectedManufacturer;
        setStateTv(copiedTv);
        }

    const manufacturerOptions = manufacturers.map((manufacturer, index) => {
        return <option key={index} value={index}>{manufacturer}</option>
    })


    return(
        <>
        {/* <h3>{heading}</h3>
        <form onSubmit={handleSubmit}>
            <p>Manufacturer:
            <select name="manufacturer" onChange={handleManufacturer} defaultValue={findTvManufacturerIndex() || "select-manufacturer"}>
                <option disabled value="select-manufacturer">Select manufacturer</option>
                {manufacturerOptions}
            </select>
            </p>
            <p>Model:<input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateTv.model}/></p>
            <p>Product Number:<input type="text" placeholder="Product Number" name="productNumber" onChange={handleChange} value={stateTv.productNumber}/></p>
            <p>Category:<input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateTv.category}/></p>
            <p>Screen Size:<input type="number" placeholder="Screen" name="screen" onChange={handleChange} value={stateTv.screen}/></p>
            <p>Screen Resolution:<input type="text" placeholder="Screen Resolution" name="screenResolution" onChange={handleChange} value={stateTv.screenResolution}/></p>
            <p>Smart Features:
                <select name="is-smart"  defaultValue={isSmart()||"select a value"}>
                <option disabled value="select-smart">Smart TV?</option>
                <option key='0' value='yes'>yes</option>
                <option key='1' value='no'>no</option>
                </select>
             </p>
            <p>In Stock:<input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateTv.stock}/></p>
            <p>Price:<input type="number" placeholder="Selling Price" name="sellingPrice" onChange={handleChange} value={stateTv.sellingPrice}/></p>
            <p>Purchase Price:<input type="number" placeholder="Buying Price" name="buyingPrice" onChange={handleChange} value={stateTv.buyingPrice}/></p>
            
            <p><button type="submit">Save</button></p>
        </form> */}

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
            <tbody>
            <tr>
            <td>
                <div className="edit-details" >
                <p>Manufacturer</p>
                <p>Model</p>
                <p>Product Number</p>
                <p>Category</p>
                <p>Screen Size</p>
                <p>Screen Resolution</p>
                <p>Smart</p>
                <p>In Stock</p>
                <p>Price</p>
                <p>Purchase Price</p>
                </div>
            </td>
            <td>
                <p><select name="manufacturer" onChange={handleManufacturer} defaultValue={findTvManufacturerIndex() || "select-manufacturer"}>
                <option disabled value="select-manufacturer">Select manufacturer</option>
                {manufacturerOptions}
                    </select>
                </p>
                <p><input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateTv.model}/></p>
                <p><input type="text" placeholder="Product Number" name="productNumber" onChange={handleChange} value={stateTv.productNumber}/></p>
                <p><input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateTv.category}/></p>
                <p><input type="number" placeholder="Screen" name="screen" onChange={handleChange} value={stateTv.screen}/></p>
                <p><input type="text" placeholder="Screen Resolution" name="screenResolution" onChange={handleChange} value={stateTv.screenResolution}/></p>
                <p>
                <select name="is-smart"  defaultValue={isSmart()||"select a value"}>
                <option disabled value="select-smart">Smart TV?</option>
                <option key='0' value='yes'>yes</option>
                <option key='1' value='no'>no</option>
                </select>
                </p>
                <p><input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateTv.stock}/></p>
                <p><input type="number" placeholder="Selling price" name="sellingPrice" onChange={handleChange} value={stateTv.sellingPrice}/></p>
                <p><input type="number" placeholder="Buying price" name="buyingPrice" onChange={handleChange} value={stateTv.buyingPrice}/></p>
            </td>
            </tr>
            </tbody>
            </table>
        </div>
        </form>






        





        
        </>
    )



}
export default TvForm;