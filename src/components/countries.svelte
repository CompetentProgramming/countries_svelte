<script>
    import { onDestroy } from 'svelte'; 

    import { countries } from '../store/countries';
    let countriesList = [];
    let countriesUnsubscribe = countries.subscribe(list => (countriesList = [...list]));

    onDestroy(() => {
        countriesUnsubscribe();
    })
</script>

<style>
    .image {
        height: 200px;
    }
</style>

<section class="bg-purple-600 container h-20 px-5 mx-auto xl:px-0
 max-w-screen-xl grid justify-between gap-10 grid-cols-1
 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each countriesList as country }
        <div class="rounder-md shadow-md">
            <div class="image bg-no-repeat bg-cover bg-center" style="background-image: url('{country.image}');"></div>
            <div class="p-6 dark:dark-light">
                <h2 class="text-lg mb-3 truncate">{ country.capital }</h2>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
            </div>
        </div>
    {/each}
</section>
