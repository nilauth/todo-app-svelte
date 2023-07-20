/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin'), require('tailwindcss-font-inter')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// curstom color
				'primary-bg': '#0f172a',
				primary: '#f8fafc'
			}
		}
	}
};

module.exports = config;
