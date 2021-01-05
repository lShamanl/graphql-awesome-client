const path = require('path');

module.exports = {
    entry: './tests/tests.ts',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'tests')
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
