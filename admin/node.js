/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-09 10:18:32
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-09 21:46:09
 */
var initAST= require("./initAST");
var stringifyAST= require("./stringfyAST");
var writeHTML= require("./writeHTML");

var data='';
data=initAST();

data=stringifyAST(data);

writeHTML(data);
