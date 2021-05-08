import React, { useEffect, useState } from 'react';
import { ProductCard } from '../common';

export const Products = () => {
	const [products, setProducts] = useState(false);

	const url_base = 'https://pizza-conmigo.herokuapp.com';

	useEffect(() => {
		fetch(`${url_base}/productos`)
			.then((data) => data.json())
			.then((data) => setProducts(data));

		return function cleanup() {
			setProducts(false);
		};
	}, []);

	return (
		<div style={{ marginBottom: 60 }}>
			{!products ? (
				<h3>Cargando productos</h3>
			) : (
				<div className="row row-cols-1 row-cols-md-4 g-4">
					{products.map((product) => (
						<ProductCard
							key={product._id}
							product={product}
							url_base={url_base}
						/>
					))}
				</div>
			)}
		</div>
	);
};
