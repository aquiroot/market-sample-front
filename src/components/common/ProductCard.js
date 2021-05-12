import React from 'react';

export const ProductCard = ({ product, url_base }) => {
	const { _id, nombre, descripcion, precio, imagen } = product;
	const { url } = imagen.formats.thumbnail;

	const handleAdd = () => {
		let cart = sessionStorage.getItem('cart');

		if (cart === null) {
			sessionStorage.setItem('cart', _id);
		} else {
			sessionStorage.setItem('cart', `${cart},${_id}`);
		}
	};

	return (
		<div className="col">
			<div className="card shadow bg-body rounded" style={{ height: 516 }}>
				<img
					loading="lazy"
					src={url_base + url}
					className="card-img-top"
					alt={nombre}
					style={{ width: 259, height: 259 }}
				/>
				<div
					className="card-body text-center"
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<h5 className="card-title">{nombre}</h5>
					<p className="card-text">{descripcion}</p>
					<h3>${precio}</h3>
					<button onClick={handleAdd} className="btn btn-primary">
						Agregar al carrito
					</button>
				</div>
			</div>
		</div>
	);
};
