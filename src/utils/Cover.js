import React from "react";
import "../components/Cartas.css"

class Cover extends React.Component {
        render() {
            return (
                <div className="cover" onClick={this.props.handleClick}></div>
            );
        }   
};
export default Cover;