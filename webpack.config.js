/* eslint-disable no-undef */
const path = require('path')

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, '_site/assets'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
}