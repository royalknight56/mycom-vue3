<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 23:19:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-17 17:57:00
-->
<template>
  <mc-page>
    <mc-title content='段落'></mc-title>
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
    <mc-title content='头部菜单'></mc-title>
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
      <mc-header
        :menu="[
          { name: '布局', path: 'layout' },
          { name: '提示', path: 'unlock' },
        ]"
      >
        mycom-vue3
      </mc-header>
    </mc-unlock2>
  </mc-page>
  <mc-page>
    <mc-title content='居中框'></mc-title>
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
    <mc-title content='居中布局'></mc-title>
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
    <mc-title content='折叠面板'></mc-title>
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
        <mc-collapse :title="'这是折叠面板'"> 
          这是折叠面板的内容
        </mc-collapse>
        <mc-collapse  width='400px' height='400px' :title="'这是折叠面板'"> 
          这是折叠面板的内容
        </mc-collapse>
            `
          }}
          </code></pre>
    </mc-articl>
    <mc-collapse :title="'这是折叠面板'"> 
      中国疾控中心免疫规划首席专家王华庆：对食品、宠物、花粉等过敏，绝大多数不属于疫苗接种的禁忌症。但也需如实相告，由医生判断能否接种。如果正处于鼻炎的严重发作期，或者因其他过敏引起的反应比较严重，先缓一缓，等症状缓解后再接种疫苗。
    </mc-collapse>
    <mc-collapse width='400px' height='400px' :title="'这是折叠面板'"> 
      中国疾控中心免疫规划首席专家王华庆：对食品、宠物、花粉等过敏，绝大多数不属于疫苗接种的禁忌症。但也需如实相告，由医生判断能否接种。如果正处于鼻炎的严重发作期，或者因其他过敏引起的反应比较严重，先缓一缓，等症状缓解后再接种疫苗。
    </mc-collapse>
  </mc-page>

  <mc-page>
    <mc-title content='卡片'></mc-title>
    <mc-articl>
      显示一个卡片<br />
      用于介绍<br />
      卡片中可以包裹组件

      <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-card>
        <mc-articl>
          10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
        </mc-articl>
        </mc-card>
            `
          }}
          </code></pre>
    </mc-articl>
    <mc-card>
      <mc-articl>
        10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
      </mc-articl>

    </mc-card>
  </mc-page>
</template>

<script>
export default {
  name: "layout",

  data() {
    return {
      current_page: "/layout",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "./exmCss.css"; */
</style>
