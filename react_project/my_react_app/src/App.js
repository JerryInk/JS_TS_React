import './App.css';
import DayWeatherComponent from './weather_components/DayWeatherComponent';
import MinDayWeatherListComponent from './weather_components/MinDayWeatherListComponent';
import CityChoiceComponent from './weather_components/CityChoiceComponent';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '2ee9783c7eea4a3a8a5145948232906';

const getDaysWeather = async (city) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10`);
  const days = response.data.forecast.forecastday.map((item, index) => {
    return {
      key: index,
      date: item.date,
      maxTemp: item.day.maxtemp_c,
      minTemp: item.day.mintemp_c,
      condition: item.day.condition,
    }
  });
  return days;
};

const getCurrentWeather = async (city) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  const currDay = [{ key: 0, weather: response.data }];
  return currDay;
};

const App = () => {
  const [city, setCity] = useState('Ozersk');
  const [currentWeather, setCurrentWeather] = useState([]);
  const [daysWeather, setDaysWeather] = useState([]);

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

  useEffect(() => {
    const getDays = async (city) => {
      const days = await getDaysWeather(city);
      setDaysWeather(days);
    }
    getDays(city);
  }, [city]);

  return (
    <div className="App">
      <CityChoiceComponent onSubmit={handleSubmit}/>
      <div className="main_weather_info">
        <DayWeatherComponent dayWeather={currentWeather}/>
      </div>
      <MinDayWeatherListComponent daysWeather={daysWeather}/>
    </div>
  );
}

export default App;
