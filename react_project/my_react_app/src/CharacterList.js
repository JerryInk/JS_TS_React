import React from 'react';
import CharacterItem from './CharacterItem';
import './CharacterList.css';

// Компонент для списка минимальной информации о погоде на несколько дней
const CharacterList = (props) => (
    <div className={'character_list'}>
        <ul className={'character_ul'}>
            {props.items && props.items.map((item) =>
                <CharacterItem key={item.id} { ...item }/>
            )}
        </ul>
    </div>
);

export default CharacterList;