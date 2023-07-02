import React from "react";
import './css/CityChoiceComponent.css';

interface CityChoiceProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

// Компонент для выбора города для отображения погоды
const CityChoiceComponent = ({onSubmit}: CityChoiceProps) => {
  return (
      <div className={'city_choice_header'}>
        <form 
          className={'city_search_form'} 
          role="search"
          onSubmit={onSubmit}>
          <input 
            id='city_input' 
            className={'city_search_form_input'} 
            type="search" 
            placeholder="Type city...">
          </input>
        </form>
      </div>
  );
}

export default CityChoiceComponent;