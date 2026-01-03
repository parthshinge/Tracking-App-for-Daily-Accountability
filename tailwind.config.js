/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366f1', // Indigo
                    glow: 'rgba(99, 102, 241, 0.5)',
                },
                accent: {
                    DEFAULT: '#ec4899', // Pink
                    glow: 'rgba(236, 72, 153, 0.5)',
                },
                bg: {
                    primary: '#030712',
                    secondary: '#0b1121',
                    card: 'rgba(30, 41, 59, 0.4)',
                }
            },
            fontFamily: {
                main: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
