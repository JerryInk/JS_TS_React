import React from "react";
import MinDayWeatherComponent from './MinDayWeatherComponent';
import './css/MinDayWeatherListComponent.css';

// Компонент для списка минимальной информации о погоде на несколько дней
const MinDayWeatherListComponent = (props) => (
    <div className={'min_day_weather_list'}>
        <ul className={'min_day_weather_ul'}>
            {props.daysWeather && props.daysWeather.map((item) =>
                <MinDayWeatherComponent { ...item }/>
            )}
        </ul>
    </div>
);

export default MinDayWeatherListComponent;