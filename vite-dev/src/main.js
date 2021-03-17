/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-17 11:19:15
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-17 13:40:49
 */
import { createApp } from 'vue'
import App from './App.vue'
import {mc} from '../../packages/index'
import router from './router'

// import Highlight from './utils/highlight'; // from 路径是highlight.js的路径，纯属自定义
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
// import '../../packages/index/lib/mycom-vue3.css';//引入CSS样式文件 

createApp(App).use(router).use(mc).use(VueHighlightJS).mount('#app')