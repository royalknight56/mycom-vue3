/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 21:59:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 22:26:13
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../components/HelloWorld.vue'
import routes from './routes_config'

const router = createRouter({
  history: createWebHashHistory(),
  routes:routes.list
})

export default router
