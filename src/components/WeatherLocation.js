import React, {Component} from 'react';
import Location from './Location';
import WheatherData from './WheatherData';



const WeatherLocation = () => (
    <div className="app">
        <Location city={"La Plata"}/>
        <WheatherData />


    </div>
);

export default WeatherLocation; 

