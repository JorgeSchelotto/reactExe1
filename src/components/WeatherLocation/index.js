import React, {Component} from 'react';
import Location from './Location';
import WheatherData from './WheatherData';
import PropTypes from "prop-types";



const WeatherLocation = () => (
    <div className="app">
        <Location city={"La Plata"}/>
        <WheatherData />


    </div>
);

export default WeatherLocation; 

