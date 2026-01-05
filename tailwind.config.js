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
                    DEFAULT: '#8b5cf6', // Indigo/Purple mix
                    hover: '#7c3aed',
                    light: '#a78bfa',
                },
                accent: {
                    pink: '#db2777',
                    purple: '#9333ea',
                },
                bg: {
                    main: '#0a0b14',    // Deep Navy/Charcoal
                    card: '#1a1b26',    // Darker Slate
                    input: '#24273a',   // Muted Dark Blue for inputs
                    hover: '#2e3248',
                },
                text: {
                    main: '#FFFFFF',
                    secondary: '#94a3b8', // Slate-400
                    muted: '#64748b',     // Slate-500
                },
                border: {
                    DEFAULT: '#2e3248',
                    light: '#4b5563',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Assuming Inter as per reference
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #9333ea 0%, #db2777 100%)', // Purple to Pink
                'gradient-card': 'linear-gradient(180deg, #1a1b26 0%, #0a0b14 100%)',
            }
        },
    },
    plugins: [],
}
