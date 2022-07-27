/* eslint-env node */
const fs = require('fs');
const webpack = require('webpack');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const packageJson = require('./package.json');

const header = `${packageJson.name}\nv${packageJson.version}\n`;
const license = fs.readFileSync('./LICENSE.txt', 'utf8');

const baseConfig = require('./webpack.config');

// eslint-disable-next-line prefer-object-spread/prefer-object-spread
const config = Object.assign({}, baseConfig, {
	mode: 'production',
	externals: {
		react: {
			amd: 'react',
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React',
		},
		'react/addons': {
			amd: 'react',
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React',
		},
		'react-dom': {
			amd: 'react-dom',
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			root: 'ReactDOM',
		},
	},
});

let FILENAME = process.env.INCLUDE_ICONS ? '[name].js' : '[name]-components.js';
if (process.env.MINIFY) {
	config.optimization = {
		minimizer: [new TerserPlugin()],
	};
	FILENAME = process.env.INCLUDE_ICONS
		? '[name].min.js'
		: '[name]-components.min.js';
} else {
	config.optimization = {
		minimize: false,
	};
}

config.output.filename = FILENAME;
config.output.library = '[name]';
config.output.libraryTarget = 'umd';

const replacementsArr = [
	{
		pattern: /__VERSION__/g,
		replacement: () => packageJson.version,
	},
];

// This string replacement includes icons in the bundle and affects `icons/**/index.js` which are built by `npm run icons`. The default condition is an equality comparison of two constants, `'__EXCLUDE_SLDS_ICONS__' === '__INCLUDE_SLDS_ICONS__'`, which will allow minification to remove the inline icons and save 100KBs in size when bundling for production. The following makes the condition equal.
if (process.env.INCLUDE_ICONS) {
	// eslint-disable-next-line fp/no-mutating-methods
	replacementsArr.push({
		pattern: /__EXCLUDE_SLDS_ICONS__/g,
		replacement: () => '__INCLUDE_SLDS_ICONS__',
	});
}

config.module.rules[0].loaders = [
	'babel-loader',
	StringReplacePlugin.replace({
		replacements: replacementsArr,
	}),
];

// eslint-disable-next-line fp/no-mutating-methods
config.plugins.push(new webpack.BannerPlugin(header + license));
// eslint-disable-next-line fp/no-mutating-methods
config.plugins.push(
	new webpack.DefinePlugin({
		'process.env': { NODE_ENV: JSON.stringify('production') },
	})
);

module.exports = config;
