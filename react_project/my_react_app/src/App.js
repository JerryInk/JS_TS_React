import './App.css';
import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CharacterListPage from './CharacterListPage';
import CharacterPage, {loader as characterLoader} from './CharacterPage';


const router = createBrowserRouter([
  {
    path: "/characters",
    element: <CharacterListPage />,
  },
  {
    path: "/characters/:characterId",
    element: <CharacterPage />,
    loader: characterLoader,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
