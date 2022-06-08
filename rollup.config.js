import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './index.ts',
    output: {
        file: './libs.js',
        format: 'amd',
    },
    plugins: [
        typescript({ sourceMap: false }),
        nodeResolve(),
        commonjs(),
    ],
};