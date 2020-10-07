/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 11:00:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-03 20:36:18
 */


import { createApp } from 'vue'
import alert_basic from './coms/alert/alert_basic.vue'
import top_alert from './coms/alert/top_alert.vue'
import right_alert from './coms/alert/right_alert.vue'
import modal_alert from './coms/alert/modaldialog.vue'

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
                if (Vuein.alert_app) {
                    //
                } else {
                    var div = document.createElement('div');
                    div.id = 'mcalert';
                    document.body.appendChild(div);
                    Vuein.alert_app=createApp(alert_basic).mount('#mcalert')
                }
                Vuein.alert_app.show(text)
            },
            $top_alert: function (text) {
                if (Vuein.top_alert_app) {
                    //
                } else {
                    var div = document.createElement('div');
                    div.id = 'mctopalert';
                    document.body.appendChild(div);
                    Vuein.top_alert_app=createApp(top_alert).mount('#mctopalert')
                }
                Vuein.top_alert_app.show(text)
            },
            $right_alert:function(text){
                if (Vuein.right_alert_app) {
                    //
                } else {
                    var div = document.createElement('div');
                    div.id = 'mcrightalert';
                    document.body.appendChild(div);
                    Vuein.right_alert_app=createApp(right_alert).mount('#mcrightalert')
                }
                Vuein.right_alert_app.show(text)
            },
            $modal_alert:function(text,res,rej){
                if (Vuein.modal_alert_app) {
                    //
                } else {
                    var div = document.createElement('div');
                    div.id = 'mcmodalalert';
                    document.body.appendChild(div);
                    Vuein.modal_alert_app=createApp(modal_alert).mount('#mcmodalalert')
                }
                Vuein.modal_alert_app.show(text,res,rej)
            }
        }
    })
}
