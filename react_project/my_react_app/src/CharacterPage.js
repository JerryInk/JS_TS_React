import React from 'react';
import axios from 'axios';
import './CharacterPage.css';
import { useLoaderData } from 'react-router-dom';

const getCharacter = async (characterId) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
    const item = [{ key: 0, character: response.data }];
    return item;
}

const loader = async({ params }) => {
    const character = await getCharacter(params.characterId);
    return { character };
  }

const CharacterPage = () => {
    const { character } = useLoaderData();

    return (
        <div className='wrapper'>
        {character && character.map((item) => 
            <div className={'character_card'}>
                <div className='character_card_avatar_wrapper'>
                    <div className={'character_card_avatar'}>
                        <img src={item.character.image} alt="Avatar"></img>
                    </div>
                </div>
                <div className='character_card_info_wrapper'>
                    <div className={'character_card_name'}>Name: {item.character.name}</div>
                    <div className={'character_card_created'}>Created: {new Date(item.character.created).toLocaleDateString()}</div>
                    <div className={'character_card_gender'}>Gender: {item.character.gender}</div>
                    <div className={'character_card_location'}>Location: {item.character.location.name}</div>
                    <div className={'character_card_origin'}>Origin: {item.character.origin.name}</div>
                    <div className={'character_card_status'}> <p>Status:</p> 
                        { item.character.status === 'Alive' && <img src="/heartbeat.png" alt="Alive"></img> }
                        { item.character.status === 'Dead' && <img src="/danger.png" alt="Dead"></img> }
                        { item.character.status === 'unknown' && <img src="/person.png" alt="unknown"></img> }
                    </div>
                    <div className={'character_card_species'}> Species: 
                        { item.character.species === 'Alien' && <img src="/alien.png" alt="Alien"></img> }
                        { item.character.species === 'Human' && <img src="/human.png" alt="Human"></img> }
                    </div>
                </div>
            </div>
        )}
        </div>
    )
};

export default CharacterPage;

export { loader };