import React from "react"
import './Service.css'

const Service = (props) => {

    console.log(props)

    // function update() {

    //     const btn = document.getElementById("change")
    //     btn.innerText = "I am changed Now "
    //     btn.style.color = 'green'
    // }

    return (
        <div>
            {/* <h2 id="change" className="text">  I am from service component</h2>
            <button onClick={update} className="btn"> Click me & Change </button>
            <br /><br /> */}

            <div className="card">
                <p>Customer name : {props.name} </p>
                <p>Age : {props.age} </p>
                <p>Launch date </p>

            </div> <br />



        </div>
    )
}

export default Service


