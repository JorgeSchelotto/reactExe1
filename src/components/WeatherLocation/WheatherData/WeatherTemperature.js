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
const sizeIcon = '4px';
const getWheatherIcon= weatherState  => {
    const icon=icons[weatherState];
    if(icon)
    return(
        <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>)
    else
    return(<WeatherIcons className="wicon" name="day-haze" size={sizeIcon}/>)
}

const WheatherTemperature = ({temperature, weatherState}) => {
    return(
    <div className="wheatherTemperatureCont">
         {
             getWheatherIcon(weatherState)
         }
        <span className="tempeture">{`${temperature}`}</span>
        <span className="tempetureType">{`ºc`}</span>
       
    </div>
    );

    };
     WheatherTemperature.propTypes = {
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
     }

export default WheatherTemperature;