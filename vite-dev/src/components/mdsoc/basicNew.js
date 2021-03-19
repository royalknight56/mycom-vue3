/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-17 21:54:04
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-19 12:19:27
 */
module.exports = [
    {
        title: "标题",
        name: "title",
        descripttion: `标题的格式<br />
        可以设置size 为 small,middle<br />
        可以设置hash值<br />
        `,
        usage: `
        <mc-title >这是一个大标题</mc-title>
        <mc-title size="middle" >这是一个中标题</mc-title>
        <mc-title size="small" >这是一个标题</mc-title>`,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "链接",
        name: "link",
        descripttion: `链接的格式<br />
        可以设置type为对应的颜色<br />
        可以设置href为对应的链接<br />
        示例`,
        usage: `
        <mc-link width="200px">默认链接</mc-link>
        <mc-link width="200px" href='https://github.com/royalknight56/mycom-vue3'>mycom-vue3</mc-link>
        <mc-link width="200px" type="red">默认链接</mc-link>
        <mc-link width="200px" type="blue">默认链接</mc-link>
        <mc-link width="200px" type="yellow">默认链接</mc-link>`,
        table: [
            ['type', '颜色', 'String', 'red/blue/yellow', '-'],
            ['href', '指向的链接', 'String', '[link]', '-'],
        ],
    },
    {
        title: "分割线",
        name: "divider",
        descripttion: `显示一个分割线<br />
        可以在分割线中显示文字<br />
        设置content-position可以选择分割线中显示文字的位置<br />
        取值又 left,right
        <br />
        示例`,
        usage: `
        <mc-divider></mc-divider>
        <mc-divider>分割线</mc-divider>
        <mc-divider content-position='left'>分割线</mc-divider>
        <mc-divider content-position='right'>分割线</mc-divider>`,
        table: [
            ['contentPosition', ' 分割线文字位置', 'String', 'left/right/middle', 'middle'],

        ],
    },
    {
        title: "文字提示",
        name: "tip",
        descripttion: `使用mc-tip组件来包裹需要进行提示的组件<br />
        设置text来指示需要提示的内容<br />
        示例`,
        usage: `
        <mc-tip text="补充说明文字提示">
        <mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
      </mc-tip>
      <mc-tip text="补充说明文字提示"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip><mc-tag>文字提示</mc-tag></mc-tip>`,
        table: [
            ['text', '文字提示的内容', 'String', 'String', '"提示"']
        ],
    },
    {
        title: "标签",
        name: "tag",
        descripttion: `显示一个标签<br />
        设置text来指示标签的内容<br />
        设置type来指示标签的颜色<br />
        示例`,
        usage: `
        <mc-tag>标签</mc-tag>
        <mc-tag type="red">标签二</mc-tag>
        <mc-tag type="blue">标签三</mc-tag>
        <mc-tag type="black">标签四</mc-tag>`,
        table: [
            ['type', '颜色', 'String', 'String', '"white"']
        ],
    },
]
