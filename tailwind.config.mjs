/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mainFamily': ['Noto Sans JP', '-apple-system', '"Helvetica Neue"', '"游ゴシック体"', 'yugothic', '"游ゴシック"', '"Yu Gothic"', '"ヒラギノ角ゴ ProN W3"', 'hiragino kaku gothic pron', 'arial', '"メイリオ"', 'meiryo', 'sans-serif'],
				'en': ['"Helvetica Neue"', 'helvetica', 'sans-serif'],
			  },
		},
	},
	plugins: [],
}
