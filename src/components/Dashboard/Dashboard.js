import React from 'react';
import "./Dashboard.css";


function Dashboard() {
  return (
    <div className='container'>
            <div className="box">
              <h1>Weather App</h1>
            <p className='quote'>
              "The only thing you cannot predict is the future but the weather can be predicted"
             </p>
             <p className='search'>Click on the search box to get your current city weather information.</p>
          </div>

          <div className="author">
                <span>Coded by Japhetaline</span>
            </div>
    </div>
    
  )
}

export default Dashboard