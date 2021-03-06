import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

export default [{
    input: ['src/components/index.js'],
    output: {
        dir: 'module/',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(),
        postcss({
            extract: false,
            inject: false,
            plugins: []
        }),
        babel({
            "plugins": [
                '@babel/plugin-proposal-class-properties',
                ['@babel/proposal-decorators', { decoratorsBeforeExport: true } ],
                '@babel/plugin-syntax-dynamic-import'
            ]
        }),
        terser()
    ]
    }, {
    input: ['src/components/index.js'],
    output: {
        dir: 'nomodule/',
        format: 'system',
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel({
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "targets": {
                            "chrome": "58",
                            "ie": "11"
                        }
                    }
                ]
            ],
            "plugins": [
                '@babel/plugin-proposal-class-properties',
                ['@babel/proposal-decorators', { decoratorsBeforeExport: true } ],
                '@babel/plugin-syntax-dynamic-import'
            ]
        }),
        postcss({
            extract: false,
            inject: false,
            plugins: []
        }),
        terser()
    ]
}];
