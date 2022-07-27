module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['last 2 versions', 'ie 11'],
					node: '8.9.4',
				},
			},
		],
		'@babel/preset-react',
	],
	plugins: [
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-private-methods',
		'root-import',
	],
	env: {
		amd: {
			plugins: ['import-noop'],
		},
		esm: {
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							browsers: ['last 2 versions', 'ie 11'],
							node: '8.9.4',
						},
						modules: false,
					},
				],
				'@babel/preset-react',
			],
			plugins: [
				'@babel/plugin-proposal-object-rest-spread',
				'@babel/plugin-proposal-class-properties',
				'@babel/plugin-proposal-export-default-from',
				'@babel/plugin-proposal-export-namespace-from',
			],
		},
		commonjs: {
			plugins: ['import-noop'],
		},
		mochatest: {
			plugins: ['istanbul'],
		},
		test: {
			plugins: ['require-context-hook'],
		},
	},
	ignore: ['preset/**'],
	overrides: [
		{
			test: '**/__examples__/**',
			plugins: [
				'@babel/plugin-proposal-object-rest-spread',
				'@babel/plugin-proposal-class-properties',
				'@babel/plugin-proposal-export-default-from',
				'@babel/plugin-proposal-export-namespace-from',
				'root-import',
			],
		},
	],
};
