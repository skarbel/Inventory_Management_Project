// import React, {useEffect, useState} from "react";

// const MobilePhoneForm = ({mobilePhone, onCreate, onUpdate, manufacturers}) => {

//     const [stateMobilePhone, setStateMobilePhone] = useState({
//         model: "",
//         manufacturer: "",
//         productNumber: "",
//         category: "", 
//         stock: 0,
//         buyingPrice: 0,
//         sellingPrice: 0,
//         colour: "",
//         size: 0.0
//     })

//     useEffect(() => {
//         if(mobilePhone){
//             let copiedMobilePhone = {...mobilePhone}
//             setStateMobilePhone(copiedMobilePhone);
//         }
//     }, [mobilePhone])

//     let heading = "";
//     if(!mobilePhone){
//         heading = "Create Mobile Phone"
//     } else {
//         heading = "Edit " + mobilePhone.model;
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if(stateMobilePhone.id){
//             onUpdate(stateMobilePhone)
//         }else{
//             onCreate(stateMobilePhone);
//         }
//     }

//     const handleChange = (event) => {
//         let propertyName = event.target.name;
//         let copiedMobilePhone = {...stateMobilePhone};
//         copiedMobilePhone[propertyName] = event.target.value;
//         setStateMobilePhone(copiedMobilePhone)
//     }

//     // const manufacturer = () => {
//     //     if(mobilePhone){
//     //         return mobilePhone.manufacturer;
//     //     } else {
//     //         return null;
//     //     }
//     // }

//     // const getManufactures = manufacturers.map((manufacturer, index) =>{
//     //     return <option key={index} value={index}>{manufacturer}</option>
//     // })

//     const manufacturerOptions = manufacturers.map((manufacturer, index) => {
//         return <option key={index} value={index}>{manufacturer}</option>
//     })


//     const findMobileLaptopManufacturerIndex = () => {
//         if(mobilePhone){
//             for(let manufacturer of manufacturers){
//                 if(manufacturer == mobilePhone.manufacturer){
//                     console.log(parseInt(manufacturers.indexOf(manufacturer)));
//                     return manufacturers.indexOf(manufacturer)
//                 }
//             }
//             return null
//     }
//     }

//     return (
//         <>
//         <h3>{heading}</h3>
//         <form onSubmit={handleSubmit}>
//             <label for="model">Model:</label>
//             <input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateMobilePhone}/>
//             <select name="manufacturer" defaultValue={findMobileLaptopManufacturerIndex() || "select-manufacturer"}>
//             <option disabled value="select-manufacturer">Manufacturer</option>
//             {manufacturerOptions}
//             </select>
//             <label for="Product-number">Product Number:</label>
//             <input type="text" placeholder="Product Number" name="productNumber" onChange={handleChange} value={stateMobilePhone.productNumber}/>
//             <label for="Category">Category:</label>
//             <input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateMobilePhone.category}/>
//             <label for="Stock">Stock:</label>
//             <input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateMobilePhone.stock}/>
//             <label for="Buying-price">Buying Price:</label>
//             <input type="number" placeholder="Buying Price" name="buyingPrice" onChange={handleChange} value={stateMobilePhone.buyingPrice}/>
//             <label for="Selling-price">Selling Price:</label>
//             <input type="number" placeholder="Selling Price" name="sellingPrice" onChange={handleChange} value={stateMobilePhone.sellingPrice}/>
//             <label for="Screen-Resolution">Screen Resolution:</label>
//             <input type="text" placeholder="Screen Resolution" name="screenResolution" onChange={handleChange} value={stateMobilePhone.screenResolution}/>
//             <label for="Colour">Colour:</label>
//             <input type="text" placeholder="Colour" name="colour" onChange={handleChange} value={stateMobilePhone.colour}/>
//             <label for="Size">Screen Size:</label>
//             <input type="number" placeholder="Size" name="size" onChange={handleChange} value={stateMobilePhone.size}/>
//             <p><button type="submit">Save</button></p>
//         </form>
//         </>
//     )
// }

// export default MobilePhoneForm;

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

    // const manufacturer = () => {
    //     if(mobilePhone){
    //         return mobilePhone.manufacturer;
    //     } else {
    //         return null;
    //     }
    // }

    // const getManufactures = manufacturers.map((manufacturer, index) =>{
    //     return <option key={index} value={index}>{manufacturer}</option>
    // })

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
        <h3>{heading}</h3>
        <form onSubmit={handleSubmit}>
            <label for="model">Model:</label>
            <input type="text" placeholder="Model" name="model" onChange={handleChange} value={stateMobilePhone}/>
            <select name="manufacturer" defaultValue={findMobileLaptopManufacturerIndex() || "select-manufacturer"}>
            <option disabled value="select-manufacturer">Manufacturer</option>
            {manufacturerOptions}
            </select>
            <label for="Product-number">Product Number:</label>
            <input type="text" placeholder="Product Number" name="productNumber" onChange={handleChange} value={stateMobilePhone.productNumber}/>
            <label for="Category">Category:</label>
            <input type="text" placeholder="Category" name="category" onChange={handleChange} value={stateMobilePhone.category}/>
            <label for="Stock">Stock:</label>
            <input type="number" placeholder="Stock" name="stock" onChange={handleChange} value={stateMobilePhone.stock}/>
            <label for="Buying-price">Buying Price:</label>
            <input type="number" placeholder="Buying Price" name="buyingPrice" onChange={handleChange} value={stateMobilePhone.buyingPrice}/>
            <label for="Selling-price">Selling Price:</label>
            <input type="number" placeholder="Selling Price" name="sellingPrice" onChange={handleChange} value={stateMobilePhone.sellingPrice}/>
            <label for="Screen-Resolution">Screen Resolution:</label>
            <input type="text" placeholder="Screen Resolution" name="screenResolution" onChange={handleChange} value={stateMobilePhone.screenResolution}/>
            <label for="Colour">Colour:</label>
            <input type="text" placeholder="Colour" name="colour" onChange={handleChange} value={stateMobilePhone.colour}/>
            <label for="Size">Screen Size:</label>
            <input type="number" placeholder="Size" name="size" onChange={handleChange} value={stateMobilePhone.size}/>
            <p><button type="submit">Save</button></p>
        </form>
        </>
    )
}

export default MobilePhoneForm;
