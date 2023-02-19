import React from "react";

export default function Button(props) {
    return(
       <a href={props.link}>
         <div className="button-div">
            <button onClick={props.handleClick} className={props.className}>{props.buttonName}</button>
        </div>
       </a>
    )
}