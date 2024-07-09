const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    experiments: {
        topLevelAwait: true // 模块中可在一级作用域直接使用await import('xxx')
    },
    
    output: {
        clean: true,
        // publicPath: 'http://localhost:3001/' 
    },
    devServer: {
        port: '3001'
    },
    devtool:'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: 'remote_app', // 向外暴露容器名称
            filename: 'remote_index.js', // 连接本容器的入口文件,包含暴露出去组件的依赖信息
            exposes: {
                // {向外暴露的二级路径} ：{暴露的文件路径}
                './MyText': './src/com/myText.vue', // 暴露共享的组件
                './RemoteApp': './src/bootstrap.js', // 暴露共享的子应用
            },
            shared: {
                vue: {
                    singleton: true,
                },
                lodash: {
                    singleton: true,
                }
            }
        })
    ],
    optimization: {
        // 分割chunks，把node_module里的模块独立打包
        splitChunks:{
            // chunks: 'all', // 会干扰host端的remote_index.js加载远程组件

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