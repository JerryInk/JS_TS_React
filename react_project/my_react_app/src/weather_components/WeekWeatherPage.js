import MinDayWeatherListComponent from './MinDayWeatherListComponent';
import CityChoiceComponent from './CityChoiceComponent';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '2ee9783c7eea4a3a8a5145948232906';


const getDaysWeather = async (city) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`);
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

const WeekWeatherPage = () => {
  const [city, setCity] = useState('Ozersk');
  const [daysWeather, setDaysWeather] = useState([]);

  const handleSubmit = (event) => {
    const newCity = event.target.city_input.value;
    setCity(newCity);
    event.preventDefault();
  }

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
      <MinDayWeatherListComponent daysWeather={daysWeather}/>
    </div>
  );
}

export default WeekWeatherPage;
