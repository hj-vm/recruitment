/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                orkney: ['Orkney', 'sans-serif'],
                sourceSans3: ['Source Sans Pro', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
}