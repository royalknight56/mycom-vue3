/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-01-16 17:33:38
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-16 17:46:07
 */
import alert_basic from './com/coms/alert/alert_basic.vue'
import top_alert_vue from './com/coms/alert/top_alert_vue.vue'
import right_alert_vue from './com/coms/alert/right_alert_vue.vue'
import modal_alert_vue from './com/coms/alert/modaldialog_vue.vue'
import { reactive, createApp } from 'vue'

export let alert_app = reactive(null)
export let top_alert_app = reactive(null)
export let right_alert_app = reactive(null)
export let modal_alert_app = reactive(null)

export function alert(text) {
    if (alert_app) {
        //
    } else {
        var div = document.createElement('div');
        div.id = 'mcalert';
        document.body.appendChild(div);
        alert_app = createApp(alert_basic).mount('#mcalert')
    }
    alert_app.show(text)
}
export function top_alert(text, timeout) {
    if (top_alert_app) {
        //
    } else {
        var div = document.createElement('div');
        div.id = 'mctopalert';
        document.body.appendChild(div);
        top_alert_app = createApp(top_alert_vue).mount('#mctopalert')
    }
    top_alert_app.show(text, timeout)
}
export function right_alert(text, timeout) {
    if (right_alert_app) {
        //
    } else {
        var div = document.createElement('div');
        div.id = 'mcrightalert';
        document.body.appendChild(div);
        right_alert_app = createApp(right_alert_vue).mount('#mcrightalert')
    }
    right_alert_app.show(text, timeout)
}
export function modal_alert(text, res, rej) {
    if (modal_alert_app) {
        //
    } else {
        var div = document.createElement('div');
        div.id = 'mcmodalalert';
        document.body.appendChild(div);
        modal_alert_app = createApp(modal_alert_vue).mount('#mcmodalalert')
    }
    modal_alert_app.show(text, res, rej)
}

