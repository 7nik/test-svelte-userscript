import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import styles from "rollup-plugin-styles";

const production = !!process.env.PROD;

function getMetablock () {
	return new Promise((resolve, reject) => {
		require("fs").readFile("src/meta.user.js", "utf8", (err, data) => {
			err ? reject(err) : resolve(data);
		});
	});
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: false,
		format: 'iife',
		name: 'calc',
		file: 'build/userscript.user.js',
		banner: getMetablock,
	},
	plugins: [
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
        styles(),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser({
			format: {
				comments: function leaveMetaBlock (node, { value, type }) {
					if (value.trim().startsWith("==UserScript==") && !("inmeta" in leaveMetaBlock)) {
						leaveMetaBlock.inmeta = true;
						return true;
					}
					if (value.trim().startsWith("==/UserScript==") && leaveMetaBlock.inmeta) {
						leaveMetaBlock.inmeta = false;
						return true;
					}
					return leaveMetaBlock.inmeta;
				}
			}
		})
	]
};
