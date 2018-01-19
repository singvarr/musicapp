const path = require('path');
	
	HtmlWebpackPlugin = require("html-webpack-plugin");
	ExtractTextPlugin = require("extract-text-webpack-plugin");
	webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: "/",
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				use: 'babel-loader'
			},
			{
            	test: /\.less$/,
	            use: ExtractTextPlugin.extract({
	                use: [
	                	{loader: "css-loader"}, 
	                	{loader: "less-loader"}
	                ],
	                fallback: "style-loader"
	            })
        	},
        	{
        		test: /\.(png|svg|jpg|gif)$/,
        		use: 'file-loader'
        	},
        	{
        		test: /\.(woff|woff2|eot|ttf|otf)$/,
        		use: 'file-loader'
        	}
		]	
	},
	plugins: [
    	new HtmlWebpackPlugin({
      		template: path.resolve(__dirname, 'public', 'index.html'),
    	}),
    	new ExtractTextPlugin("style.css"),
    	new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
  	],
  	devServer: {
  		port: 9000,
  		historyApiFallback: true,
  		contentBase: path.resolve(__dirname, 'public'),
  		hot: true
	}
};