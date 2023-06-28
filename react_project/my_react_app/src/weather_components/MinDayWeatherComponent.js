import React from "react";
import './css/MinDayWeatherComponent.css';

// Компонент для мигимальной информации о погоде на день
const MinDayWeatherComponent = () => (
    <li className={'min_day_weather_li'}>
        <div className={'min_day_weather_item'}>
            <div className={'min_day_weather_item_weekday'}>Ср</div>
            <div className={'min_day_weather_item_date'}>28 июня</div>
            <div className={'min_day_weather_item_max_temp'}>+23</div>
            <div className={'min_day_weather_item_min_temp'}>+15</div>
        </div>
    </li>
);

export default MinDayWeatherComponent;