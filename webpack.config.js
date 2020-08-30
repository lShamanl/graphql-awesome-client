const path = require('path');

module.exports = {
    entry: './test/tests.ts',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'test')
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
