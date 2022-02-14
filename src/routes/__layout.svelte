<style>
    @import url('../styles/global.css');
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>

<script>
import { onDestroy, onMount } from "svelte";

    import DarkMode from "../components/darkMode.svelte";
    import { getCountries, countries } from '../store/countries'

    onMount(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    });

    const countriesUnsubscribe = countries.subscribe(list => {
        if (list.length === 0) {
            getCountries()
                .then(res => {
                    countries.set(res.map((country, idx) => ({
                        id: idx + 1,
                        nativeName: country.name.common,
                        population: country.population.toLocaleString(),
                        region: country.region,
                        subregion: country.subregion,
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
        }
    });



    onDestroy(() => {
        countriesUnsubscribe();
    });
</script>

<nav class="bg-white dark:dark-light shadow">
    <div class="container h-20 px-5 mx-auto xl:px-0 max-w-screen-xl flex flex-row justify-between items-center p-1 mb-10">
        <h1 class="text-2xl"><a href={'/'}>Where in the world?</a></h1>
        <DarkMode/>
    </div>
</nav>

<main>
    <slot></slot>
</main>