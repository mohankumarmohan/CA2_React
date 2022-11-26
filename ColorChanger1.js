import React, { useState } from "react";
import Select from 'react-select';

const ColorChanger1 = () => {
    var colors = [
        {
            value: 1,
            label: "Lime"
        },
        {
            value: 2,
            label: "Lavender"
        },
        {
            value: 3,
            label: "Crimson"
        },
        {
            value: 4,
            label: "Darkblue"
        },
        {
            value: 5,
            label: "Teal"
        },
        {
            value: 6,
            label: "Purple"
        },
        {
            value: 7,
            label: "GhostWhite"
        },
        {
            value: 8,
            label: "AquaMarine"
        },
        {
            value: 9,
            label: "skyBlue"
        },
    ]


    var [bgcolor, setbgcolor] = useState("");

    const eventChange = (event) => {
        setbgcolor(event.label);
    }

    return (
        <div>
            <style>
                {
                    '.aaa {background-color:' + bgcolor + ';'
                }
            </style>
            <Select options={colors} onChange={eventChange}></Select>
            <center>
            
                <h1>Colour Changed to {bgcolor}</h1>
                <div></div>
            </center>
            <div style={{border:"1px solid black", height:"300px",width:"300px", position:'absolute',left:'40%',top:"10%"}} className="aaa"> 
            
            </div>
        </div>
    )
}

export default ColorChanger1;
