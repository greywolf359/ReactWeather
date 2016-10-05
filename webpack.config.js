var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:[ 
	"script!jquery/dist/jquery.min.js",
	"script!foundation-sites/dist/foundation.min.js",
	"./app/index.jsx"
	],

	
	externals: {
		jquery: "jQuery"
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	
	output: {path: __dirname, filename: './public/bundle.js'},
	module: {
				loaders: [
					{
						test: /\.jsx?$/,
						loader: 'babel-loader',
						exclude: /(node_modules|bower_components)/,
						query: {presets: ['es2015', 'react']}	
					},
					//{ test: /\.css$/, loader: "style!css" },
					//{loader: 'script-loader'}
				]
			},
			resolve: {
				root: __dirname,
				alias: {
					Main: 'app/components/main.jsx',
					Nav: 'app/components/nav.jsx',
					Weather: 'app/components/weather.jsx',
					About: 'app/components/about.jsx',
					Examples: 'app/components/examples.jsx',
					WeatherMessage: 'app/components/weathermessage.jsx',
					WeatherForm: 'app/components/weatherform.jsx',
					OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'
				},
				extensions: ['', '.js', '.jsx']
			},

			devtool: 'cheap-module-eval-source-map'


}


