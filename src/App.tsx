import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import FlightData from './components/FlightData';

export default function App() {
  return (
    <div className='page-container'>
      <Navbar />
      <FlightData />
    </div>
  );
}