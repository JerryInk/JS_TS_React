import './App.css';
import DayWeatherComponent from './weather_components/DayWeatherComponent';
import MinDayWeatherListComponent from './weather_components/MinDayWeatherListComponent';
import CityChoiceComponent from './weather_components/CityChoiceComponent';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '2ee9783c7eea4a3a8a5145948232906';

const getDaysWeather = async () => {
  const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Ozersk&days=10`);
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

const getCurrentWeather = async () => {
  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Ozersk`);
  const currDay = [{ key: 0, weather: response.data }];
  return currDay;
};

const App = () => {
  //const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState([]);
  const [daysWeather, setDaysWeather] = useState([]);

  
  useEffect(() => {
    const getCityWeather = async () => {
      const day = await getCurrentWeather();
      setCurrentWeather(day);
    }
    getCityWeather();
  }, []);

  useEffect(() => {
    const getDays = async () => {
      const days = await getDaysWeather();
      setDaysWeather(days);
    }
    getDays();
  }, []);

  return (
    <div className="App">
      <CityChoiceComponent />
      <div className="main_weather_info">
        <DayWeatherComponent dayWeather={currentWeather}/>
      </div>
      <MinDayWeatherListComponent daysWeather={daysWeather}/>
    </div>
  );
}

export default App;
