const env = process.env.NODE_ENV || 'development'
const path = require('path')
const pkg = require('./package.json')
const libraryName = pkg.name

/** @type WebpackConfig */
module.exports = {
    entry: './packages/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: libraryName,
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    mode: env,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react')
        }
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
        }
    }
}
