import './App.css';
import DayWeatherComponent from './weather_components/DayWeatherComponent';
import MoreDayWeatherListComponent from './weather_components/MoreDayWeatherListComponent';
import MinDayWeatherListComponent from './weather_components/MinDayWeatherListComponent';
import CityChoiceComponent from './weather_components/CityChoiceComponent';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  //const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState([]);
  //const [daysWeather, setDaysWeather] = useState([]);

  
  useEffect(() => {
    const getCityWeather = async () => {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=2ee9783c7eea4a3a8a5145948232906&q=Ozersk`);
      const weather = response.data;
      setCurrentWeather(weather);
    }

    getCityWeather();
  }, []);

  // useEffect(() => {
  //   const getDaysWeather = async () => {
  //     const response = await axios.get(
  //       `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Ozersk&days=10`
  //     );
  //     setDaysWeather(response.data);
  //   }
  //   getDaysWeather();
  // }, []);

  return (
    <div className="App">
      <CityChoiceComponent />
      <div className="main_weather_info">
        <DayWeatherComponent weather={currentWeather}/>
      </div>
      <MinDayWeatherListComponent />
      <MoreDayWeatherListComponent />
    </div>
  );
}

export default App;
