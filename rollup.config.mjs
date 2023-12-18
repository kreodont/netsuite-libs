import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'node_modules/pdf-lib/cjs/index.js',
    output: {
        file: './pdf-lib.js',
        format: 'amd', // Use AMD format for compatibility with NetSuite's module system
        sourcemap: false,
    },
    plugins: [
        resolve({ extensions: ['.js'] }),
        commonjs(),
        json()
    ],
};