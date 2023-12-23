// Import the original config from the @wordpress/scripts package.
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

// Import the helper to find and generate the entry points in the src directory
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config');

// Add any a new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		// Add your new entry point here
		'index': './src/index.js',
		'global-styles': './src/global-styles/globals.scss',
	},
};