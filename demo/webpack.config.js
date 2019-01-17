const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'main': path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts')
    },
    resolve: {
        alias: {
            'indeterminable-checkbox': path.resolve(__dirname, '../src/index.js')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }]
        }]
    }
};
