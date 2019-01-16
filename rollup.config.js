import babel from 'rollup-plugin-babel';


export default {
    input: 'src/index.js',
    output: {
        file: 'dist/indeterminable-checkbox.js',
        format: 'iife',
        name: 'indeterminableCheckbox'
    },
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                ["@babel/preset-env", { modules: false }]
            ],
            comments: false
        })
    ]
};
