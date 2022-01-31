<script>
    let isThemeDark = false;
    function changeTheme() {
        isThemeDark = localStorage.theme === 'dark';
        if (isThemeDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';

        } else {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        }
    }
</script>

<button on:click={changeTheme}>
    {#if isThemeDark}
        <i class="far far-moon"></i>
    {:else}
        <i class="fas fa-moon"></i>
    {/if}
    Dark mode
</button>