import React from "react";
import "./Tablero.css"
import Cartas from "./Cartas";

export default class Tablero extends React.Component {
  render() {
    return (
        <div id="Tablero">
            {
              this.props.baraja.map((carta, index) =>{
                  const SiendoComp = this.props.pareja.indexOf(carta) > -1; 
                  
                  return <Cartas key={index} icono={carta.icono} 
                  SiendoComp = {SiendoComp} seleccionarCarta = {()=> this.props.seleccionarCarta(carta)} acierto={carta.acierto}
                  />
              })
            }
        </div>
        
    );
  };
};