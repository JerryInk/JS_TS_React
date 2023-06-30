import DayWeatherComponent from './DayWeatherComponent';
import CityChoiceComponent from './CityChoiceComponent';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '2ee9783c7eea4a3a8a5145948232906';


const getCurrentWeather = async (city) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  const currDay = [{ key: 0, weather: response.data }];
  return currDay;
};

const TodayWeatherPage = () => {
  const [city, setCity] = useState('Ozersk');
  const [currentWeather, setCurrentWeather] = useState([]);

  const handleSubmit = (event) => {
    const newCity = event.target.city_input.value;
    setCity(newCity);
    event.preventDefault();
  }

  useEffect(() => {
    const getCityWeather = async (city) => {
      const day = await getCurrentWeather(city);
      setCurrentWeather(day);
    }
    getCityWeather(city);
  }, [city]);

  return (
    <div className="App">
      <CityChoiceComponent onSubmit={handleSubmit}/>
      <div className="main_weather_info">
        <DayWeatherComponent dayWeather={currentWeather}/>
      </div>
    </div>
  );
}

export default TodayWeatherPage;
