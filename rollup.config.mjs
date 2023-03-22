import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'node_modules/dayjs/dayjs.min.js',
    output: {
        file: './dayjs.js',
        format: 'amd', // Use AMD format for compatibility with NetSuite's module system
        sourcemap: false,
    },
    plugins: [
        resolve({ extensions: ['.js'] }),
        commonjs(),
    ],
};