import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
	return (
	<div className="App">
			<div className="container">
				<Weather defaultCity="Atlanta" />
				<footer>
					This project was coded by{" "}
					<a
						href="https://github.com/AngelaLynnSmith"
						target="blank"
						rel="noopener noreferrer">
						Angela Lynn Smith,
					</a>{" "}
					is open-sourced on{" "}
					<a
						href="https://github.com/AngelaLynnSmith/react-wx-app"
						target="blank"
						rel="noopener noreferrer">
						Github,
					</a>{" "}
					and is hosted on{" "}
					<a
						href="https://react-wx-app-2024.netlify.app/"
						target="blank"
						rel="noopener noreferrer">
						Netlify.
					</a>
				</footer>
					</div>
			  </div>
	);
}


