import React, { Component } from 'react';
import WheatherTemperature from './WeatherTemperature';
import WheatherExtraInfo from './WheatherExtraInfo';
import {
    CLOUD, 
    CLOUDY,
    SUN,
    RAIN, 
    SNOW, 
    WINDY, 
} from '../../../constants/wheathers';
import "./styles.css";


const WheatherData = () =>(
    <div className="wheatherDataCont"> 
    <WheatherTemperature temperature={20} weatherState={CLOUDY}/>
    <WheatherExtraInfo humidity={80} wind={"10m/s"} />
    </div> 
);

export default WheatherData;
