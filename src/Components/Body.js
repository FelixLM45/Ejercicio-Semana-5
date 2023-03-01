//Felix Enrique Leon Molina #19210516
import React, { Component } from "react";

class Body extends Component {
	render() {
		const lenguajes = [
			{ lenguaje: "JavaScript" },
			{ lenguaje: "React JS" },
		];
		return (
			<div className="App-componente2">
				<p>
					Los siguientes lenguajes estan en un arreglo y son
					desplegados en una lista:
				</p>
				<ul>
					{lenguajes.map((p, index) => (
						<li key={index}>{p.lenguaje}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Body;
