import { Plugin } from "vite"

export const skipDocsBlocks = (): Plugin => {
	const isVueDocs = RegExp.prototype.test.bind(/vue&type=docs/)
	return {
		name: "skip-docs-blocks",
		transform(code, id) {
			if (!isVueDocs(id)) return
			return "export default undefined\n" + code.replace(/^/gm, "// ")
		},
	}
}
