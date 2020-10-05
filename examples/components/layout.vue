<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 23:19:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-05 15:44:29
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
        <mc-text>段落</mc-text>
        <mc-articl>
          显示一个段落的布局<br />
          用于文章<br />
          <br />
          示例
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
        <mc-articl>
          10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
        </mc-articl>
        <mc-articl>
          尧勤政爱民，人民安居乐业，幸福地生活着
          有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
        </mc-articl>
            `
          }}
          </code></pre>
        </mc-articl>

        <mc-articl>
          10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
        </mc-articl>
        <mc-articl>
          尧勤政爱民，人民安居乐业，幸福地生活着
          有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
        </mc-articl>
      </mc-page>

      <mc-page>
        <mc-text>头部菜单</mc-text>
        <mc-articl>
          显示一个头部菜单<br />
          用于导航<br />
          这个菜单会响应用户的mousewheel事件<br />
          通过绑定menu来指示导航内容<br />
          menu是一个数组<br />
          每个数组项为一个对象,代表一个导航,<br />
          对象为{name,path}<br />
          name代表显示在导航中的内容<br />
          path为用户点击后要跳转的hash<br />
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-header :menu='[{name:"布局",path:"layout"},{name:"提示",path:"unlock"}]'> mycom-vue3 </mc-header>

            `
          }}
          </code></pre>
        </mc-articl>
        <mc-unlock2 width="50%">
          <mc-header :menu='[{name:"布局",path:"layout"},{name:"提示",path:"unlock"}]'> mycom-vue3 </mc-header>
        </mc-unlock2>
      </mc-page>
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

      <mc-page>
        <mc-text>居中布局</mc-text>
        <mc-articl>
          使包裹的组件居中<br />
          <br />
          示例
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-middle width="50%">
            居中
          </mc-middle>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-middle width="50%"> 居中 </mc-middle>
      </mc-page>

      <mc-page>
        <mc-text>折叠面板</mc-text>
        <mc-articl>
          显示一个折叠面板<br />
          用户点击折叠面板标题<br />
          会切换面板的隐藏与显示<br />
          绑定text值来设置面板内容<br />
          text为一个对象{name,text}<br />
          name为标签<br />
          text为内容<br />
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
        <mc-collapse :text="{name:'折叠面板',text:'面板内容'}">
        </mc-collapse>
        <mc-collapse width='400px' :text="{name:'折叠面板',text:'面板内容'}">
        </mc-collapse>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-collapse :text="{name:'折叠面板',text:'面板内容'}">
        </mc-collapse>
        <mc-collapse width='400px' :text="{name:'折叠面板',text:'面板内容'}">
        </mc-collapse>

      </mc-page>

      <mc-page>
        <mc-text>卡片</mc-text>
        <mc-articl>
          显示一个卡片<br />
          用于介绍<br />
          卡片中可以包裹组件

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
        <mc-articl>
          10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
        </mc-articl>
        <mc-articl>
          尧勤政爱民，人民安居乐业，幸福地生活着
          有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
        </mc-articl>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-card>
          <mc-articl>
            10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
          </mc-articl>
          <mc-articl>
            尧勤政爱民，人民安居乐业，幸福地生活着
            有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
          </mc-articl>
        </mc-card>
      </mc-page>
    </div>
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "layout",
  props: ["level1_menu"],
  mixins: [mixin],
  data() {
    return {
      current_page: "/layout",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./exmCss.css";
</style>
