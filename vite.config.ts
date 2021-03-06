/// <reference types="vitest" />
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import inspect from "vite-plugin-inspect"
import { createVuePlugin as vue } from "vite-plugin-vue2"
import { skipDocsBlocks } from "./build/skip-docs-blocks"

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		// minify: false,
		rollupOptions: {
			output: {
				assetFileNames: (info) =>
					info.name === "index.css"
						? `app.css`
						: `assets/[name]-[hash][extname]`,
				entryFileNames: () => `app.js`,
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/scss/__auto-import.scss";`,
			},
		},
	},
	plugins: [
		vue(),
		skipDocsBlocks(),
		inspect(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	test: {
		coverage: {
			all: true,
			exclude: [
				"**/*.config.{ts,js}",
				"**/*.d.ts",
				"**/*.spec.{ts,js}",
				"build",
				"coverage",
				"dist",
				"tests",
			],
		},
		environment: "jsdom",
		globals: true,
		setupFiles: ["tests/unit/setup.ts"],
	},
})
