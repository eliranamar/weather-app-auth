import React from "react";
import axios from "axios";
import LoginForm from "./LoginForm";

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				password: "",
				username: ""
			}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeUser = this.changeUser.bind(this);
	}

	handleSubmit(event) {
		let that = this;
		event.preventDefault();
		axios
			.post("/auth/login", this.state.user)
			.then(function(response) {
				console.log(response);
				let user = {};
				user.id = response.data._id;
				user.username = response.data.username;
				that.props.setUserState(user);
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
		return (
			<div>
				<LoginForm
					user={this.state.user}
					handleSubmit={this.handleSubmit}
					changeUser={this.changeUser}
				/>
			</div>
		);
	}
}

export default Login;
