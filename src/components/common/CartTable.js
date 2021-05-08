import React from 'react';

export const CartTable = () => {
	const handleDeletecart = () => {
		sessionStorage.removeItem('cart');
	};

	return (
		<tr>
			<th scope="row">1</th>
			<td>Pizza</td>
			<td>$600</td>
			<td>
				<button
					onClick={handleDeletecart}
					className="btn btn-outline-danger btn-sm"
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
};
