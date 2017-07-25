import React from "react";
import axios from "axios";
import { Route, Redirect } from "react-router";
import RegistrationForm from "./RegistrationForm";

class Registration extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				email: "",
				password: "",
				username: ""
			}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeUser = this.changeUser.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		var that = this;
		axios
			.post("/auth/register", this.state.user)
			.then(function(response) {
				console.log(response);
				let _id = response.data._id;
				let user = {};
				user._id = _id;
				that.setState({ user });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	changeUser(event) {
		let userProp = event.target.id;
		let user = this.state.user;
		user[userProp] = event.target.value;
		this.setState({ user });
		console.log(this.state.user);
	}

	render() {
		if (this.state.user._id) {
			return <Redirect to="/" />;
		} else {
			return (
				<div>
					<RegistrationForm
						user={this.state.user}
						handleSubmit={this.handleSubmit}
						changeUser={this.changeUser}
					/>
				</div>
			);
		}
	}
}

export default Registration;
