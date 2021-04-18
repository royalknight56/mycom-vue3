/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-17 21:55:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-04-18 10:06:50
 */
module.exports = [
    {
        title: false,
        extend_js: `
        import {alert,top_alert,right_alert,modal_alert} from '../../../packages/index'
        let count = 0;
        `
    },

    {
        title: "段落",
        name: "articl",
        descripttion: `显示一个段落的布局<br />
        用于文章<br />
        `,
        usage: `
        <mc-articl>
      10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
    </mc-articl>
    <mc-articl>
      尧勤政爱民，人民安居乐业，幸福地生活着
      有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
    </mc-articl>`,
        // table: [
        //     ["v-model:value", "绑定的变量", "var", "-", "-"],
        //     ["size", "标题大小", "String", "small/middle/large", "large"],
        // ],
        // extend_js: `let iflock = ref(false);`
    },
    {
        title: "头部菜单",
        name: "header",
        descripttion: `显示一个头部菜单<br />
        用于导航<br />
        这个菜单会响应用户的mousewheel事件<br />
        通过绑定menu来指示导航内容<br />
        menu是一个数组<br />
        每个数组项为一个对象,代表一个导航,<br />
        对象为{name,path}<br />
        name代表显示在导航中的内容<br />
        path为用户点击后要跳转的hash<br />
        `,
        usage: `
        <mc-header
        :menu="[
          { name: '布局', path: 'layout' },
          { name: '提示', path: 'unlock' },
        ]"
      >
        mycom-vue3
      </mc-header>`,
        table: [
            ["menu", "导航菜单", "Array", "[{name:'',path:''}]", "-"]
        ],
    },
    {
        title: "居中框",
        name: "center",
        descripttion: `居中框显示一个一直在居中的框体<br />
        用于登录框 <br />
        `,
        usage: `
        <mc-unlock2 width="50%">
      <mc-center width="50%" height="50%"> 登录框 </mc-center>
    </mc-unlock2>`,
    },

    {
        title: "居中布局",
        name: "middle",
        descripttion: `使包裹的组件居中<br />`,
        usage: `
        <mc-middle width="50%"> 居中 </mc-middle>`,
    },
    {
        title: "折叠面板",
        name: "collapse",
        descripttion: `显示一个折叠面板<br />
        用户点击折叠面板标题<br />
        会切换面板的隐藏与显示<br />
        绑定text值来设置面板内容<br />
        text为一个对象{name,text}<br />
        name为标签<br />
        text为内容<br />`,
        usage: `
        <mc-collapse :title="'这是折叠面板'"> 
        这是折叠面板的内容
      </mc-collapse>
      <mc-collapse  width='400px' height='300px' :title="'这是折叠面板'"> 
        这是折叠面板的内容
      </mc-collapse>`,
    },

    {
        title: "卡片",
        name: "card",
        descripttion: `显示一个卡片<br />
        用于介绍<br />
        卡片中可以包裹组件`,
        usage: `
        <mc-card>
        <mc-articl>
          10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
        </mc-articl>
        </mc-card>`,
    },
]

