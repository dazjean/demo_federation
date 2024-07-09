const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        clean: true
    },
    devServer: {
        port: 3000
    },
    devtool:'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            remotes: {
                // {远程app本地别名}: {远程app配置的name}@远程app根地址/{远程app配置的filename}}
                'remote-app': 'remote_app@http://localhost:3001/remote_index.js',
            },
            shared: {
                // 远程和本地主机都要设置一样的，这样remote_index.js会把对应的依赖(vue)独立打包
                vue: {
                    // 设置这个后，vue需要动态导入，也可以把整个app都异步导入，参考bootstrap.js
                    // index.js入口文件： import('./bootstrap')
                    // bootstrap.js里是入口文件的内容：如静态导入vue并初始化等
                    // 现在整个程序都是异步导入了，远程组件的导入无需使用动态导入，直接静态导入即可
                    // 例如：remoteTopBar = ()=>import('remote-app/MyTopBar') 
                    // 改成 import remoteTopBar from 'remote-app/MyTopBar'
                    singleton: true, // https://webpack.docschina.org/plugins/module-federation-plugin#singleton
                    // eager: true
                },
                lodash: {
                    singleton: true,
                }
            }
        })
    ],
    optimization: {
        splitChunks:{
            chunks: 'all',

            cacheGroups: {
                lodash: {
                    test: /[\\/]node_modules[\\/]lodash[\\/]/,  // 只包括lodash
                    name: 'lodash', // [name]的取值
                    filename: 'scripts/[name]-chunk.js'
                },
                vue: {
                    test: /[\\/]node_modules[\\/]vue[\\/]/,
                    name: 'vue', // [name]的取值
                    filename: 'scripts/[name]-chunk.js'
                },
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }

        ]
    },
    
}