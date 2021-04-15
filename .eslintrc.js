module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	// extends: [
	// 	'airbnb-base',
	// ],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'no-console': 0,
		indent: 'off',
		semi: [2, 'always'],
		"no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
	},
};
