import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD, 
    CLOUDY,
    SUN,
    RAIN, 
    SNOW, 
    WINDY, 
} from '../../../constants/wheathers';
import PropTypes from "prop-types";
import "./styles.css";



const icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]: "day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy",


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
    <div className="wheatherTemperatureCont">
         {
             getWheatherIcon(weatherState)
         }
        <span>{`${temperature} ºc`}</span>
       
    </div>
    );

    };
     WheatherTemperature.propTypes = {
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
     }

export default WheatherTemperature;