/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:21:32
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-29 23:20:43
 */
const path = require('path')


module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.js',
            // filename:'mycom-vue3.umd.min.js',
            filename: 'index.html',
        }
    },
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