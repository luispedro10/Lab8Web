import React from 'react';
import './Cartas.css';
import Front from '../utils/Front';
import Cover from '../utils/Cover';
import ReactCardFlip from 'react-card-flip';

export default class Cartas extends React.Component {
  constructor() {
    var name = 4;
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="carta">
        <ReactCardFlip isFlipped={this.props.SiendoComp || this.props.acierto} flipDirection="vertical">
          <Cover handleClick={this.props.seleccionarCarta}></Cover>
          <Front handleClick={this.props.seleccionarCarta} icono={this.props.icono}></Front>
        </ReactCardFlip>
      </div>
    );
  }
}
