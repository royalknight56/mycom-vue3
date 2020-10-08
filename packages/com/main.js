/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:28:16
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-08 19:36:50
 */

// import scss from '../com/coms/header.vue'
import global from '../com/coms/global.vue'

import mc_alert_com1 from '../com/coms/unlock/unlock.vue'
import mc_alert_com2 from '../com/coms/unlock/unlock2.vue'
import mc_alert_rightpage from '../com/coms/alert/right_page.vue'

import mc_useful_tab from '../com/coms/useful/tab.vue'
import mc_useful_tabpage from '../com/coms/useful/tabpage.vue'
import mc_useful_percentbutton from '../com/coms/useful/percentbutton.vue'
import mc_useful_percentpie from '../com/coms/useful/percentpie.vue'
import mc_useful_percentring from '../com/coms/useful/percentring.vue'
import mc_useful_dropdown from '../com/coms/useful/dropdown.vue'
import mc_useful_totop from '../com/coms/useful/totop.vue'

import mc_layout_middle from '../com/coms/layout/middle.vue'
import mc_layout_moretext from '../com/coms/layout/moretext.vue'
import mc_layout_page from '../com/coms/layout/page.vue'
import mc_layout_card from '../com/coms/layout/card.vue'
import mc_layout_collapse from '../com/coms/layout/collapse.vue'
import mc_layout_header from '../com/coms/layout/header.vue'

import mc_basic_underline from '../com/coms/basic/underline.vue'
import mc_basic_button from '../com/coms/basic/button.vue'
import mc_basic_center from '../com/coms/basic/center.vue'
import mc_basic_splitline from '../com/coms/basic/splitline.vue'
import mc_basic_link from '../com/coms/basic/link.vue'
import mc_basic_tag from '../com/coms/basic/tag.vue'
import mc_basic_tip from '../com/coms/basic/tip.vue'

import mc_form_input from '../com/coms/form/input.vue'
import mc_form_radio from '../com/coms/form/radio.vue'
import mc_form_checkbox from '../com/coms/form/Checkbox.vue'
import mc_form_select from '../com/coms/form/Select.vue'
import mc_form_switch from '../com/coms/form/switch.vue'
import mc_form_number from '../com/coms/form/number.vue'
import mc_form_slider from '../com/coms/form/slider.vue'
import mc_form_date from '../com/coms/form/date.vue'
import mc_form_rate from '../com/coms/form/rate.vue'
import mc_form_levelselect from '../com/coms/form/levelselect.vue'

import mc_data_table from '../com/coms/data/table.vue'
import mc_data_list from '../com/coms/data/list.vue'

var components=[
    global,
    
    //表单组件
    mc_form_input,
    mc_form_radio,
    mc_form_checkbox,
    mc_form_select,
    mc_form_switch,
    mc_form_number,
    mc_form_slider,
    mc_form_date,
    mc_form_levelselect,
    mc_form_rate,

    //基本组件
    mc_basic_link,
    mc_basic_tag,
    mc_basic_tip,
    mc_basic_center,
    mc_basic_splitline,
    mc_basic_button,
    mc_basic_underline,

    //布局组件
    mc_layout_card,
    mc_layout_collapse,
    mc_layout_middle,
    mc_layout_moretext,
    mc_layout_page,
    mc_layout_header,

    //提示组件
    mc_alert_rightpage,
    mc_alert_com1,
    mc_alert_com2,

    //实用组件
    mc_useful_percentbutton,
    mc_useful_percentpie,
    mc_useful_percentring,
    mc_useful_tab,
    mc_useful_tabpage,
    mc_useful_dropdown,
    mc_useful_totop,

    //数据组件
    mc_data_table,
    mc_data_list
];

for(let component of components){
    component.install = function (Vue) {
        Vue.component(component.name, component);
      };
}

export default components