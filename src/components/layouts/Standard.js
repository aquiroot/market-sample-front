import React from 'react';
import { Navbar, Footer } from '../common/';

export const Standard = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className="container" style={{ marginTop: 75 }}>
				{children}
			</div>
			<Footer />
		</>
	);
};
