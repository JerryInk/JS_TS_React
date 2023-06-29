import React from "react";
import './InputComponent.css';

// Компонент для выбора города для отображения погоды
const InputComponent = ({query, onChange}) => {
  return (
    <div className={'character_search'}>
      <form className={'character_search_form'}>
        <input 
          className={'character_search_form_input'} 
          type="search" 
          placeholder="Фильтрация персонажей..."
          value={query}
          onChange={onChange}>
        </input>
      </form>
    </div>
  );
};

export default InputComponent;