import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import path from "path";


export default {
    input: [],
    output: {
        dir: `./src/FileCabinet/SuiteScripts/` + path.basename(__dirname),
        format: 'amd',
    },
    external: ['N'],
    plugins: [
        nodeResolve(),
        typescript(),
        commonjs(),
    ],
};