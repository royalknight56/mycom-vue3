/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 11:00:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-02 21:48:53
 */


import { createApp } from 'vue'
import alert_basic from './coms/alert/alert_basic.vue'
import top_alert from './coms/alert/top_alert.vue'

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
            // console.log(this.ifalertmonted)
            // if (this.ifalertmonted) {
            //     //
            // } else {
            //     console.log('mc-提示组件挂载')
            //     var div = document.createElement('div');
            //     div.id = 'mcalert';
            //     document.body.appendChild(div);
            //     this.alert_app=createApp(alert_basic).mount('#mcalert')
            //     console.log('mc-提示组件挂载完成')
            //     this.ifalertmonted=true;
            // }
        },
        // beforeUnmount:function(){
       
        // },
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
            }
        }
    })
}
// export default{
//     date:function(){
//         return{
//             mc_alert:[]
//         }
//     },
//     methods:{
//         $alert:function(){
//             console.log(this.$parent)
//             var myAfter = this.$root.extend({
//                 template:'<p>after</p>'
//               })

//             // this.$root.extend(alert)
//             new myAfter().$mount().$after('#app')
//             // console.log(this.$el.appendChild(alert))
//             console.log('alert')
//         }
//     }
// }