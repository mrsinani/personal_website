/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				aurora: {
					blue: '#60a5fa',
					indigo: '#a5b4fc',
					violet: '#ddd6fe',
				},
			},
			animation: {
				aurora: 'aurora 20s linear infinite',
			},
			keyframes: {
				aurora: {
					'0%': { backgroundPosition: '50% 50%, 50% 50%' },
					'50%': { backgroundPosition: '100% 100%, 100% 100%' },
					'100%': { backgroundPosition: '50% 50%, 50% 50%' },
				},
			},
		},
	},
	plugins: [],
}

