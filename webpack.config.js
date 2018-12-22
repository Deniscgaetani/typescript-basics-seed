module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve : {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devServer: {
        port: 3000,
    },
};
