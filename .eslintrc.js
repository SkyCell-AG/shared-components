module.exports = {
    extends: '@skycell-ag/eslint-config',
    ignorePatterns: ['**/stories/**'],
    globals: {
        otherGlobal: true,
    },
    env: {
        jest: true,
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
}
