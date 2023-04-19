/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            animation: {
                "bounce-fast": "bounce 0.5s linear infinite",
            },
        },
    },
    plugins: [],
};
