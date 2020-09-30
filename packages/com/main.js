/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:28:16
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 10:37:50
 */
import mc_com1 from '../com/coms/unlock.vue'
import mc_com2 from '../com/coms/unlock2.vue'
import mc_com3 from '../com/coms/tab.vue'
import mc_com4 from '../com/coms/tabpage.vue'
import mc_com5 from '../com/coms/middle.vue'
import mc_com6 from '../com/coms/underline.vue'
import mc_com7 from '../com/coms/moretext.vue'
import mc_com8 from '../com/coms/button.vue'
import mc_com9 from '../com/coms/page.vue'
import mc_com10 from '../com/coms/center.vue'
var components=[
    mc_com1,
    mc_com2,
    mc_com3,
    mc_com4,
    mc_com5,
    mc_com6,
    mc_com7,
    mc_com8,
    mc_com9,
    mc_com10
];

for(let component of components){
    component.install = function (Vue) {
        Vue.component(component.name, component);
      };
}

export default components