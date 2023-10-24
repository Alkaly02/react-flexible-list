module: {
    loaders: [
        {
            test: /\.jsx?$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel-loader",
            query:
            {
                presets: ['es2015', 'react']
            }
        }
    ]
}