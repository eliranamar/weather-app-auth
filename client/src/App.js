import React from "react";
import axios from 'axios';
import ReactDom from "react-dom";
import Header from "./WeatherApp/common/Header";
import Logout from "./WeatherApp/common/Logout";
import Routesss from "./Routes";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: {
				username: '',
				id: null
			}
		}

		this.setUserState = this.setUserState.bind(this);
	}

	setUserState(user) {
		this.setState({ user: user });
	}
	// componentDidMount() {
	// 	let that = this;
	// 	axios.get('/currentuser').then(function (response) {
	// 		console.log(response);
	// 	}).catch(function () {
	// 		console.log('error..');
	// 	})
	// }

	render() {
		return (
			<BrowserRouter>
				<div>
					<Header user={this.state.user} />
					<Routesss setUserState={this.setUserState} />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDom.render(<App />, document.getElementById("react-app"));
