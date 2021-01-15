<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 22:12:33
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 22:06:33
-->
<template>
  <mc-page>
    <mc-title content='标题'></mc-title>

    <mc-articl
      >标题的格式<br />
      可以设置size 为 small,middle<br />
      可以设置width,height<br />

      <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-title width="200px" content='这是一个大标题'></mc-title>
            <mc-title width="200px" size="middle" content='这是一个中标题'></mc-title>
            <mc-title width="200px" size="small" content='这是一个标题'></mc-title>
          `
          }}
          </code></pre>
    </mc-articl>
    <mc-middle>
      <mc-title width="200px" content='这是一个大标题'></mc-title>
      <mc-title width="200px" size="middle" content='这是一个中标题'></mc-title>
      <mc-title width="200px" size="small" content='这是一个标题'></mc-title>
    </mc-middle>
  </mc-page>

  <mc-page>
    <mc-title content='链接'></mc-title>

    <mc-articl
      >链接的格式<br />
      可以设置type为对应的颜色<br />
      可以设置href为对应的链接<br />
      示例

      <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-link width="200px">默认链接</mc-link>
            <mc-link width="200px" href='https://github.com/royalknight56/mycom-vue3'>mycom-vue3</mc-link>
            <mc-link width="200px" type='red'>默认链接</mc-link>
            <mc-link width="200px" type='blue'>默认链接</mc-link>
            <mc-link width="200px" type='yellow'>默认链接</mc-link>
            `
          }}
          </code></pre>
    </mc-articl>
    <mc-middle>
      <mc-link width="200px">默认链接</mc-link>
      <mc-link width="200px" href='https://github.com/royalknight56/mycom-vue3'>mycom-vue3</mc-link>
      <mc-link width="200px" type="red">默认链接</mc-link>
      <mc-link width="200px" type="blue">默认链接</mc-link>
      <mc-link width="200px" type="yellow">默认链接</mc-link>
    </mc-middle>
  </mc-page>

  <mc-page>
    <mc-title content='分割线'></mc-title>
    <mc-articl>
      显示一个分割线<br />
      设置text可以在分割线中显示文字<br />
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
    <mc-divider></mc-divider>
    <mc-divider text="分割线"></mc-divider>
  </mc-page>

  <mc-page>
    <mc-title content='文字提示'></mc-title>
    <mc-articl>
      使用mc-tip组件来包裹需要进行提示的组件<br />
      设置text来指示需要提示的内容<br />

      <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-tip text="补充说明文字提示"><mc-tag>文字提示</mc-tag></mc-tip>
          <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
            `
          }}
          </code></pre>
    </mc-articl>
    <mc-middle>
      <mc-tip text="补充说明文字提示"
        ><mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
      </mc-tip>
      <mc-tip text="补充说明文字提示"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
    </mc-middle>
  </mc-page>

  <mc-page>
    <mc-title content='标签'></mc-title>
    <mc-articl>
      显示一个标签<br />
      设置text来指示标签的内容<br />
      设置type来指示标签的颜色<br />

      <br />

      <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-tag>标签</mc-tag>
          <mc-tag type="red">标签二</mc-tag>
          <mc-tag type="blue">标签三</mc-tag>
          `
          }}
          </code></pre>
    </mc-articl>
    <mc-tag>标签</mc-tag>
    <mc-tag type="red">标签二</mc-tag>
    <mc-tag type="blue">标签三</mc-tag>
    <mc-tag type="black">标签四</mc-tag>
  </mc-page>
</template>

<script>
export default {
  name: "basic",
  data() {
    return {
      checkch: [],
      current_page: "/basic",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "./exmCss.css"; */
</style>
