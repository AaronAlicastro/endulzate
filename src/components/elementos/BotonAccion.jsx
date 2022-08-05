import React from "react";
import "../../sheetStyles/botonAccion.css";

function BotonAccion (props) {

    return <button className="botonAccion" onClick={props.onClick}>
        { props.children }
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
    </button>
}

export default BotonAccion;