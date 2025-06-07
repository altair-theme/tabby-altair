import * as path from "path";
import * as url from "url";

import { AngularWebpackPlugin } from "@ngtools/webpack";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default (options) => {
	const config = {
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
					use: [
						{
							loader: "@ngtools/webpack",
						},
					],
				},
				{
					test: /\.scss$/,
					use: ["@tabby-gang/to-string-loader", "css-loader", "sass-loader"],
					include: /(theme.*|component)\.scss/,
				},
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader", "sass-loader"],
					exclude: /(theme.*|component)\.scss/,
				},
			],
		},
		externals: [/^@angular/, /^@ng-bootstrap/, /^tabby-/],
		plugins: [
			new AngularWebpackPlugin({
				tsconfig: path.resolve(__dirname, "tsconfig.json"),
				directTemplateLoading: false,
				jitMode: true,
			}),
		],
	};
	return config;
};
