//Felix Enrique Leon Molina #19210516
import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Boton extends Component {
	NoClick() {
		console.log("Ya le diste click, Felix Enrique Leon Molina #19210516");
	}

	render() {
		return (
			<div className="App-componente4">
				<Button variant="btn btn-primary" onClick={this.NoClick}>
					No dar click
				</Button>
			</div>
		);
	}
}

export default Boton;
