import DayWeatherComponent from './DayWeatherComponent';
import MinDayWeatherListComponent from './MinDayWeatherListComponent';

import React from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

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

const loader = async({ params }) => {
    const currentWeather = await getCurrentWeather(params.city);
    const daysWeather = await getDaysWeather(params.city);
    return { currentWeather, daysWeather };
  }

const WeatherPage = () => {
  const { currentWeather, daysWeather } = useLoaderData();

  return (
    <div className="App">
      <div className="main_weather_info">
        <DayWeatherComponent dayWeather={currentWeather}/>
      </div>
      <MinDayWeatherListComponent daysWeather={daysWeather}/>
    </div>
  );
}

export default WeatherPage;

export { loader };