import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'

export default [{
    input: ['src/components/index.js'],
    output: {
        file: 'build/module/components/index.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel(),
        postcss({
            extract: false,
            plugins: []
        })
    ]},
    {
        input: ['src/components/index.js'],
        output: {
            file: 'build/nomodule/components/index.js',
            format: 'system',
            sourcemap: true
        },
        plugins: [
            resolve(),
            babel(),
            postcss({
                extract: false,
                plugins: []
            })
        ]
    }];
