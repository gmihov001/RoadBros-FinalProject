import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const TruckerLoginPage = props => {
	const { actions, store } = useContext(Context);

	const [newContact, setnewContact] = useState({
		email: null,
		password: null
	});

	const handleChange = e => setnewContact({ ...newContact, [e.target.name]: e.target.value });

	return (
		<div className="container text-center pt-5 p-5 text-light">
			<h1 className="">Trucker Login</h1>
			<form className="text-start">
				<div className="form-group my-1">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Email"
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group my-1">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						name="password"
						onChange={handleChange}
					/>
				</div>
			</form>
			<Link to="/TruckerPayment">
				<button
					type="button"
					className="btn btn-warning btn-lg my-3 p-2 me-3"
					onClick={() => actions.login(newContact.email)}>
					Next
				</button>
			</Link>
		</div>
	);
};

TruckerLoginPage.propTypes = {
	history: PropTypes.object,
	setUserLogin: PropTypes.func
};
