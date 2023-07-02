import DayWeatherComponent from './DayWeatherComponent';
import MinDayWeatherListComponent from './MinDayWeatherListComponent';
import CityChoiceComponent from './CityChoiceComponent';

import WeatherInterface from './WeatherInterface';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = '2ee9783c7eea4a3a8a5145948232906';


const getDaysWeather = async (city: string) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10`);
  const days = response.data.forecast.forecastday.map((item: WeatherInterface, index: number) => {
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

const getCurrentWeather = async (city: string) => {
  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
  const currDay = [{ weather: response.data }];
  return currDay;
};

const WeatherPage = () => {
  const [city, setCity] = useState('Ozersk');
  const [currentWeather, setCurrentWeather] = useState([{}]);
  const [daysWeather, setDaysWeather] = useState([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.currentTarget;
    const newCity = target.city_input.value;
    setCity(newCity);
    event.preventDefault();
  }

  useEffect(() => {
    const getCityWeather = async (city: string) => {
      const day = await getCurrentWeather(city);
      setCurrentWeather(day);
    }
    getCityWeather(city);
  }, [city]);

  useEffect(() => {
    const getDays = async (city: string) => {
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

export default WeatherPage;
