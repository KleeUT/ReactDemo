var webpack = require('webpack');
module.exports = {
    entry: [
      "./src/Demo.js"
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
            { test: /\.css$/, loader: "style!css" },
            { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" },
            { test: /\.ico$/,    loader: "file-loader" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
     })
   ],
   externals:{
     
   }

};
