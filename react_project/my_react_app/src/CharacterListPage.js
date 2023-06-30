import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterList from './CharacterList';
import InputComponent from './InputComponent';


const getCharacters = async (query='') => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
  const items = response.data.results.map((item) => {
    return {
      id: item.id,
      name: item.name,
      status: item.status,
      species: item.species,
      avatar: item.image,
    }
  });
  return items;
}

const CharacterListPage = () => {
  const [query, setQuery] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleSubmit = (event) => {
    const newQuery = event.target.character_name_search.value;
    setQuery(newQuery);
    event.preventDefault();
  }

  useEffect(() => {
      const downloadCharacters = async (query) => {
        const items = await getCharacters(query);
        setCharacters(items);
      }
      downloadCharacters(query);
    }, [query]
  );

  return (
    <div className={'app'}>
      <InputComponent onSubmit={handleSubmit}/>
      <CharacterList items={characters}/>
    </div>
  );
}

export default CharacterListPage;