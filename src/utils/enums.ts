export enum Regions {
    AFRICA = 'Africa',
    AMERICAS = 'Americas',
    ASIA = 'Asia',
    EUROPE = 'Europe',
    OCEANIA = 'Oceania',
}

export function regionList() {
    return Object.keys(Regions).map(key => ({value: Regions[key], label: Regions[key]}))
}