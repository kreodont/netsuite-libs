import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'node_modules/@slack/web-api/dist/index.js',
    output: {
        file: './web-api.js',
        format: 'amd', // Use AMD format for compatibility with NetSuite's module system
        sourcemap: false,
    },
    plugins: [
        resolve({ extensions: ['.js'] }),
        commonjs(),
        json()
    ],
};