import React from "react";
import "../../sheetStyles/secundaryButton.css";

function SecundaryButton(props) {

    return <button className="secundaryButton" onClick={props.onClick}>{ props.children }</button>
}

export default SecundaryButton;