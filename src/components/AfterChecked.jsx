import React from "react";

export default function Checked(props) {
    return(
        <div className="Checked">
            <h1 className="checked-text">You have scored:  {props.score}/5 </h1>
        </div>
    )
}