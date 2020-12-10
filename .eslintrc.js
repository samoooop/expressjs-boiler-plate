module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        quotes: ['warn', 'single', { avoidEscape: true }],
        'comma-dangle': ['warn', 'always-multiline'],
        semi: ['warn', 'always'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
