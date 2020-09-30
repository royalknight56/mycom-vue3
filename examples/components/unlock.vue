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
        <mc-text>滑动解锁</mc-text>

        <mc-articl
          >从左到右拖动滑块可以显示包裹的内容<br />
          可以设置height值<br />
          绑定值可以获取是否解锁成功<br />
          示例

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-unlock v-model="iflock" width="50%">
              <h4>滑动解锁按钮</h4>
            </mc-unlock>
            `
          }}
          </code></pre>
        </mc-articl>

        <mc-middle>
          <mc-unlock v-model="iflock" width="50%">
            <h4>滑动解锁按钮</h4>
          </mc-unlock>
        </mc-middle>
      </mc-page>

      <mc-page>
        <mc-text>隐藏与显示的切换</mc-text>

        <mc-articl
          >点击按钮选择包裹内容的显示与否<br />
          可以设置height值与widght值<br />
          示例

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-unlock2 width="50%">
              <h4>显示与隐藏按钮</h4>
            </mc-unlock2>
            `
          }}
          </code></pre>
        </mc-articl>

        <mc-middle>
          <mc-unlock2 width="50%">
            <h4>显示与隐藏按钮</h4>
          </mc-unlock2>
        </mc-middle>
      </mc-page>

      <mc-page>
        <mc-text>提示框</mc-text>
        <mc-articl>
          出现一个提示框<br />
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
        <mc-button size="small" @click="alertDemo()"> 按钮 </mc-button>
      </mc-page>
    </div>
  </div>
</template>

<script>
// import vue from 'vue'
import mixin from './mixin'

export default {
  name: "unlock",
  props:['level1_menu'],
  mixins:[mixin],
  data() {
    return {
      current_page:'/unlock',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './exmCss.css';
</style>
