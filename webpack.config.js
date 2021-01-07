const path = require('path');

module.exports = {
    entry: './build/build.ts',
    output: {
        filename: 'build.js',
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
