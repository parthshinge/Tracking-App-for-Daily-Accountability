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
                    DEFAULT: '#6366f1', // Indigo-500
                    hover: '#4f46e5',   // Indigo-600
                    light: '#818cf8',   // Indigo-400
                },
                accent: {
                    DEFAULT: '#8b5cf6', // Violet-500
                    glow: '#a78bfa',    // Violet-400
                },
                success: {
                    DEFAULT: '#10b981', // Emerald-500
                    light: '#34d399',   // Emerald-400
                    bg: 'rgba(16, 185, 129, 0.1)',
                },
                bg: {
                    main: '#0B0F19',    // Deep dark blue/black
                    secondary: '#111827', // Gray-900
                    card: '#1F2937',    // Gray-800
                    glass: 'rgba(31, 41, 55, 0.7)', // Semi-transparent card
                },
                text: {
                    main: '#F9FAFB',    // Gray-50
                    secondary: '#E5E7EB', // Gray-200
                    muted: '#9CA3AF',   // Gray-400
                },
                border: {
                    DEFAULT: '#374151', // Gray-700
                    light: '#4B5563',   // Gray-600
                }
            },
            fontFamily: {
                main: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                'gradient-dark': 'linear-gradient(to bottom right, #0B0F19, #111827)',
                'glass-gradient': 'linear-gradient(145deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%)',
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
