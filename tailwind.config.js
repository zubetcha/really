/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			spacing: {
				128: '32rem',
				144: '36rem',
				256: '64rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		// colors: {
		// 	blue: '#1fb6ff',
		// 	purple: '#7e5bef',
		// 	pink: '#ff49db',
		// 	orange: '#ff7849',
		// 	green: '#13ce66',
		// 	yellow: '#ffc82c',
		// 	'gray-dark': '#273444',
		// 	gray: '#8492a6',
		// 	'gray-light': '#d3dce6',
		// 	white: '#FFFFFF',
		// },
	},
	plugins: [],
};
