import React from "react";
import MinDayWeatherComponent from './MinDayWeatherComponent';
import './css/MinDayWeatherListComponent.css';

// Компонент для списка минимальной информации о погоде на несколько дней
const MinDayWeatherListComponent = () => (
    <div className={'min_day_weather_list'}>
        <ul className={'min_day_weather_ul'}>
            <MinDayWeatherComponent />
            <MinDayWeatherComponent />
            <MinDayWeatherComponent />
            <MinDayWeatherComponent />
        </ul>
    </div>
);

export default MinDayWeatherListComponent;