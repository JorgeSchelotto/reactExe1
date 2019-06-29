import React, { Component } from 'react'
import PropTypes from "prop-types";
import "./styles.css";

const WheatherExtraInfo = ({humidity, wind}) => (
    <div className="wheatherExtraInfoCont">
        <span className="extraInfoText" >{`Humedad: ${humidity} % - ` }</span>
        <span className="extraInfoText"> {`Vientos: ${wind}`}</span>
    </div>
);

WheatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WheatherExtraInfo;
