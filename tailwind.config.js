import daisyui from "daisyui";
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
                'open-sans': ['Open Sans', 'sans-serif'],
                'big-shoulders-text': ['Open Sans', 'sans-serif'],
            },
        }
    },

    plugins: [typography, forms, containerQueries, aspectRatio, daisyui],
    daisyui: {
        themes: ["lofi", "business"]
    }
};
