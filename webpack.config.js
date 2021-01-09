const path = require('path');

module.exports = {
    entry: {
        graphql: './build.ts'
    },
    output: {
        filename: "[name].js",
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
