import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import WeatherPage from './weather_components/WeatherPage';

const router = createBrowserRouter([
  {
    path: "/weather",
    element: <WeatherPage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
