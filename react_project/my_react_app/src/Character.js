import React from 'react';
import './Character.css';


const Character = ({name, status, species}) => (
    <div className={'charcter_item'}>
        <div className={'character_item_name'}>{name}</div>
        <div className={'character_item_status'}>{status}</div>
        <div className={'character_item_species'}>{species}</div>
    </div>
);

export default Character;