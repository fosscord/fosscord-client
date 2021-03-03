module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			// "babel-plugin-styled-components",
			// {
			// 	displayName: true,
			// 	fileName: true,
			// 	minify: true,
			// 	transpileTemplateLiterals: true,
			// 	// pure: true,
			// },
		],
	};
};
