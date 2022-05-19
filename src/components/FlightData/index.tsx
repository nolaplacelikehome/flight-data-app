import React, { useState } from 'react';
import '../../css/FlightData/FlightData.css';
import FlightList from '../FlightList';
import FlightSearch from '../FlightSearch';

export default function FlightData() {
	const [inputValue, changeInputValue] = useState("");

	return (
		<div className="section-item section-item--end">
			<div className="top-section">
				<h2 className="title">Weather</h2>
			</div>
			<FlightSearch />
			<div className="bottom-section">
				<FlightList />
			</div>
		</div>
	)
}
