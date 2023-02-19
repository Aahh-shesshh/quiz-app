import React from "react";
import Button from "./Button ";


export default function Intro(props) {

   
    return(
        <div className="intro-div" >
            <h1 className="slideInLeft">Quizzical</h1>
            <h3 className="slideInLeft">Start Quiz and Test your Memory</h3>
            <Button link="/Body" className="button-for-start" buttonName="Start Game"/>
            
        </div>
    )
}