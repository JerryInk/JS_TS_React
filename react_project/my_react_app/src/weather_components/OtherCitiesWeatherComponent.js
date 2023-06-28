import React from "react";
import './css/OtherCitiesWeatherComponent.css';

// Компонент для отображения погоды в других городах
const OtherCitiesWeatherComponent = () => (
    <div className={'cities_weather_list'}>
        <div className={'city_weather_list_item'}>Москва</div>
        <div className={'city_weather_list_item'}>Санкт-Петербург</div>
        <div className={'city_weather_list_item'}>Екатеринбург</div>
        <div className={'city_weather_list_item'}>Челябинск</div>
        <div className={'city_weather_list_item'}>Хабаровск</div>
        <div className={'city_weather_list_item'}>Новосибирск</div>
    </div>
);

export default OtherCitiesWeatherComponent;