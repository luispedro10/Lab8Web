import React from "react";
import "../components/Cartas.css";

export default class Front extends React.Component {
  render() {
    return (
      <div className="front" onClick={this.props.handleClick}>
        <i className={`fa ${this.props.icono} fa-5x`} />
      </div>
    );
  }
}
