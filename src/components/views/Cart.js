import React, { useEffect, useState } from 'react';
import { CartTable } from '../common';

export const Cart = () => {
	const [cart, setCart] = useState(false);

	useEffect(() => {
		const prods = sessionStorage.getItem('cart');
		if (prods !== null) {
			const prod = prods.split(',');
			setCart(prod);
		}
	}, []);

	const handleCheckout = () => {
		console.log('modal compra');
	};

	return (
		<>
			{!cart ? (
				<h3>No tiene productos</h3>
			) : (
				<div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Item</th>
								<th scope="col">Producto</th>
								<th scope="col">Precio</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item, idx) => (
								<CartTable prodID={item} idx={idx} />
							))}
							<tr>
								<td></td>
								<td className="fw-bold">TOTAL</td>
								<td className="fw-bold">$</td>
							</tr>
						</tbody>
					</table>
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						<button
							onClick={handleCheckout}
							className="btn btn-success btn-lg me-5"
						>
							Iniciar compra
						</button>
					</div>
				</div>
			)}
		</>
	);
};
