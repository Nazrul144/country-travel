import { useState } from 'react';
import './Country.css'
const Country = ({country, handleViditedCoutry, handleAddVisitedFlags}) => {
    // console.log(country)
    const {flags, name, population, region, capital, cca3} = country;

    const [visited, setVidited] = useState(false);

    const handleVidited = () =>{
        setVidited(!visited);
    }


    return (
        <div className={`box ${visited ? 'notVisit' : 'visited'}`}>
            <img src={flags.png} alt="" />
            <h3 style={{color: visited ? 'white' : 'red'}}>Name:{name.common}</h3>
            <p>Population:{population}</p>
            <p>Region:{region}</p>
            <p>Capital:{capital}</p>
            <p>Code:{cca3}</p>
            <button onClick={() =>handleViditedCoutry(country)} style={{background:'tomato', marginBottom:'5px'}}>Mark as visited</button>
            <button onClick={handleVidited}>{visited ? "Visited": "Going"}</button>
            <button onClick={() => handleAddVisitedFlags(country.flags.png)}>Add Flag</button>
            {visited ? 'I have visited this country': 'I want to visit this country' }
        </div>
    );
};

export default Country;