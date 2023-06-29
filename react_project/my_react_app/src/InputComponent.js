import React from "react";
import './InputComponent.css';

// Компонент для выбора города для отображения погоды
const InputComponent = () => (
    <div className={'character_search'}>
      <form className={'character_search_form'}>
        <input 
          className={'character_search_form_input'} 
          type="search" 
          placeholder="..."
          onChange={(event) => {
            console.log(event.target.value)
          }}>

        </input>
      </form>
    </div>
);

export default InputComponent;