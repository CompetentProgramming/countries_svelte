const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: [
        "./src/**/*.svelte"
    ],
    darkMode: 'class',
    theme: {
        colors: {
            'dark-light': 'hsl(209, 23%, 22%)',
            'white': colors.white
        },
    },
}