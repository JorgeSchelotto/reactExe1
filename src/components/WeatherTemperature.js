import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';



const icons = {
    sunny: "day-sunny",
    fog:"day-fog",
}

const getWheatherIcon= weatherState  => {
    const icon=icons[weatherState];
    if(icon)
    return(
        <WeatherIcons name={icon} size='2x'/>)
    else
    return(<WeatherIcons name="day-haze" size='2x'/>)
}

const WheatherTemperature = ({temperature, weatherState}) => {
    return(
    <div>
         {
             getWheatherIcon(weatherState)
         }
        <span>{`${temperature} ºc`}</span>
       
    </div>
    );
    };

export default WheatherTemperature;