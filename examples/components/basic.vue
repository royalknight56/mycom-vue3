<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 22:12:33
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-01 20:06:12
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
        <mc-text>链接</mc-text>

        <mc-articl
          >链接的格式<br />
          可以设置type<br />
          示例

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-link width="200px">默认链接</mc-link>
            <mc-link width="200px" type='red'>默认链接</mc-link>
            <mc-link width="200px" type='blue'>默认链接</mc-link>
            <mc-link width="200px" type='yellow'>默认链接</mc-link>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-middle>
          <mc-link width="200px">默认链接</mc-link>
          <mc-link width="200px" type="red">默认链接</mc-link>
          <mc-link width="200px" type="blue">默认链接</mc-link>
          <mc-link width="200px" type="yellow">默认链接</mc-link>
        </mc-middle>
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
        <mc-divider text="分割线"></mc-divider>
      </mc-page>

      <mc-page>
        <mc-text>文字提示</mc-text>
        <mc-articl>
          显示一个文字提示<br />
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
        <mc-middle>
          <mc-tip text="补充说明文字提示"><mc-tag>文字提示</mc-tag></mc-tip>
          <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
          <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
          <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
        </mc-middle>
      </mc-page>

      <mc-page>
        <mc-text>标签</mc-text>
        <mc-articl>
          显示一个标签<br />
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
        <mc-tag>标签</mc-tag>
        <mc-tag type="red">标签二</mc-tag>
        <mc-tag type="blue">标签三</mc-tag>
      </mc-page>
    </div>
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "basic",
  props: ["level1_menu"],
  mixins: [mixin],
  data() {
    return {
      current_page: "/basic",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./exmCss.css";
</style>
