import React, { Component } from 'react'
import PropTypes from "prop-types";
import "./styles.css";

const WheatherExtraInfo = ({humidity, wind}) => (
    <div className="wheatherExtraInfoCont">
        <span>{`${humidity} % - ` }</span>
        <span> {`${wind} wind`}</span>
    </div>
);

WheatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WheatherExtraInfo;
