import React from 'react';
import { dataColumn } from './dataColumn';
import '../../css/FlightList/FlightList.css';

export default function FlightList() {
	return (
		<div className="forecast-container">
			<div className="top-section">
				<h2>Weather Forecast</h2>
				<div className="symbol">Symbol</div>
			</div>
			<div className="weather-data">
				<div className="temp-data">
					<div className="city">City</div>
					<div className="temperature">70 deg</div>
				</div>
				<div className="something">
					<div>something</div>
					<div>else</div>
				</div>
			</div>
		</div>
	)	
}