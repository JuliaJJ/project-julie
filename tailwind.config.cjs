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
	plugins: [],
}
