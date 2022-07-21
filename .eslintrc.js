module.exports = {
	env: {
		browser: true,
		node: true,
		amd: true,
		es2021: true
	},
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'max-len': ['error', { code: 120 }],
		'no-unused-vars': ['error', { 'vars': 'local', 'args': 'after-used', 'ignoreRestSiblings': false }]
	}
};
