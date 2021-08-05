module.exports = function (api) {
    api.cache(true)

    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
    ]

    const plugins = [
        'relay',
        'macros',
        'inline-react-svg',
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
