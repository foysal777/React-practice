import React from "react";


const DataVar = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Mobile Model :{props.product.name} </h2>
            <h3>price :{props.product.price} </h3>
        </div>
    )
}

export default DataVar