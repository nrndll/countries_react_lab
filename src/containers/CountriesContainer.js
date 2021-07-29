import React, { useState, useEffect} from 'react';
import Population from '../components/population';
import CountriesList from '../components/CountriesList';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const totalPopulations = countries.map((country) => {
        return country.population
    })
    

    return (
        <>
            <h2>CountriesContainer</h2>
            <Population populations={totalPopulations}/>
            <CountriesList countries={countries}/>
        </>
    )
}

export default CountriesContainer;