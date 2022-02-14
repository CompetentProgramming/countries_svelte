
<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { countries } from '../store/countries';
    import { onDestroy } from 'svelte';

    let id = null;
    let selectedCountry = null;

    page.subscribe(p => {
        id = Number(p.params.id);
    });

    let countryUnsubscribe = countries.subscribe((countriesList) => {
        if (id) {
            selectedCountry = countriesList.find(country => country.id === id);
        }
    });

    onDestroy(() => {
        countryUnsubscribe();
    });
</script>

{#if selectedCountry}
    <section class="container px-5 xl:px-0 mx-auto max-ws-screen-xl">
        <button on:click={() => goto('/')} class="shadow h-8 w-32 rounded dark:dark-light mb-10">
            <i class="mr-3 inline-block fas fa-long-arrow-alt-left"></i>
            <span>Back</span>
        </button>
        <div class="container flex flex-col sm:flex-row justify-between items center">
            <div class="w-full sm:w-6/12 sm:mb-0 mb-12">
                <img src={selectedCountry.image} alt={selectedCountry.nativeName}>
            </div>
            <div class="w-full sm:w-5/12">
                <h2 class="text-2xl mb-8">
                    {selectedCountry.nativeName}
                </h2>
                <div class="details grid lg:grid-cols-2 grid-cols-1 mb-8">
                    <div class="column mb-8 lg:mb-0">
                        <p class="mb-3">
                            <span class="font-bold">Native Name: </span>
                            {selectedCountry.nativeName}
                        </p>
                        <p class="mb-3">
                            <span class="font-bold">Population: </span>
                            {selectedCountry.population}
                        </p>
                        <p class="mb-3">
                            <span class="font-bold">Region: </span>
                            {selectedCountry.region}
                        </p>
                        <p class="mb-3">
                            <span class="font-bold">Subregion: </span>
                            {selectedCountry.subregion}
                        </p>
                        <p class="mb-3">
                            <span class="font-bold">Capital: </span>
                            {selectedCountry.capital}
                        </p>
                    </div>
                    <div class="column">
                        <p class="mb-3">
                            <span class="font-bold">Top Level Domain: </span>
                            {#each selectedCountry.tld as tld, i }
                                <span>{tld}{#if i !== selectedCountry.tld.length - 1}, {/if}</span>
                            {/each}
                        </p>
                        <p class="mb-3">
                            <span class="font-bold">Currencies: </span>
                            {#each Object.keys(selectedCountry.currencies) as key, i }
                                <span>
                                    {selectedCountry.currencies[key].name}
                                    {#if i !== Object.keys(selectedCountry.currencies).length - 1}, {/if}
                                </span>
                            {/each}
                        </p>
                        <p class="mb-3">
                            <span class="font-bold">Languages: </span>
                            {#each Object.keys(selectedCountry.languages) as key, i }
                                <span>{selectedCountry.languages[key]}{#if i !== Object.keys(selectedCountry.languages).length - 1}, {/if}
                                </span>
                            {/each}
                        </p>
                    </div>
                </div>
                <p>
                    <span class="font-bold mb-3 block">Border Countries:</span>
                    {#if selectedCountry.borders && selectedCountry.borders.length > 0}
                        {#each selectedCountry.borders as border, i }
                            <span class="p-1 px-6 rounded dark:dark-light mx-1 shadow">{border}</span>
                        {/each}
                    {/if}
                </p>
            </div>
        </div>
    </section>
{/if}