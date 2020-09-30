/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:20:23
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 22:00:05
 */
import { createApp } from 'vue'
import App from './App.vue'
import mc from '../packages/index'
import router from './router'

// import Highlight from './utils/highlight'; // from 路径是highlight.js的路径，纯属自定义
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

createApp(App).use(router).use(mc).use(VueHighlightJS).mount('#app')
