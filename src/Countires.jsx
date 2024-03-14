import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Country-container.css'

export default function Countries(){
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([]);
    const [addVisitedFlags, setAddVisitedFlags] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleViditedCoutry = country =>{
        console.log('add this to your visited country');
        const newVisitedCountry = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountry);
    }

    const handleAddVisitedFlags = flag =>{
        const addFlags = [...addVisitedFlags, flag];
        setAddVisitedFlags(addFlags);
    }


    return(
        <div >
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>Visited Countries:{visitedCountries.length}</h3>
                <ul style={{width:'fit-content'}}>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="img-container">
                    {
                        addVisitedFlags.map((flag, idx) => <img key={idx} src={flag} alt=""/>)
                    }
            </div>
            
            <div className="Country-container">
            {
                countries.map(country =><Country  key={country.cca3} handleViditedCoutry={handleViditedCoutry} handleAddVisitedFlags 
                ={handleAddVisitedFlags} country={country}>

                </Country>)
            }
            </div>
        </div>
    )
}