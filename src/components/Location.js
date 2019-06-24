import React, { Component } from 'react'

const Location = ({city}) => {
    // Destructuring: ({city} = props) === (city=props.city)
    //const {city} = props;
    //Destructuring 2: const Location = ({city})
    //Destructuring  === object pattern
   return(
        <div><h1>{city}</h1></div>
        );
};

export default Location;
