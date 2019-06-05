const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			'vue-style-loader',
			'css-loader',
			{
				loader: 'sass-loader',
				options: {
				}
			}
		],
	})

	config.module.rules.push({
		test: /\.svg$/,
		use: [
			'svg-sprite-loader',
			'svgo-loader'
		]
	})

	config.resolve.alias['@'] = rootPath
	config.resolve.alias['~'] = rootPath

	return config
}