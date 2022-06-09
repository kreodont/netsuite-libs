import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
// import { babel } from '@rollup/plugin-babel';

export default {
    input: './netsuite-libs.ts',
    output: {
        file: './netsuite-libs.js',
        format: 'amd',
    },
    plugins: [
        typescript({ sourceMap: false, module: 'ES2015'}),
        nodeResolve(),
        commonjs(),
        //babel(),
    ],
};