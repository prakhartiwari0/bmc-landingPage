/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lighter_purple: '#5B3FA8',
                purple: '#574BB5',
                pink_purple: '#624ABC',
                darker_purple: '#483491',
                neonGreen: '#00FF9D',
                black: '#000000',
                white: '#FFFFFF',
            },
},
    },
    plugins: [],
}