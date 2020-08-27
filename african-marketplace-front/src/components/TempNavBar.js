import React from 'react';
import { Link } from 'react-router-dom';

export default function TempNavBar() {
	return (
		<nav style={{ display: 'flex', justifyContent: 'space-around' }}>
			<Link to='/user'>User Items</Link>
			<Link to='/home'>All Items</Link>
			<Link to='/sell'>Add New Item</Link>
			<Link to='/registration'>Register</Link>
		</nav>
	);
}
