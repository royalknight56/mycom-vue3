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
        <mc-text>标题</mc-text>

        <mc-articl
          >标题的格式<br />
          可以设置size 为 small<br />
          示例

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
    <mc-text width="200px">这是一个大标题</mc-text>
    <mc-text width="200px" size="small">这是一个标题</mc-text>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-middle>
          <mc-text width="200px">这是一个大标题</mc-text>
          <mc-text width="200px" size="small">这是一个标题</mc-text>
        </mc-middle>
      </mc-page>

      <mc-page>
        <mc-text>按钮</mc-text>
        <mc-articl
          >标题的格式<br />
          可以设置size 为 small或large <br />
          可以设置type 为 red 或 blue<br />
          示例
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
      <mc-button size="small"> 按钮 </mc-button>
      <mc-button size="small" type="red"> 按钮 </mc-button>
      <mc-button size="small" type="blue"> 按钮 </mc-button>
      <mc-button size="large"> 大按钮 </mc-button>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-button size="small"> 按钮 </mc-button>
        <mc-button size="small" type="red"> 按钮 </mc-button>
        <mc-button size="small" type="blue"> 按钮 </mc-button>
        <mc-button size="large"> 大按钮 </mc-button>
      </mc-page>

      <mc-page>
        <mc-text>分割线</mc-text>
        <mc-articl>
          居中框显示一个分割线<br />
          <br />
          示例
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-divider text='分割线'></mc-divider>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-divider text='分割线'></mc-divider>
      </mc-page>

    </div>
  </div>
</template>

<script>
import mixin from './mixin'

export default {
  name: "basic",
  props:['level1_menu'],
  mixins:[mixin],
  data() {
    return {
      current_page: "/basic",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './exmCss.css';

</style>
