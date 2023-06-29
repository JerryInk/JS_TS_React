import React from "react";
import './css/CityChoiceComponent.css';

// Компонент для выбора города для отображения погоды
const CityChoiceComponent = () => (
    <div className={'city_choice_header'}>
      <form className={'city_search_form'} role="search">
        <input className={'city_search_form_input'} type="search" placeholder="Type city..."></input>
      </form>
    </div>
);

export default CityChoiceComponent;