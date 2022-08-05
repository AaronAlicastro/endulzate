import React from "react";
import BotonAccion from "./elementos/BotonAccion";
import "../sheetStyles/productCard.css";

function ProductCard (props) {

    return (
        <div className="productCard">
            <div id="productCard_centro">
                <h2>{ props.data.title }</h2>
                <img src={props.data.backgroundImage} alt="producto" />
                <span>~ {props.data.count} ~</span>
                <BotonAccion onClick={() => props.onClick(props.iden.index)}>Consultar</BotonAccion>
            </div>
        </div>
    );
}

export default ProductCard;