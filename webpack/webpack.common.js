const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: '/src/js/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/template.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			}
		]
	}
};