import React, { Component } from 'react';
import WheatherTemperature from './WeatherTemperature';
import WheatherExtraInfo from './WheatherExtraInfo';


const WheatherData = () =>(
    <div> 
    <WheatherTemperature temperature={20} weatherState={'sunny'}/>
    <WheatherExtraInfo humidity={80} wind={"10m/s"} />
    </div> 
);

export default WheatherData;
