import React from "react";
import './css/DayWeatherComponent.css';

// Компонент для основной информации о погоде на день
const DayWeatherComponent = (props) => (
    <div className={'day_weather'}>
        <div className={'day_weather_header'}>{props && props.weather.location.name}</div>
        <div className={'day_weather_main'}>{props && props.weather.current.temp_c}</div>
        <div className={'day_weather_additional'}>{props && props.weather.current.condition.text}</div>
    </div>
);

export default DayWeatherComponent;