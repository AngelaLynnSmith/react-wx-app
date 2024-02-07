import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
		<div className="App">
			<div className="container">
        <Weather />
				<footer>
					This project was coded by{" "}
					<a
						rel="noreferrer"
						href="https://github.com/AngelaLynnSmith"
						target="blank">
						Angela Lynn Smith,
					</a>{" "}
					is open-sourced on{" "}
					<a
						rel="noreferrer"
						href="https://github.com/AngelaLynnSmith/react-wx-app"
						target="blank">
						Github,
					</a>{" "}
					and is hosted on{" "}
					<a
						rel="noreferrer"
						href="https://react-wx-app-2024.netlify.app/"
						target="blank">
						Netlify.
					</a>
				</footer>
			</div>
		</div>
	);
}


