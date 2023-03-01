//Felix Enrique Leon Molina #19210516
import React, { Component } from "react";

class Footer extends Component {
	render() {
		const temas = [
			{ tema: "Tipos de componentes" },
			{ tema: "Funciones y eventos" },
			{ tema: "Uso de varios componentes" },
		];
		return (
			<div className="App-componente3">
				<p>En este ejercicio vimos:</p>
				<ol>
					{temas.map((p, index) => (
						<li key={index}>{p.tema}</li>
					))}
				</ol>
			</div>
		);
	}
}

export default Footer;
