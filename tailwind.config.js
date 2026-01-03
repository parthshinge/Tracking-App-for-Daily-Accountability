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
                    DEFAULT: '#2563EB', // Blue-600
                    hover: '#1d4ed8',   // Blue-700
                },
                success: {
                    DEFAULT: '#10B981', // Emerald-500
                    light: '#d1fae5',   // Emerald-100
                    text: '#065F46',    // Darker green for text
                },
                bg: {
                    main: '#F9FAFB',    // Light gray background
                    card: '#FFFFFF',    // White card
                },
                text: {
                    main: '#111827',    // Gray-900
                    muted: '#6B7280',   // Gray-500
                }
            },
            fontFamily: {
                main: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
