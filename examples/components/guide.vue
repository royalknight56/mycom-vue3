<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-01-15 14:52:42
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 22:04:38
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 22:12:33
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-14 22:18:47
-->
<template>
  <mc-page>
    <mc-title content='使用方法'></mc-title>
    <mc-title size="middle" content='安装组件库'></mc-title>
    <mc-articl>
      npm install mycom-vue3 --save<br />
    </mc-articl>
    <mc-title size="middle" content='引入到vue3项目'></mc-title>
    <mc-articl>
      <pre v-highlightjs class="javaScript hljs"><code class="javaScript">
          {{
            `
        import mc from 'mycom-vue3'//引入组件库 
        import 'mycom-vue3/lib/mycom-vue3.css';//引入CSS样式文件 
        createApp(App).use(mc).mount('#app')
            `
          }}
          </code></pre>
    </mc-articl>
  </mc-page>
  <mc-page>
    <mc-title content='GitHub'></mc-title>

    <mc-articl>
      <mc-link href="https://github.com/royalknight56/mycom-vue3">https://github.com/royalknight56/mycom-vue3</mc-link>
    </mc-articl>
  </mc-page>

  <mc-page>
    <mc-title content='更新信息'></mc-title>

    <mc-articl
      >最新版本:npm 0.1.129<br />
      更新了主页
    </mc-articl>
  </mc-page>

</template>

<script>
export default {
  name: "guide",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "./exmCss.css"; */
</style>
