let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
let InterpolateHtmlPlugin = require('interpolate-html-plugin')
let path = require('path')
const themedIndexMobile = path.join(__dirname + '/public/index.html')
console.log('themedIndexMobile', themedIndexMobile)

module.exports = {
	configureWebpack: {
		plugins: [
			new HtmlWebpackPlugin({
				template: themedIndexMobile, // template file to embed the source
				inlineSource: '.(js|css)$' // embed all javascript and css inline
			}),
			new InterpolateHtmlPlugin(HtmlWebpackPlugin),
			new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
		]
	}
}
