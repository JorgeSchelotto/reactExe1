import React, {Component} from 'react';
import logo from './logo.svg';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

function App() {

    return (
      <div className="App">
        WeatherApp aplicacion del clima!!!
        <WeatherLocation></WeatherLocation>
      </div>
    );

}

export default App;
