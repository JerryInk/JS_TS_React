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
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        <HelloMessage name="Aleksey" />
      </header>
    </div>
  );
}

export default App;
