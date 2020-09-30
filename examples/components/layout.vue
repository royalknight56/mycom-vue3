<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 23:19:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 23:31:46
-->
<template>
  <div class="main">
    <div class="left">
      <div class="level1">
        <div
          class="left_menu_item"
          v-for="(level, index) in level1_menu"
          :key="index"
          @click="changeTo(level)"
        >
          {{ level.name }}
          <div v-if="level.page == current_page" class="left_menu">
            <div
              class="left_menu_item"
              v-for="(item, index) in menu"
              :key="index"
              @click="tpTo(item.offset)"
            >
              {{ item.tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="right" class="right">
        

      <mc-page>
        <mc-text>居中框</mc-text>
        <mc-articl>
          居中框显示一个一直在居中的框体<br />
          用于登录框 <br />
          <br />
          示例
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-unlock2 width="50%">
            <mc-center> 登录框 </mc-center>
          </mc-unlock2>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-unlock2 width="50%">
          <mc-center width="50%" height="50%"> 登录框 </mc-center>
        </mc-unlock2>
      </mc-page>

    </div>
  </div>
</template>

<script>
import mixin from './mixin'

export default {
  name: "layout",
  props:['level1_menu'],
  mixins:[mixin],
  data() {
    return {
      current_page: "/layout",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './exmCss.css';

</style>
