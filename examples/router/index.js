/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 21:59:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 21:05:11
 */
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/HelloWorld.vue'
import routes from './routes_config'

const router = createRouter({
  history: createWebHistory(),
  routes:routes.list
})

export default router
