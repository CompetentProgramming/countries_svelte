<script>
    function changeTheme() {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';

        } else {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        }
    }
</script>

<button class="dark-mode" on:click={changeTheme}>
    <i class="fa-solid fa-moon"></i>
    Dark mode
</button>