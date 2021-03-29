module.exports = function (api) {
    api.cache(true)

    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
    ]

    const plugins = [
        'relay',
        'macros',
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
