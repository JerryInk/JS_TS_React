import React from "react";
import './InputComponent.css';

// Компонент для выбора города для отображения погоды
const InputComponent = ({onSubmit}) => {
  return (
    <div className={'character_search'}>
      <form className={'character_search_form'} onSubmit={onSubmit}>
        <input
          id="character_name_search"
          className={'character_search_form_input'}
          type="search"
          placeholder="Поиск персонажей...">
        </input>
        <input
          className={'character_search_form_submit'}
          type="submit"
          value="Найти">
        </input>
      </form>
    </div>
  );
};

export default InputComponent;