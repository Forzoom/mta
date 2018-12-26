const typescript = require('rollup-plugin-typescript');
const { uglify } = require('rollup-plugin-uglify');

module.exports = exports = [
    {
        input: './src/index.ts',
        output: {
            file: './dist/mta.esm.js',
            format: 'esm',
        },
        plugins: [
            typescript(),
        ],
    },
    {
        input: './src/index.ts',
        output: {
            file: './dist/mta.cjs.js',
            format: 'cjs',
        },
        plugins: [
            typescript(),
        ],
    },
    {
        input: './src/index.ts',
        output: {
            file: './dist/mta.js',
            name: 'ROMta',
            format: 'umd',
        },
        plugins: [
            typescript(),
        ],
    },
    {
        input: './src/index.ts',
        output: {
            file: './dist/mta.min.js',
            name: 'ROMta',
            format: 'umd',
        },
        plugins: [
            typescript(),
            uglify(),
        ],
    },
];