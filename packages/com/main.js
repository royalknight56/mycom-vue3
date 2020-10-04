/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:28:16
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 10:57:03
 */
import mc_com1 from '../com/coms/unlock/unlock.vue'
import mc_com2 from '../com/coms/unlock/unlock2.vue'

import mc_right_page from '../com/coms/alert/right_page.vue'


import mc_com3 from '../com/coms/useful/tab.vue'
import mc_com4 from '../com/coms/useful/tabpage.vue'
import mc_useful_percentbutton from '../com/coms/useful/percentbutton.vue'
import mc_useful_percentpie from '../com/coms/useful/percentpie.vue'
import mc_useful_percentring from '../com/coms/useful/percentring.vue'
import mc_useful_dropdown from '../com/coms/useful/dropdown.vue'


import mc_com5 from '../com/coms/layout/middle.vue'
import mc_com7 from '../com/coms/layout/moretext.vue'
import mc_com9 from '../com/coms/layout/page.vue'
import mc_layout_card from '../com/coms/layout/card.vue'
import mc_layout_collapse from '../com/coms/layout/collapse.vue'
import mc_layout_header from '../com/coms/layout/header.vue'

import mc_com6 from '../com/coms/basic/underline.vue'
import mc_com8 from '../com/coms/basic/button.vue'
import mc_com10 from '../com/coms/basic/center.vue'
import mc_com11 from '../com/coms/basic/splitline.vue'
import mc_basic1 from '../com/coms/basic/link.vue'
import mc_basic_tag from '../com/coms/basic/tag.vue'
import mc_basic_tip from '../com/coms/basic/tip.vue'

import mc_com12 from '../com/coms/form/input.vue'
import mc_com13 from '../com/coms/form/radio.vue'
import mc_com14 from '../com/coms/form/Checkbox.vue'
import mc_com15 from '../com/coms/form/Select.vue'
import mc_com16 from '../com/coms/form/switch.vue'
import mc_com17 from '../com/coms/form/number.vue'
import mc_com18 from '../com/coms/form/slider.vue'
import mc_com19 from '../com/coms/form/date.vue'

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
    mc_com10,
    mc_com11,
    mc_com12,
    mc_com13,
    mc_com14,
    mc_com15,
    mc_com16,
    mc_com17,
    mc_com18,
    mc_com19,
    mc_basic1,
    mc_basic_tag,
    mc_basic_tip,
    mc_layout_card,
    mc_layout_collapse,
    mc_right_page,
    mc_useful_percentbutton,
    mc_useful_percentpie,
    mc_useful_percentring,
    mc_layout_header,
    mc_useful_dropdown
];

for(let component of components){
    component.install = function (Vue) {
        Vue.component(component.name, component);
      };
}

export default components