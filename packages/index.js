/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:26:45
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-16 17:49:51
 */
import components from './com/main'
export * from './jsApi'
import {mixin} from './com/mixin'
const install = function (Vue) {
  if (install.installed) return;
  mixin( Vue )
  components.map(component => Vue.component(component.name, component));
};
if (typeof window.Vue !== "undefined" && window.Vue) {
  install(window.Vue);
}
// console.log(jsApi)
export default {
  install,
  ...[components],
  
}
