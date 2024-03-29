import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const TruckerPayment = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="container p-4 text-center text-light fs-6 my-3">
			<div>
				<h1 className="text-center my-5">Payment Page</h1>
				<form className="text-start fs-4">
					<div className="form-group my-1">
						<label>Card Information</label>
						<input
							type="text"
							className="form-control shadow-sm"
							placeholder="1234 1234 1234 1234"
							name="card_info"
						/>
					</div>
					<div className="form-group my-1">
						<label>Name on Card</label>
						<input
							type="text"
							className="form-control shadow-sm"
							placeholder="Enter Name"
							name="card_name"
						/>
					</div>
					<div className="form-group my-1">
						<label>Country or Region</label>
						<input type="text" className="form-control shadow-sm" placeholder="Country" name="country" />
					</div>
					<div className="form-group my-1">
						<input type="phone" className="form-control shadow-sm" placeholder="ZIP" name="zip" />
					</div>
					<div className="form-group my-1">
						<label>City</label>
						<input type="text" className="form-control shadow-sm" placeholder="Enter city" name="city" />
					</div>
				</form>
				<Link to="/TruckerHomePage">
					<button type="button" className="btn btn-warning btn-lg p-2 m-3">
						Home
					</button>
				</Link>
			</div>
		</div>
	);
};
