import React from 'react';
import { Link } from "react-router-dom";
import './Character.css';


const Character = ({id, name, status, species, avatar}) => (
    <div className={'charcter_item'}>
        <div className={'character_item_avatar character_item_width'}>
            <img src={avatar} alt="Avatar"></img>
        </div>
        <div className={'character_item_name character_item_width'}>{name}</div>
        <div className={'character_item_status character_item_width'}>
            { status === 'Alive' && <img src="/heartbeat.png" alt="Alive"></img> }
            { status === 'Dead' && <img src="/danger.png" alt="Dead"></img> }
            { status === 'unknown' && <img src="/person.png" alt="unknown"></img> }
        </div>
        <div className={'character_item_species character_item_width'}>
            { species === 'Alien' && <img src="/alien.png" alt="Alien"></img> }
            { species === 'Human' && <img src="/human.png" alt="Human"></img> }
        </div>
        <div className='character_link character_item_width'>
            <Link to={`${id}`} target='_blank' rel='noopener noreferrer'>...</Link>
        </div>
    </div>
);

export default Character;