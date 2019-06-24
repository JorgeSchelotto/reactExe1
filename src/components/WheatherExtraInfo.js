import React, { Component } from 'react'

const WheatherExtraInfo = ({humidity, wind}) => (
    <div>
        <span>{`${humidity}% - ` }</span>
        <span> {`${wind} wind`}</span>
    </div>
);

export default WheatherExtraInfo;
