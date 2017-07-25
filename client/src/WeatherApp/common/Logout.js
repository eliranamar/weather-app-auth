import React from "react";
import axios from "axios";

export default class Logout extends React.Component {
	constructor(props) {
		super(props);

		this.logoutFnc = this.logoutFnc.bind(this);
	}

	logoutFnc() {
		axios
			.get("/auth/logout")
			.then(function(res) {
				console.log(res);
			})
			.catch(function(err) {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<button className="btn btn-warning" onClick={this.logoutFnc}>
					Logout
				</button>
			</div>
		);
	}
}

