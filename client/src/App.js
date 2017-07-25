import React from "react";
import ReactDom from "react-dom";
import Header from "./WeatherApp/common/Header";
import Logout from "./WeatherApp/common/Logout";
import Routesss from "./Routes";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<div className="container">
						<Routesss />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDom.render(<App />, document.getElementById("react-app"));
