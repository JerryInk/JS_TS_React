import React from 'react';
import './Character.css';


const Character = ({name, status, species}) => (
    <div className={'charcter_item'}>
        <div className={'character_item_name'}>{name}</div>
        <div className={'character_item_status'}>
            { status === 'Alive' && <img src="/heartbeat.png" alt="status .png"></img> }
            { status === 'Dead' && <img src="/danger.png" alt="status .png"></img> }
            { status === 'unknown' && <img src="/person.png" alt="status .png"></img> }
        </div>
        <div className={'character_item_species'}>
            { species === 'Alien' && <img src="/alien.png" alt="species .png"></img> }
            { species === 'Human' && <img src="/human.png" alt="species .png"></img> }
        </div>
    </div>
);

export default Character;