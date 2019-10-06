var path = require("path"),
	webpack = require("webpack"),
	libPath = path.join(__dirname, "client"),
	webpack = require('webpack');

module.exports = {
	entry: path.join(libPath, "/app/app.module.js"),
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist"),
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "raw-loader"
			},
			{
				test: /\.(png|jpg)$/,
				loader: "file?name=img/[name].[ext]" // inline base64 URLs for <=10kb images, direct URLs for the rest
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
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
			{ test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: "url-loader" }
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			"window.Masonry": "Masonry"
		}),

		new webpack.optimize.AggressiveMergingPlugin(),
	]
};
