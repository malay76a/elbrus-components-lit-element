import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'

export default [{
    input: ['src/components/index.js'],
    output: {
        dir: 'build/module/',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel(),
        postcss({
            extract: false,
            inject: false,
            plugins: []
        })
    ]},
    {
        input: ['src/components/index.js'],
        output: {
            dir: 'build/nomodule/',
            format: 'system',
            sourcemap: true
        },
        plugins: [
            resolve(),
            babel(),
            postcss({
                extract: false,
                inject: false,
                plugins: []
            })
        ]
    }];
