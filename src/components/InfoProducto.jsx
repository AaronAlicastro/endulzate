import React from "react";
import { IconContext } from "react-icons";
import { FaTimes } from "react-icons/fa";
import PrimaryButton from "./elementos/PrimaryButton";
import "../sheetStyles/infoProducto.css";

function InfoProducto(props) {
    const clickToAgregar = e => {
        props.onClick({index: props.data.index});
    }

    return (
        <div id="cortinaIfoProduct">
            <div id="contenido">
                <div onClick={() => props.onClick(false)}>
                    <span>
                        <IconContext.Provider value={{ size:"2.5em" }}>
                            <FaTimes />
                        </IconContext.Provider>
                    </span>
                    <h1>{ props.data.title }</h1>
                </div>
                <ul>
                    <li><span>Pa&iacute;s de origen:</span> {props.data.pais}</li>
                    <li><span>Cantidad actual:</span> {props.data.count}</li>
                    <li><span>Valor unitario:</span> {props.data.valorU}</li>
                    <li><span>Informaci&oacute;n:</span> {props.data.info}</li>
                </ul>
                <PrimaryButton onClick={clickToAgregar}> A&ntilde;adir al carrito </PrimaryButton>
            </div>
        </div>
    );
}

export default InfoProducto;