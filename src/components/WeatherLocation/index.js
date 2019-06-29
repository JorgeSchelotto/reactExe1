import React, {Component} from 'react';
import Location from './Location';
import WheatherData from './WheatherData';
import PropTypes from "prop-types";
import "./styles.css";



const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"La Plata"}/>
        <WheatherData />


    </div>
);

export default WeatherLocation; 

