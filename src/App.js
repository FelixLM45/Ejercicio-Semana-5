//Felix Enrique Leon Molina #19210516
//import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Boton from "./Components/Boton";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Body />
				<Footer />
				<Boton />
			</div>
		);
	}
}

export default App;
