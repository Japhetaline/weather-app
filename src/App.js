import './App.css';
import { useState } from "react";
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/search/api'
import Forecast from './components/forecast/forecast';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforcast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setforcast({ city: searchData.label, ...forecastResponse })
      })
      .catch((err) => console.log(err));
  }

  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data ={forecast}/>}
      <Dashboard />
    </div>
  );
}

export default App;
