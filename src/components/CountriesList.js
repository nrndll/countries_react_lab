import React from 'react'
import CountriesItem from './CountriesItem'

const CountriesList = ({ countries }) => {

    const countriesItems = countries.map((country, index) => {
        return <CountriesItem country={country} key={index}/>
    })

    // const munrosItems = munros.map((munro, index) => {
    //     return <ListItem munro={munro} key={index} onMunroClick={onMunroClick} />
    //   })

    return (
    <div>
        <ul>
            {countriesItems}
        </ul>
        
    </div>
    )
}

export default CountriesList;