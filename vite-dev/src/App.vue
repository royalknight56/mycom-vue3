<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 21:20:23
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-29 21:37:43
-->
<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html{
  overflow: hidden;
}
body{
    padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
