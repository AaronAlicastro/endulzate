import React from "react";
import { FaTimes } from "react-icons/fa";
import FormularioPago from "./FormularioPago";
import PrimaryButton from "./elementos/PrimaryButton";
import SecundaryButton from "./elementos/SecundaryButton";
import BotonAccion from "./elementos/BotonAccion";
import "../sheetStyles/carito.css";

function Carrito(props) {
    let key = 0, too = 0;
    const retornarFila = (conteo, data, ix) => {
        too += data.total;
        if((conteo % 2) == 0){
            return (
                <div className="filasProducto filaPar" key={key+""}>
                    <div className="controlProducto">
                        <h3 onClick={() => props.onClick.ver(data.id)}>{data.title}</h3>
                        <div>
                            <SecundaryButton onClick={() => props.onClick.operar({quitarUno: {index: data.id, ix, quitarMarca: true}})}> <FaTimes /> </SecundaryButton>
                            <SecundaryButton>Cantidad: {data.count}</SecundaryButton>
                            <SecundaryButton onClick={() => props.onClick.operar({index: data.id})}>+</SecundaryButton>
                            <SecundaryButton onClick={() => props.onClick.operar({quitarUno: {index: data.id, ix}})}>–</SecundaryButton>
                            <span>Tomado: {data.take}</span>
                            <span>P/U: {data.valorU}</span>
                        </div>
                    </div>
                    <div className="precioTotal">
                        <h6>Suma</h6>
                        <span>{data.total}</span>
                    </div>
                </div>
            );
        }else {
            return(
                <div className="filasProducto filaImpar" key={key+""}>
                    <div className="controlProducto">
                        <h3 onClick={() => props.onClick.ver(data.id)}>{data.title}</h3>
                        <div>
                            <SecundaryButton onClick={() => props.onClick.operar({quitarUno: {index: data.id, ix, quitarMarca: true}})}> <FaTimes /> </SecundaryButton>
                            <SecundaryButton>Cantidad: {data.count}</SecundaryButton>
                            <SecundaryButton onClick={() => props.onClick.operar({index: data.id})}>+</SecundaryButton>
                            <SecundaryButton onClick={() => props.onClick.operar({quitarUno: {index: data.id, ix}})}>–</SecundaryButton>
                            <span>Tomado: {data.take}</span>
                            <span>P/U: {data.valorU}</span>
                        </div>
                    </div>
                    <div className="precioTotal">
                        <h6>Suma</h6>
                        <span>{data.total}</span>
                    </div>
                </div>
            );
        }
    }
    const abrirFormulario = () => {
        if(too != 0){
            document.querySelector("#divFormulario").style.display = "flex";
            document.querySelector("#divFormulario").style.animation = "abrirFormulario .9s forwards";
        }
    }
    const cerrarFormulario = () => {
        document.querySelector("#divFormulario").style.display = "none";
    }

    return (
        <div id="divCarrito">
            <FormularioPago onClick={{cancelar: cerrarFormulario, efectuar: props.onClick.efectuarPago}} />
            <h1>Carrito</h1>
            {
                props.data.map((d, ix) => {
                    key++;
                    return retornarFila(key, d, ix);
                })
            }
            <div id="total_total">
                <span>Total:</span>
                <span>{too}</span>
                <div>
                    <PrimaryButton onClick={abrirFormulario}>Efectuar pago</PrimaryButton>
                    <BotonAccion onClick={props.onClick.cancelar}>Cancelar</BotonAccion>
                </div>
            </div>
        </div>
    );
}

export default Carrito;