import React from 'react'
import '../../css/User/User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function User() {
	return (
		<div className="user-info">
			<span className='circle'><FontAwesomeIcon className='user-icon' icon={faUser} color='white' size='lg' /></span>
			<div className="user-name">Name</div>
		</div>
	)
}
