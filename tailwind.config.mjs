/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#8e24aa',  // Violet
				secondary: '#d81b60',  // Magenta
				accent: '#5e35b1',  // Deep Violet
				background: '#f4f4f4',  // Light Gray
				card: '#ffffff',  // White
				textPrimary: '#333333',  // Dark Gray
				textSecondary: '#555555',  // Medium Gray
			  },
		},
	},
	plugins: [],
}
