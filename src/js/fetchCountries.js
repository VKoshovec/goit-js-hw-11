import Notiflix from "notiflix";

export function fetchCountry (countryName) {

    const searchParams = new URLSearchParams({
        fields: "name,capital,population,flags,languages",
      });
        
    return fetch(`https://restcountries.com/v2/name/${countryName}?${searchParams}`).then(response => 
    {
        if(response.ok) {
            return response.json();
        } else {
            Notiflix.Notify.failure(`Oops, there is no country with that name "${countryName}"`)
        }
    })
}