import React from 'react';

const Population = ({populations}) => {

    const totalPopulation = populations.reduce((total, population) => {return total + population}, 0);
    
    return (
        
    <>
        <h1> {totalPopulation} </h1>

    </>)
}

export default Population;