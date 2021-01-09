const path = require('path');

module.exports = {
    entry: './Client.ts',
    output: {
        filename: 'Client.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.ts', 'tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};
