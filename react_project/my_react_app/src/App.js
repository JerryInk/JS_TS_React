import logo from './logo.svg';
import './App.css';

import React from 'react';


const SelfComponent = ({lname}) => (
  <> {lname} </>
);

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name} 
        <SelfComponent lname="Kardashin" />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMessage name="Aleksey" />
      </header>
    </div>
  );
}

export default App;
