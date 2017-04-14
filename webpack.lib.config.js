const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'src' ,'mar.js'),
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'mare.js',
		publicPath: '/lib'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			}
		]
	}
}