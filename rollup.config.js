import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
    // CommonJS
    {
        input: 'src/index.js',
        output: {
            file: 'lib/validation-hook.js',
            format: 'cjs',
            indent: false,
            globals: {
                react: "React"
            }
        },
        external: [
            'react',
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {})
        ],
        plugins: [babel()]
    },

]