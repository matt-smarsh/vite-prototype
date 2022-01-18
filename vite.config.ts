import { defineConfig } from "vite"
import { createVuePlugin as vue } from "vite-plugin-vue2"

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: "./src/main.ts",
			formats: ["iife"],
			fileName: "app.js",
			name: "📜",
		},
		// minify: false,
		rollupOptions: { output: { extend: true } },
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/scss/__auto-import.scss";`,
			},
		},
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
})
