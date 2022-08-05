import React from "react";
import "../../sheetStyles/primaryButton.css";

function PrimaryButton(props) {

    return <button className="primaryButton" onClick={props.onClick}>{ props.children }</button>
}

export default PrimaryButton;