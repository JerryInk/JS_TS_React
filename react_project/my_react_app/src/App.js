import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterList from './CharacterList';
import InputComponent from './InputComponent';


const App = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([]);

  const onChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  useEffect(() => {
      const downloadCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
        const items = response.data.map((item) => {
          return {
            key: item.id,
            name: item.name,
            status: item.status,
            species: item.species,
          }
        });
        setCharacters(items);
      }
      downloadCharacters();
    }, []);

  return (
    <div className={'app'}>
      <InputComponent query={query} onChange={onChange}/>
      <CharacterList items={
        characters.filter(
          (character) => 
            character.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
      }/>
    </div>
  );
};

export default App;
