var path = require("path"),
	webpack = require("webpack"),
	libPath = path.join(__dirname, "client"),
	wwwPath = path.join(__dirname, "dist");

module.exports = {
	mode: 'development',
	entry: path.join(libPath, "/app/app.module.js"),
	output: {
		path: path.join(wwwPath),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "raw"
			},
			{
				test: /\.(png|jpg)$/,
				loader: "file?name=img/[name].[ext]" // inline base64 URLs for <=10kb images, direct URLs for the rest
			},
			{
				test: /\.scss$/,
				loader: "style!css!sass"
			},
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: [
					/fontawesome-webfont\.svg/,	
					/fontawesome-webfont\.eot/,
					/fontawesome-webfont\.ttf/,
					/fontawesome-webfont\.woff/,
					/fontawesome-webfont\.woff2/
				],
				loader: "file?name=fonts/[name].[ext]"
			},
			{ test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: "url" }
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			"window.Masonry": "Masonry"
		}),

		// OccurenceOrderPlugin: Assign the module and chunk ids by occurrence count. : https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
		new webpack.optimize.OccurenceOrderPlugin(),

		// Deduplication: find duplicate dependencies & prevents duplicate inclusion : https://github.com/webpack/docs/wiki/optimization#deduplication
		new webpack.optimize.DedupePlugin()
	]
};
