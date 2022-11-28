import Notiflix from "notiflix";
import { trim } from 'lodash';


export function fetchCountry (countryName) {
    
    const searchParams = new URLSearchParams({
        fields: "name,capital,population,flags,languages",
    });

    const fetchString = `https://restcountries.com/v2/name/${trim(countryName)}?${searchParams}`;
        
    return fetch(fetchString).then(response => {
        if (!response.ok) {
           throw new Error(response.status) 
        } 
        return response.json();
    });
}