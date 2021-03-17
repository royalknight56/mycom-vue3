/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-01-16 17:33:38
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-17 12:40:46
 */
import alert_basic from './com/coms/alert/alert_basic.vue'
import top_alert_vue from './com/coms/alert/top_alert_vue.vue'
import right_alert_vue from './com/coms/alert/right_alert_vue.vue'
import modal_alert_vue from './com/coms/alert/modaldialog_vue.vue'
import { reactive, createApp } from 'vue'

 let alert_app = reactive({value:null})
 let top_alert_app = reactive({value:null})
 let right_alert_app = reactive({value:null})
 let modal_alert_app = reactive({value:null})


function ifMontedAndAlert(app,com,id,...par){
    if (app.value) {
        //
    } else {
        var div = document.createElement('div');
        div.id = id;
        document.body.appendChild(div);
        app.value = createApp(com).mount('#'+id)
    }
    app.value.show(...par)
}


export function alert(text) {
    ifMontedAndAlert(alert_app,alert_basic,'mcalert',text)
}
export function top_alert(text, timeout) {
    ifMontedAndAlert(top_alert_app,top_alert_vue,'mctopalert',text, timeout)
}

export function right_alert(text, timeout) {
    ifMontedAndAlert(right_alert_app,right_alert_vue,'mcrightalert',text, timeout)
}
export function modal_alert(text, res, rej) {
    ifMontedAndAlert(modal_alert_app,modal_alert_vue,'mcmodalalert',text, res, rej)
}

