/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/styles/**/*.{css,scss}', './src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				screens: {
					xsm: '0px',
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1536px'
				},
				primary: '##38bdf8',
				'primary-dark': '#2563eb',
				'primary-light': '#7dd3fc',
				'dark-main': '#000814',
				'dark-secondary': '#272829',
				light: '#EDF6F9',
				danger: '#EF6262',
				warning: '#FF8400',
				success: '#009A66'
			}
		}
	},
	plugins: [require('rippleui')]
};
