import './App.css';
import React from 'react';
import Header from './Header';


const user = {
    username: "Gradei",
    email: "gradei@yandex.ru",
}

const App = () => (
    <div className={'app'}>
        <Header {...user}/>
    </div>
);

export default App;
