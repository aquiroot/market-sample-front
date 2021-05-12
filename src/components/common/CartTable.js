import React, { useEffect, useState } from 'react';

export const CartTable = ({ prodID, idx }) => {
	const url_base = 'https://pizza-conmigo.herokuapp.com';

	const [product, setProduct] = useState(false);

	useEffect(() => {
		fetch(`${url_base}/productos?id=${prodID}`)
			.then((data) => data.json())
			.then((data) => setProduct(data));
	}, [prodID]);

	const handleDeletecart = () => {
		sessionStorage.removeItem('cart');
		setProduct(false);
	};

	return (
		<>
			{!product ? (
				<tr>
					<th scope="row">1</th>
					<td>cargando...</td>
					<td></td>
					<td></td>
				</tr>
			) : (
				<tr>
					<th scope="row">{idx + 1}</th>
					<td>{product[0].nombre}</td>
					<td>${product[0].precio}</td>
					<td>
						<button
							onClick={handleDeletecart}
							className="btn btn-outline-danger btn-sm"
						>
							Eliminar
						</button>
					</td>
				</tr>
			)}
		</>
	);
};
