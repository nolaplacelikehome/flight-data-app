import React from 'react';
import '../../css/FlightData/FlightData.css';
import FlightList from '../FlightList';
import FlightSearch from '../FlightSearch';

export default function FlightData() {
	return (
		<div className="section-item section-item--end">
			<div className="top-section">
				<h2 className="title">Flight data</h2>
			</div>
			<FlightSearch />
			<div className="bottom-section">
				<div className="tab-container">
					<span>All flights</span>
					<span>Your flights</span>
				</div>
				<div className="horizontal-bar"></div>
				<FlightList />
			</div>
		</div>
	)
}
