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
            <label for="model">Model:</label>
            <input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateTv.model}/>
            <select name="manufacturer"  defaultValue={findTvManufacturerIndex() || "select-manufacturer"}>
                <option disabled value="select-manufacturer">Select manufacturer</option>
                {/* {getManufactures} */}
             </select>
             <label for="Product-number">Product Number:</label>
            <input type="text" placeholder="Product Number" name="productNumber" onChange={handleChange} value={stateTv.productNumber}/>
            <label for="Category">Category:</label>
            <input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateTv.category}/>
            <label for="Stock">Stock:</label>
            <input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateTv.stock}/>
            <label for="Buying-price">Buying Price:</label>
            <input type="number" placeholder="Buying Price" name="buyingPrice" onChange={handleChange} value={stateTv.buyingPrice}/>
            <label for="Selling-price">Selling Price:</label>
            <input type="number" placeholder="Selling Price" name="sellingPrice" onChange={handleChange} value={stateTv.sellingPrice}/>
            <label for="Screen-Resolution">Screen Resolution:</label>
            <input type="text" placeholder="Screen Resolution" name="screenResolution" onChange={handleChange} value={stateTv.screenResolution}/>
            <label for="Smart-TV">Smart TV:</label>
            <select name="is-smart"  defaultValue={isSmart()||"select a value"}>
                <option disabled value="select-smart">Smart TV?</option>
                <option key='0' value='yes'>yes</option>
                <option key='1' value='no'>no</option>
             </select>
             <label for="Screen">Screen:</label>
            <input type="number" placeholder="Screen" name="screen" onChange={handleChange} value={stateTv.screen}/>
            <p><button type="submit">Save</button></p>
        </form>
        
        </>
    )



}
export default TvForm;