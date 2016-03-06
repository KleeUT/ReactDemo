var webpack = require('webpack');
module.exports = {
    entry: [
      "./src/Demo.jsx"
    ],
    output: {
      path: __dirname + '/',
        filename: "bundle.js"
    },
    devtool:"inline-source-map",
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx-loader'], exclude: /node_modules/},
            { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ],
};
