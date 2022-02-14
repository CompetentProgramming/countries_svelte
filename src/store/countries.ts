import { writable } from "svelte/store";

export const countries = writable([]);

export async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
        throw new Error('No Countries');
    }
    return await response.json();
}
