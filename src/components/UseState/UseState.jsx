import React, { useState } from "react";

const Change = () => {
    const [price, setPrice] = useState(22)
    const increaseHandle = () => {
        const newPrice = price + 1;
        setPrice(newPrice);
        console.log(price)
    }
    const DecreaseHandle = () => {

        const newPrice = price - 1;
        setPrice(newPrice);
    }

    return (
        <div>
            <h2>Price : {price} </h2>

            <button onClick={increaseHandle} >increase</button> &bnps;
            <button onClick={DecreaseHandle}>decrease</button>
            <h2>Price : {price} </h2>
            <h2>Price : {price} </h2>

        </div>
    )
}


export default Change