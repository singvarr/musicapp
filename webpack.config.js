const path = require("path")
	webpack = require('webpack');
	merge = require('webpack-merge');
	common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
      			use: "eslint-loader"
			},
			{
				test: /\.less$/,
	        	use: ["style-loader", "css-loader", "less-loader"]
	       	}
		]
	},
	plugins: [	
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
  		port: 9000,
  		historyApiFallback: true,
  		contentBase: path.resolve(__dirname, 'public'),
  		hot: true
	}
});