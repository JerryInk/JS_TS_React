import React from "react";
import './css/MinDayWeatherComponent.css';

// Компонент для мигимальной информации о погоде на день
const MinDayWeatherComponent = ({date, maxTemp, minTemp, condition}) => (
    <li className={'min_day_weather_li'}>
        <div className={'min_day_weather_item'}>
            <div className={'min_day_weather_item_weekday'}>{new Date(date).toDateString().split(' ')[0]}</div>
            <div className={'min_day_weather_item_date'}>{new Date(date).toLocaleDateString('ru-RU')}</div>
            <div className={'min_day_weather_item_icon'}>
                <img src={condition.icon} alt='...'></img>
            </div>
            <div className={'min_day_weather_item_max_temp'}>{maxTemp}&deg;</div>
            <div className={'min_day_weather_item_min_temp'}>{minTemp}&deg;</div>
        </div>
    </li>
);

export default MinDayWeatherComponent;