import fluid, { extract } from "fluid-tailwind"
import type { Config } from "tailwindcss"
import { fxbx } from "./resources/scripts/flexbox"

export default {
	content: {
		files: [
			"./pages/**/*.{js,ts,jsx,tsx,mdx}",
			"./components/**/*.{js,ts,jsx,tsx,mdx}",
			"./app/**/*.{js,ts,jsx,tsx,mdx}",
		],
		extract,
	},
	theme: {
		screens: {
			sm: "40rem",
			md: "50rem",
			lg: "64rem",
			xl: "80rem",
			"2xl": "96rem",
		},
	},
	plugins: [require("tailwindcss-animate"), fluid, ...fxbx],
} satisfies Config
