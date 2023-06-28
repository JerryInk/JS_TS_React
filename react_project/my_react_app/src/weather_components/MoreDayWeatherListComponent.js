import React from "react";
import MoreDayWeatherComponent from './MoreDayWeatherComponent';
import './css/MoreDayWeatherListComponent.css';

// Компонент для списка максимальной информации о погоде на несколько дней
const MoreDayWeatherListComponent = () => (
    <div className={'more_day_weather_list'}>
    <ul className={'more_day_weather_ul'}>
        <MoreDayWeatherComponent />
        <MoreDayWeatherComponent />
        <MoreDayWeatherComponent />
        <MoreDayWeatherComponent />
    </ul>
</div>
);

export default MoreDayWeatherListComponent;