import React from "react";
import './css/DayWeatherComponent.css';

// Компонент для основной информации о погоде на день
const DayWeatherComponent = (props) => (
    <div className={'day_weather_wrapper'}>
        {props.dayWeather && props.dayWeather.map((item) =>
        <div className={'day_weather'}>
            <div className={'day_weather_header'}>
                {item.weather.location.name}
            </div>
            <div className={'day_weather_updated'}>
                Updated: {new Date(item.weather.current.last_updated).toLocaleTimeString()}
            </div>
            <div className={'day_weather_main'}>
                {item.weather.current.temp_c}&deg;
            </div>
            <div className={'day_weather_feels'}>
                Feels like: {item.weather.current.feelslike_c}&deg;
            </div>
            <div className={'day_weather_icon'}>
                <img src={item.weather.current.condition.icon} alt=''></img>
            </div>
            <div className={'day_weather_additional'}>
                Weather conditions: {item.weather.current.condition.text}
            </div>
        </div>
        )}
    </div>
);

export default DayWeatherComponent;