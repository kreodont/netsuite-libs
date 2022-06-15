import nodeResolve from "@rollup/plugin-node-resolve";
import multiInput from 'rollup-plugin-multi-input';

export default {
    input: [],
    output: {
        dir: './src',
        format: 'amd',
    },
    external: ['N'],
    plugins: [
        multiInput(),
        nodeResolve(),
    ],
};