/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'off-white': '#fdfdfd',
				'light-accent': '#597DF3',
			}
		},
	},
	plugins: [],
}
