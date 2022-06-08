import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default {
    input: './libs.ts',
    output: {
        file: './libs.js',
        format: 'amd',
    },
    plugins: [
        typescript({ sourceMap: false }),
        nodeResolve(),
        commonjs(),
        babel(),
    ],
};