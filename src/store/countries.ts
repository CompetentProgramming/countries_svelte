import { writable } from "svelte/store";

export const countries = writable([]);

async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
        throw new Error('No Countries');
    }
    return await response.json();
}

getCountries()
    .then(res => {
        countries.set(res.map((country, idx) => ({
            id: idx + 1,
            nativeName: country.name.common,
            population: country.population,
            region: country.region,
            subRegion: country.subRegion,
            capital: country.capital,
            tld: country.tld,
            currencies: country.currencies,
            languages: country.languages,
            borders: country.borders,
            cioc: country.cioc,
            image: country.flags.svg,
            
        })))
    })
    .catch(err => countries.set([]));
