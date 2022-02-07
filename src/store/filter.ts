import { writable } from "svelte/store";

export const countryFilter = writable({
    search: '',
    region: null
})

export function updateSearchValue(searchValue: string): void {
    countryFilter.update(filter => {
        filter.search = searchValue;
        return filter;
    })
}

export function updateRegionValue(selectedRegion: string): void {
    countryFilter.update(filter => {
        filter.region = selectedRegion;
        return filter;
    })
}

