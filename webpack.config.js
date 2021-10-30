const path = require("path");

module.exports = {
	target: "node",
	entry: "src/index.ts",
	devtool: "source-map",
	context: __dirname,
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		pathinfo: true,
		libraryTarget: "umd",
	},
	resolve: {
		modules: [".", "src", "node_modules"].map((x) => path.join(__dirname, x)),
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					configFile: path.resolve(__dirname, "tsconfig.json"),
				},
			},
			{
				test: /\.scss$/,
				use: ["to-string-loader", "css-loader", "sass-loader"],
			},
		],
	},
	externals: [/^@angular/, /^@ng-bootstrap/, /^tabby-/],
};
