/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 11:00:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-16 19:47:08
 */


// import { createApp } from 'vue'
// import alert_basic from './coms/alert/alert_basic.vue'
// import top_alert_vue from './coms/alert/top_alert_vue.vue'
// import right_alert_vue from './coms/alert/right_alert_vue.vue'
// import modal_alert_vue from './coms/alert/modaldialog_vue.vue'
import {
    // alert_app,
    // top_alert_app,
    // right_alert_app,
    // modal_alert_app,

    alert,
    top_alert,
    right_alert,
    modal_alert
} from '../jsApi'

export function mixin(Vuein) {
    Vuein.mixin({
        date: function () {
            return {
                mc_alert: [],
                ifalertmonted: false,
                alert_app: null
            }
        },
        mounted: function () {

        },

        methods: {
            $alert: function (text) {
                alert(text)
                // if (Vuein.alert_app) {
                //     //
                // } else {
                //     var div = document.createElement('div');
                //     div.id = 'mcalert';
                //     document.body.appendChild(div);
                //     Vuein.alert_app = createApp(alert_basic).mount('#mcalert')
                // }
                // Vuein.alert_app.show(text)
            },
            $top_alert: function (text, timeout) {
                top_alert(text, timeout);
                // if (Vuein.top_alert_app) {
                //     //
                // } else {
                //     var div = document.createElement('div');
                //     div.id = 'mctopalert';
                //     document.body.appendChild(div);
                //     Vuein.top_alert_app = createApp(top_alert_vue).mount('#mctopalert')
                // }
                // Vuein.top_alert_app.show(text, timeout)
            },
            $right_alert: function (text, timeout) {
                right_alert(text, timeout)
                // if (Vuein.right_alert_app) {
                //     //
                // } else {
                //     var div = document.createElement('div');
                //     div.id = 'mcrightalert';
                //     document.body.appendChild(div);
                //     Vuein.right_alert_app = createApp(right_alert_vue).mount('#mcrightalert')
                // }
                // Vuein.right_alert_app.show(text, timeout)
            },
            $modal_alert: function (text, res, rej) {
                modal_alert(text, res, rej)
                // if (Vuein.modal_alert_app) {
                //     //
                // } else {
                //     var div = document.createElement('div');
                //     div.id = 'mcmodalalert';
                //     document.body.appendChild(div);
                //     Vuein.modal_alert_app = createApp(modal_alert_vue).mount('#mcmodalalert')
                // }
                // Vuein.modal_alert_app.show(text, res, rej)
            }
        }
    })
}
