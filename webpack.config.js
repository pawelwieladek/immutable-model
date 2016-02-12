module.exports = {
    entry: './src/model.js',
    output: {
        path: './dist',
        filename: 'model.js',
        library: true,
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
