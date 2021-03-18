/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:21:32
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-18 09:49:59
 */
const path = require('path')



module.exports = {
    // entry: 'examples/main.js',
    //         output:{
    //             publicPath:'./'
    //         },
    //         template: 'public/index.js',
    //         // filename:'mycom-vue3.umd.min.js',
    //         filename: 'index.html',
    // devServe:{
    //     publicPath:'/'
    // },
    publicPath: "",


    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loder')
    }
}