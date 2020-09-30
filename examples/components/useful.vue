<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 23:19:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 23:32:48
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
        <mc-text>切换轮播图</mc-text>
        <mc-middle>
          <mc-tab v-model="test" height="200px" width="50%">
            <mc-tab-page>1</mc-tab-page>
            <mc-tab-page>2</mc-tab-page>
            <mc-tab-page>4</mc-tab-page>
          </mc-tab>
        </mc-middle>
        <mc-articl
          >点击左右的按钮可以切换<br />
          可以设置height值与widght值<br />
          绑定值可以获取到当前的页号<br />
          示例
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-tab v-model="test" height="200px" width="50%">
              <mc-tab-page>1</mc-tab-page>
              <mc-tab-page>2</mc-tab-page>
              <mc-tab-page>4</mc-tab-page>
            </mc-tab>
            `
          }}
          </code></pre>
        </mc-articl>
      </mc-page>



    </div>
  </div>
</template>

<script>
import mixin from './mixin'

export default {
  name: "useful",
  props:['level1_menu'],
  mixins:[mixin],
  data() {
    return {
      current_page: "/useful",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './exmCss.css';

</style>
