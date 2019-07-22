const { NODE_ENV } = process.env;

module.exports = {
    presets: [
        [
            '@babel/react',

        ]
    ],
    plugins: [
        NODE_ENV === 'test' && '@babel/transform-modules-commonjs'
    ].filter(Boolean)
};