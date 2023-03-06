import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {basename, dirname} from "path";
import { fileURLToPath } from 'url';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default {
    input: [],
    output: {
        dir: `./src/FileCabinet/SuiteScripts/` + basename(__dirname),
        format: 'amd',
    },
    external: ['N'],
    plugins: [
        nodeResolve(),
        typescript(),
        commonjs(),
    ],
};