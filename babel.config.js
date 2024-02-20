module.exports = function (api) {
    api.cache(true)

    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
    ]

    const plugins = [
        'macros',
        'inline-react-svg',
        [
            'file-loader',
            {
                limit: 10000,
            },
        ],
        [
            'module-resolver',
            {
                extensions: ['.js'],
                root: ['./src'],
            },
        ],
    ]

    return {
        plugins,
        presets,
    }
}
