import React from "react";
import './css/MoreDayWeatherComponent.css';

// Компонент для максимальной информации о погоде на день
const MoreDayWeatherComponent = () => (
    <li className={'more_day_weather_li'}>
        <div className={'more_day_weather_item'}>
            <div className={'more_day_weather_item_date'}>Дата</div>
            <div className={'more_day_weather_item_daytime'}>Утром</div>
            <div className={'more_day_weather_item_daytime'}>Днем</div>
            <div className={'more_day_weather_item_daytime'}>Вечером</div>
            <div className={'more_day_weather_item_daytime'}>Ночью</div>
        </div>
    </li>
);

export default MoreDayWeatherComponent;