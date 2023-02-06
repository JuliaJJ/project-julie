/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['DottiesVanilla', 'Verdana', 'sans-serif'],
				'display': ['DottiesChocolate', 'Verdana', 'sans-serif'],
			}
		},
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
			  '.container': {
				maxWidth: '100%',
				'@screen xl': {
				  maxWidth: '1024px',
				},
				'@screen xl': {
					maxWidth: '1024px',
				  },
			  }
			})
		  }
	],
}
