import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import WeatherPage from './weather_components/WeatherPage';
import TodayWeatherPage from './weather_components/TodayWeatherPage';
import WeekWeatherPage from './weather_components/WeekWeatherPage';
import CityWeatherPage, { loader as weatherLoader } from './weather_components/CityWeatherPage';

const router = createBrowserRouter([
  {
    path: "/weather",
    element: <WeatherPage />,
  },
  {
    path: "/weather/:city",
    element: <CityWeatherPage />,
    loader: weatherLoader,
  },
  {
    path: "/weather/today",
    element: <TodayWeatherPage />,
  },
  {
    path: "/weather/week",
    element: <WeekWeatherPage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
