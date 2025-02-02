/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				aurora: {
				  blue: '#60a5fa',    // Existing blue
				  indigo: '#a5b4fc',  // Existing indigo
				  violet: '#ddd6fe',  // Existing violet
				  sage300: '#8FF7A7', // Light Green Mint
				  sage400: '#52E09B', // Vibrant Teal Green
				  sage500: '#1FC978', // Strong Emerald Green
				  sage600: '#00A964', // Deep Jade
				  sage700: '#008754', // Dark Forest Green
				  sage800: '#006A42', // Almost Black-Green
				  sage900: '#004D2C', // Deepest Dark Teal
				}},
			animation: {
				aurora: 'aurora 20s linear infinite'
			},
			keyframes: {
				aurora: {
					'0%': { backgroundPosition: '50% 50%, 50% 50%' },
					'50%': { backgroundPosition: '100% 100%, 100% 100%' },
					'100%': { backgroundPosition: '50% 50%, 50% 50%' }
				}
			}
		}
	},
	plugins: []
}

