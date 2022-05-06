import React from 'react';
import '../../css/Logout/Logout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Logout() {
	return (
		<div className="logout">
			<a href='/logout'><FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
			<a href='/logout'>Logout</a>
		</div>
	)
}
