import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientRequests = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<h1 className="mb-4">Client Requests Page</h1>

			<ul className="list-group">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-inline-flex align-items-center" key={index}>
							<img src={item.picture} className="img-fluid m-1" width="15%" height="50%" alt="..." />
							<p className="mx-2 text-start">
								<strong>Name:</strong> <br /> {item.fullName}
							</p>
							<p className="mx-2 text-start">
								<strong>City:</strong> <br /> {item.city}
							</p>
							<p className="mx-2 text-start">
								<strong>Type:</strong> <br /> {item.vehicleType}
							</p>
							<p className="mx-2 text-start">
								<strong>Make:</strong> <br /> {item.vehicleMake}
							</p>
							<p className="mx-2 text-start">
								<strong>Model:</strong> <br /> {item.vehicleModel}
							</p>
							<p className="mx-2 text-start">
								<strong>Year:</strong> <br /> {item.vehicleYear}
							</p>

							<Link to="/MessagesPage">
								<button className="btn btn-primary mx-3 p-1">Accept</button>
							</Link>
						</li>
					);
				})}
			</ul>

			<Link to="/TruckerHomePage">
				<button className="btn btn-primary m-3">Home</button>
			</Link>
		</div>
	);
};
