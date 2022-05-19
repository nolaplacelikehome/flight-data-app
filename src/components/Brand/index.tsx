import React from 'react'
import '../../css/Brand/Brand.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

export default function Brand() {
	return (
		<div className="brand">
			<span className="logo"><FontAwesomeIcon icon={faPlane} /></span>
			<span className="brand-name">Weather Data</span>
		</div>
	)
}
