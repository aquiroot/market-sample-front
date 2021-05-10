import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	// TODO: slider dark mode

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 fixed-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Pizza Conmigo
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="products">
								Productos
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="cart">
								Carrito
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
