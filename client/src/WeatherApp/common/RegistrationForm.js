import React from "react";

const RegistrationForm = props => {
	//Calling a props function via inner function
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div className="form-group">
					<label for="email">Email address:</label>
					<input
						value={props.user.email}
						type="email"
						className="form-control"
						id="email"
						onChange={props.changeUser}
					/>
				</div>
				<div className="form-group">
					<label for="password">Password:</label>
					<input
						value={props.user.password}
						type="password"
						className="form-control"
						id="password"
						onChange={props.changeUser}
					/>
				</div>
				<div className="form-group">
					<label for="username">Username:</label>
					<input
						value={props.user.name}
						type="text"
						className="form-control"
						id="username"
						onChange={props.changeUser}
					/>
				</div>
				<button type="submit" className="btn btn-default">
					Submit
				</button>
			</form>
		</div>
	);
};

export default RegistrationForm;
