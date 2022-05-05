import React from 'react';
import './css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <div className='page-container'>
      <div className="section-item section-item--start">
        <div className="brand">
          <span className="logo"><FontAwesomeIcon icon={faPlane} /></span>
          <span className="brand-name">Flight Data</span>
        </div>
        <div className="user-info">
          <span className='circle'><FontAwesomeIcon className='user-icon' icon={faUser} color='white' size='lg' /></span>
          <div className="user-name">Name</div>
        </div>
        <nav>
          <ul>
            <li><a href="/">Dashbaord</a></li>
            <li><a href="/flights">Flights</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
        <div className="logout">
          <a href='/logout'><FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
          <a href='/logout'>Logout</a>
        </div>
      </div>
      <div className="section-item section-item--end">
        <div className="top-section">
          <h2 className="title">Flight data</h2>
          <button>Search</button>
        </div>
        <div className="search-section">
            <input type="text" />
            <button>Search</button>
          </div>
        <div className="bottom-section">
          <div className="tab-container">
            <span>All flights</span>
            <span>Your flights</span>
          </div>
          <div className="horizontal-bar"></div>
				  <div className="flight-data">
            <div className="data-category">My Data</div>
          </div>
        </div>
      </div>
    </div>
  );
}
