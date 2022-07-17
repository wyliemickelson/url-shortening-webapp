const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, '../dist')
		},
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
});