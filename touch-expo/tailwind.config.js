/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F172A',
                secondary: '#3B82F6',
                accent: '#10B981',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            zIndex: {
                '60': '60',
                '70': '70',
            }
        },
    },
    plugins: [],
}