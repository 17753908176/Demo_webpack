/**
 * Created by 赵慧云 on 2018/6/4.
 */
const path = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');//自动生成html文件的插件
const  CleanWebpackPlugin = require('clean-webpack-plugin');//清楚之前打包的文件

module.exports = {
    entry: './src/js/entry.js', // 入口起点，可以指定多个入口起点
    output: { // 输出，只可指定一个输出配置
        filename: 'bundle.js', // 输出文件名

        path: path.resolve(__dirname, 'dist/js/'), // 输出文件所在的目录,没有的话自动生成
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]

    },
    devServer: {
        //contentBase: 'dist/' //webpack-dev-server 默认服务于根路径下index.html
    },
    plugins:[
        //在dist文件目录生成根目录下index.html的文件放在dist文件下
        //自动为template 添加文件和路径
        new HtmlWebpackPlugin({template:'./index.html'}),
        //每次生成的时候，清空该目录下的dist文件下的问价
        new CleanWebpackPlugin(['dist'])
    ]
};
//npm install css-loader style-loader --save-dev 加载css文件需要的插件
//npm install file-loader url-loader  --save-dev 加载图片的插件