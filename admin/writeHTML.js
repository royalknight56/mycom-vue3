/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-09 21:39:34
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-09 21:42:38
 */
var fs = require("fs");
module.exports = function (data) {
    fs.writeFileSync('./output.html', data)
    console.log("转换完毕");
}