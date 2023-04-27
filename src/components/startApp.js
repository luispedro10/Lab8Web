import React from "react";
import Header from "./Header";
import Tablero from "./Tablero";
import Baraja from "../utils/baraja";
import "./App.css"; 

var cont = 0;
const getEstadoInicial = () =>{
  const baraja = Baraja();
  return {
    baraja,
    pareja: [],
    comparando:false,
    numIntentos: 0
  };
}

class StartApp extends React.Component {
  constructor(props){
      super(props);
      this.state = getEstadoInicial();
  }

  render() {
    return (
      <div>
        <Header numIntentos = {this.state.numIntentos}/>
        <Tablero
        baraja = {this.state.baraja}
        pareja={this.state.pareja}
        seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
      );
  }

  seleccionarCarta(carta){
      if(this.state.comparando || this.state.pareja.indexOf(carta) > -1 || carta.acierto){
        return;
      }

      const pareja = [...this.state.pareja, carta]; 
      this.setState({pareja});

      if (pareja.length == 2){
        this.compareCards(pareja);
      }
  }

  compareCards(pareja){
    this.setState({comparando: true});

    setTimeout(()  => {
      const [primer_carta, segunda_carta] = pareja;
      let baraja = this.state.baraja;

      if(primer_carta.icono === segunda_carta.icono){
            cont = cont + 1; 
            if(cont === 8){
              alert(`Juego Completado! QUE CRACK`);
            }
        baraja = baraja.map((carta) => {
          if  (carta.icono !== primer_carta.icono){
            return carta;
          }

          return ({...carta, acierto: true}

            );
        });
      }
      this.ganador(baraja);
      this.setState({
        pareja: [],
        baraja,
        comparando: false,
        numIntentos: this.state.numIntentos + 1
      })

    }, 1000)
  }

  ganador(baraja){ 
    if (baraja.filter((carta) => !carta.acierto).lenght === 0){
      alert(`Juego Completado! QUE CRACK`);
    }
  }
}

export default StartApp;