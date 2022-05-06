import React from 'react'
import '../../css/Navigation/Navigation.css';
import { navItems } from './navItems'; 

export default function Navigation() {
	return (
		<nav>
			<ul>
				{navItems.map(item => 
					<li key={item.id}><a href={item.url}>{item.name}</a></li>
				)}
			</ul>
		</nav>
	)
}
