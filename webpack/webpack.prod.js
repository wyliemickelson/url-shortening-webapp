const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'main.[contenthash].js',
		path: path.resolve(__dirname, '../dist'),
		assetModuleFilename: 'assets/[name].[hash].[ext]',
		clean: true
	},
	plugins: [
		new MiniCssExtractPlugin({filename: '[name].[contenthash].css'})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
		]
	}
});