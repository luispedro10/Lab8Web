import React from "react";
import "./Header.css"

export default class Header extends React.Component {
  render() {
    return (
        <header id="Header">
            <h2 id="titulo">Lab8 <br/> Memoria</h2>
            <div id="intentos">Numero de movimientos: 
            <div>{this.props.numIntentos}</div> 
            </div>
        </header>
    );
  }
}

