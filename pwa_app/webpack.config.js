var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // context: path.join(__dirname,'/src/'),
    entry: './src/index.jsx',
    output: {
        path: './src',
        filename: 'bundle.js'
    },
  	module: {
    	loaders: [
			{ test: /\.jsx$/, loader: 'jsx-loader' },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!sass-loader") }
    	]
  	},
  resolve: {
        extensions: ['', '.jsx', '.js'],
        modulesDirectories: ["src/components", "node_modules"]
    },
    plugins:[
      new ExtractTextPlugin("[name].css")
    ]
};