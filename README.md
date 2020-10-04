<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 21:09:18
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 17:04:48
-->
# mycom-vue3

## mycom-vue3主页


[mycom-vue3](http://myim.online/mycom)


## 安装组件库

```
npm install mycom-vue3 --save

```

## 引入到vue3项目

```js
import { createApp } from 'vue'
import App from './App.vue'
import mc from 'mycom-vue3'//引入组件库
import 'mycom-vue3/lib/mycom-vue3.css';//引入CSS样式文件

createApp(App).use(mc).mount('#app')

```

## 使用样例


### 直接在页面中使用组件,如下定义一个轮播图

mc-tab表示轮播图

mc-tab-page表示轮播图单页

可以定义属性height和width来定义轮播图大小

通过v-model来绑定轮播图当前的页号


```html

<mc-tab v-model:value="test" height="200px" width="50%">
    <mc-tab-page>1</mc-tab-page>
    <mc-tab-page>2</mc-tab-page>
    <mc-tab-page>4</mc-tab-page>
</mc-tab>

```


## 1005版本更新


### 视觉效果风格统一



暂定视效为

无边框radius

灰border

border: 1px solid rgba(0, 0, 0, 0.2);

color: rgba(0, 0, 0, 0.8);


矩形,黑白主体




