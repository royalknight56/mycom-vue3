<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 21:09:18
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-03 21:56:28
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

<mc-tab v-model="test" height="200px" width="50%">
    <mc-tab-page>1</mc-tab-page>
    <mc-tab-page>2</mc-tab-page>
    <mc-tab-page>4</mc-tab-page>
</mc-tab>

```



