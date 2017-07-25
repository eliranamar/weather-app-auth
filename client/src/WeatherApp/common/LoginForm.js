import React from "react";

const LoginForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
						value={props.user.name}
						type="text"
						className="form-control"
						id="username"
						onChange={props.changeUser}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						value={props.user.password}
						type="password"
						className="form-control"
						id="password"
						onChange={props.changeUser}
					/>
				</div>
				<button type="submit" className="btn btn-default">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
