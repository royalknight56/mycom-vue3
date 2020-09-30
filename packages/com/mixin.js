/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 11:00:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 21:07:50
 */
// import alert from './coms/center.vue'
// import vue from 'vue'
// import { defineComponent } from 'vue'
export function mixin(Vue) {
    Vue.mixin({
        date: function () {
            return {
                mc_alert: []
            }
        },
        methods: {
            $alert: function () {
                // console.log(window.Vue)
                // const MessageBoxConstructor = defineComponent(alert);
                // console.log(MessageBoxConstructor())
                // // var  instance = new MessageBoxConstructor({
                // //     el: document.createElement('div')
                // //   });
                // var node=document.createElement('div');
                // document.body.appendChild(instance.$el);
                // console.log(instance)
                // document.getElementById('app').appendChild(Vue.component(alert.name, alert)._container)
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