import React from 'react'
import '../../css/Navbar/Navbar.css';
import Brand from '../Brand'
import User from '../User';
import Navigation from '../Navigation';
import Logout from '../Logout';

export default function Navbar() {
	return (
		<div className="section-item section-item--start">
			<Brand />
			<User />
			<Navigation />
			<Logout />
		</div>
	)
}
