# mycom-vue3 组件文档

## mycom-vue3 主页

[mycom-vue3](http://myim.online/mycom)

## 基本组件

### 标题

```html
<mc-title width="200px">这是一个大标题</mc-title>
<mc-title width="200px" size="small">这是一个标题</mc-title>
```

### 链接

```html
<mc-link width="200px">默认链接</mc-link>
<mc-link width="200px" type="red">默认链接</mc-link>
<mc-link width="200px" type="blue">默认链接</mc-link>
<mc-link width="200px" type="yellow">默认链接</mc-link>
```

### 分割线

```html
<mc-divider text="分割线"></mc-divider>
```

### 文字提示

```html
<mc-tip text="补充说明文字提示"><mc-tag>文字提示</mc-tag></mc-tip>
<mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
```

### 标签

```html
<mc-tag>标签</mc-tag>
<mc-tag type="red">标签二</mc-tag>
<mc-tag type="blue">标签三</mc-tag>
```

## 表单组件

### 输入框

```html
<mc-input v-model:value="inputch" placeholder="请输入密码"></mc-input>
```

### 按钮

```html
<mc-button size="small"> 按钮 </mc-button>
<mc-button size="small" type="red"> 按钮 </mc-button>
<mc-button size="small" type="blue"> 按钮 </mc-button>
<mc-button size="large"> 大按钮 </mc-button>
```

### 选择器

```js

selectlabel: [
        { label: "草莓sdasfsda", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
      ],
```

```html
<mc-select width="100px" v-model:value="selectch" :label="selectlabel">
</mc-select>
```

### 级联选择器

```js

selectlabel:[
              {
                label: '草莓'
                value: '1'
              },
              {
                label: '香蕉'
                value: [
                        {
                          label: '芝麻香蕉'
                          value: 2
                        },
                        ]
              },
            ]
```

```html
<mc-level-select v-model:value="selectch" :label="levelselectlabel">
</mc-level-select>
```

### 开关

```html
<mc-switch v-model:value="switchch"> 开关 </mc-switch>
```

### 单选按钮

```html
<mc-radio v-model:value="radioch" label="1"> 单选按钮 </mc-radio>
<mc-radio v-model:value="radioch" label="2"> 单选按钮 </mc-radio>
<mc-radio v-model:value="radioch" label="3"> 单选按钮 </mc-radio>
```

### 复选按钮

```html
<mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
<mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
<mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
```

### 数字选择器

```html
<mc-switch v-model:value="switchch"> 开关 </mc-switch>
```

### 日期选择器

```html
<mc-date date="2020-10-01" v-model:value="datech"> </mc-date>
```

### 滑动条

```html
<mc-slider v-model:value="sliderch"> </mc-slider>
<mc-slider :top="1" v-model:value="sliderch"> </mc-slider>
```

## 提示组件

### 滑动解锁

```html
<mc-unlock v-model:value="iflock" width="50%">
  <h4>滑动解锁按钮</h4>
</mc-unlock>
```

### 隐藏显示切换

```html
<mc-unlock2 width="50%">
  <h4>显示与隐藏按钮</h4>
</mc-unlock2>
```

### 提示框

```js
this.$alert({
  name: "hello",
  text: "hellohellohellohellohellohellohello",
});
```

### 模态对话框

```js
this.$modal_alert(
  { name: "模态对话框", text: this.count++ },
  () => {
    this.$top_alert("被接受");
  },
  () => {
    this.$top_alert("被拒绝");
  }
);
```

### 顶部提示框

```js
this.$top_alert(this.count++);
```

### 右部提示框

```js
this.$right_alert(this.count++);
```

### 右部提示页

```html
<mc-right-page @close="right_show=false" v-if="right_show">
  <mc-articl>
    10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
  </mc-articl>
  <mc-articl>
    尧勤政爱民，人民安居乐业，幸福地生活着
    有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
  </mc-articl>
</mc-right-page>
```

## 布局组件

### 段落

```html
<mc-articl>
  10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
</mc-articl>
<mc-articl>
  尧勤政爱民，人民安居乐业，幸福地生活着
  有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
</mc-articl>
```

### 头部菜单

```html
<mc-header :menu='[{name:"布局",path:"layout"},{name:"提示",path:"unlock"}]'>
  mycom-vue3
</mc-header>
```

### 居中框

```html
<mc-unlock2 width="50%">
  <mc-center> 登录框 </mc-center>
</mc-unlock2>
```

### 居中布局

```html
<mc-middle width="50%">
  居中
</mc-middle>
```

### 折叠面板

```html
<mc-collapse :text="{name:'折叠面板',text:'面板内容'}"> </mc-collapse>
```

### 卡片

```html
<mc-articl>
  10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
</mc-articl>
<mc-articl>
  尧勤政爱民，人民安居乐业，幸福地生活着
  有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
</mc-articl>
```

## 实用组件

### 切换轮播图

```html
<mc-tab v-model:value="test" height="200px" width="50%">
  <mc-tab-page>1</mc-tab-page>
  <mc-tab-page>2</mc-tab-page>
  <mc-tab-page>4</mc-tab-page>
</mc-tab>
```

### 百分比显示按钮

```html
<mc-percent-button text="加载中" process="0.5"> </mc-percent-button>

<mc-percent-button text="加载中.." :process="loading"></mc-percent-button>

<mc-percent-button text="加载中.." :process="ctrlloading"></mc-percent-button>

<mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
```

### 百分比显示饼图

```html
<mc-percent-pie text="加载中" :process="0.7"> </mc-percent-pie>
<mc-percent-pie text="加载中.." :process="loading"> </mc-percent-pie>
<mc-percent-pie text="加载中.." :process="ctrlloading"></mc-percent-pie>
```

### 百分比显示环图

```html
<mc-percent-ring text="加载中" :process="0.7"> </mc-percent-ring>
<mc-percent-ring text="加载中.." :process="loading"> </mc-percent-ring>

<mc-percent-ring text="加载中.." :process="ctrlloading"> </mc-percent-ring>
<mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
```

### 下拉刷新

```html
<mc-dropdown @refresh="refreshdemo()"></mc-dropdown>
```
