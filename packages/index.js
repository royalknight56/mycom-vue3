/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:26:45
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-02 18:05:31
 */
import components from './com/main'
import {mixin} from './com/mixin'
const install = function (Vue) {
  if (install.installed) return;
  mixin( Vue )
  components.map(component => Vue.component(component.name, component));
};
if (typeof window.Vue !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  ...[components]
}