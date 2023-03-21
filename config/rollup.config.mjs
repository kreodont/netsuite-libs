import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import glob from 'glob';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';

const currentFolderName = path.basename(path.resolve('.'));
const inputFiles = glob.sync('./*.ts').filter((file) => ['Gulpfile.ts', "deploy.ts"].indexOf(file) < 0);
console.log(inputFiles)
export default inputFiles.map((input) => ({
    input,
    output: {
        dir: `.//src/FileCabinet/SuiteScripts/${currentFolderName}`,
        format: 'amd',
        chunkFileNames: 'libs.js',
    },
    external: ['N', 'N/log', 'N/query', 'N/email', 'N/url', 'N/ui/serverWidget', 'N/ui/message'],
    plugins: [
        resolve(),
        peerDepsExternal(),
        typescript({
            tsconfig: 'tsconfig.rollup.json',
        }),

        babel({
            extensions: ['.js', '.ts'],
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        }),
        commonjs(),
    ],
    manualChunks(id) {
        if (id.includes('node_modules')) {
            // Group all node_modules dependencies into a single chunk
            return 'libs';
        }
    },
}));