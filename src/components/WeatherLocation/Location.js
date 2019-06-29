import React, { Component } from 'react'
import PropTypes from "prop-types";
import "./styles.css";

const Location = ({city}) => {
    // Destructuring: ({city} = props) === (city=props.city)
    //const {city} = props;
    //Destructuring 2: const Location = ({city})
    //Destructuring  === object pattern
   return(
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
        );
};
Location.propTypes={
    city: PropTypes.string.isRequired, //ptsr = PropTypes.string.isRequired,
}
export default Location;
