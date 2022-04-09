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

    const manufacturerOptions = manufacturers.map((manufacturer, index) => {
        return <option key={index} value={index}>{manufacturer}</option>
    })


    return(
        <>
        <h3>{heading}</h3>
        <form onSubmit={handleSubmit}>
            <p>Manufacturer:
            <select name="manufacturer"  defaultValue={findTvManufacturerIndex() || "select-manufacturer"}>
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
        </form>
        
        </>
    )



}
export default TvForm;