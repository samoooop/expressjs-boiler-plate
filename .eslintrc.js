module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    includes: [
        'src/**/*'
    ],
    rules: {
        quotes: [2, 'single', { 'avoidEscape': true }]
    },
};