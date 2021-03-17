/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:26:45
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-17 13:05:06
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
export let mc = {
  install
}
// export default {
//   install,
//   ...[components],
//   ...jsapi
  
// }

// export  ...[components]
// export jsapi
  
