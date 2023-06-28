import './App.css';
import DayWeatherComponent from './weather_components/DayWeatherComponent';
import MoreDayWeatherListComponent from './weather_components/MoreDayWeatherListComponent';
import MinDayWeatherListComponent from './weather_components/MinDayWeatherListComponent';
import OtherCitiesWeatherComponent from './weather_components/OtherCitiesWeatherComponent';
import CityChoiceComponent from './weather_components/CityChoiceComponent';

import React from 'react';

// Макет проекта в файле ../public/weather_project_on_React.png


function App() {
  return (
    <div className="App">
      <CityChoiceComponent />
      <div className="main_weather_info">
        <DayWeatherComponent />
        <OtherCitiesWeatherComponent />
      </div>
      <MinDayWeatherListComponent />
      <MoreDayWeatherListComponent />
    </div>
  );
}

export default App;
