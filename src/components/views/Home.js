import React from 'react';
import { Link } from 'react-router-dom';
import pizza from '../../img/Pizza.svg';

export const Home = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<img src={pizza} style={{ width: 550 }} alt="pizza logo" />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1>Bienvenidos a Pizza Conmigo</h1>
				<button className="btn btn-danger m-2">
					<Link
						style={{ color: 'white', textDecoration: 'none' }}
						to="products"
					>
						Ver productos
					</Link>
				</button>
			</div>
		</div>
	);
};
