import React from "react";
import PrimaryButton from "./elementos/PrimaryButton";
import SecundaryButton from "./elementos/SecundaryButton";
import "../sheetStyles/formularioPago.css";

const FormularioPago = (props) => {

    return (
        <div id="divFormulario">
            <h1>Datos para el pago</h1>
            <form>
                <input type="text" placeholder="Nombre completo" className="campoForm" />
                <input type="text" placeholder="Dirección" className="campoForm" />
                <input type="text" placeholder="Método de pago" className="campoForm" />
            </form>
            <div>
                <SecundaryButton onClick={props.onClick.cancelar}>Cancelar</SecundaryButton>
                <PrimaryButton onClick={() => {
                    props.onClick.efectuar(seHizo => {
                        if(seHizo){
                            props.onClick.cancelar();
                            setTimeout(() => alert("Se ha realizado el pago con éxito"), 900);
                        } 
                    });
                }}>Efectuar pago</PrimaryButton>
            </div>
        </div>
    );
}

export default FormularioPago;