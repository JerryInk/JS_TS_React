import React from "react";
import './css/DayWeatherComponent.css';

// Компонент для основной информации о погоде на день
const DayWeatherComponent = () => (
    <div className={'day_weather'}>
        <div className={'day_weather_header'}>Озерск</div>
        <div className={'day_weather_main'}>+23</div>
        <div className={'day_weather_additional'}>Влажность 23%</div>
    </div>
);

export default DayWeatherComponent;