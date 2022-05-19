import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../css/FlightSearch/FlightSearch.css';

export default function FlightSearch() {
	const [inputValue, changeInputValue] = useState("");
	const [forecast, setForecast] = React.useState<any>(null);
			
	const options = {
		method: 'GET',
		url: 'https://api.weather.gov/radar/stations',
	};

	useEffect(() => {
		axios.request(options)
		.then(function(response) {
			console.log(response.data);
			const data = response.data.features[0].properties;
			setForecast(data);
		})
		.catch(function(error) {
			console.error(error);
		})
	}, []);

	return (
		<div className="search-section">
			<input 
				value={inputValue} 
				onChange={e => changeInputValue(e.target.value)} 
				type="text" 
				placeholder='Search for a city...'
			/>
			<button>Search</button>
		</div>
	)
}