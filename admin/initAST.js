/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-09 21:39:07
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-09 21:42:47
 */
var fs = require("fs");
module.exports = function () {
    var data = fs.readFileSync('./input.json');
    var str = data.toString();
    var ast = JSON.parse(str);
    return ast
}