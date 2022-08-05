import React from "react";
import { IconContext } from "react-icons";
import { FaHouzz, FaShoppingCart } from "react-icons/fa";
import logo from "../images/logo.png";
import "../sheetStyles/cabecera.css";

function Cabecera (props) {
    const hoverLogo = () => {
        document.querySelector("#logoName").style.display = "inline-block";
        document.querySelector("#logoName").style.animation = "moveBarra .6s forwards";
    }
    const hoverLogoReverse = () => {
        document.querySelector("#logoName").style.display = "none";
    }

    return (
        <nav id="navCabecera">
            <div>
                <img src={logo} alt="logo" onMouseEnter={hoverLogo} onMouseLeave={hoverLogoReverse} onClick={props.onClick.home} />
                <label id="logoName"> Sweeten </label>
            </div>
            <div>
                <label className="containerIconNav" onClick={props.onClick.home}>
                    <IconContext.Provider value={{ size:"2.5em" }}>
                        <FaHouzz />
                    </IconContext.Provider>
                </label>
                <label className="containerIconNav" onClick={props.onClick.carrito}>
                    <IconContext.Provider value={{ size:"2.5em" }}>
                        <FaShoppingCart />
                    </IconContext.Provider>
                    <span id="numCompra">{props.count}</span>
                </label>
            </div>
        </nav>
    );
}

export default Cabecera;