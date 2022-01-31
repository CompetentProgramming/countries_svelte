<style>
    @import url('../styles/global.css');
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>

<script>
    import DarkMode from "../components/darkMode.svelte";
</script>

<nav class="bg-white dark:dark-light">
    <div class="container h-20 px-5 mx-auto xl:px-0 max-w-screen-xl flex flex-row justify-between items-center p-1 mb-10">
        <h1 class="text-2xl">Where in the world?</h1>
        <DarkMode/>
    </div>
</nav>

<main>
    <slot></slot>
</main>