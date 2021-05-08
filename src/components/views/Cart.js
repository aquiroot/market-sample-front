import React from 'react';
import { CartTable } from '../common';

export const Cart = () => {
	const handleCheckout = () => {
		console.log('modal compra');
	};

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">item</th>
						<th scope="col">Producto</th>
						<th scope="col">Precio</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<CartTable />
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
		</>
	);
};
