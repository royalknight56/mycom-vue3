# mycom-vue3 组件文档

## mycom-vue3 主页

[mycom-vue3](http://myim.online/mycom)

## 基本组件

### 标题


```html
<mc-title width="200px">这是一个大标题</mc-title>
<mc-title width="200px" size="small">这是一个标题</mc-title>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233106853.gif#pic_center)

### 链接

```html
<mc-link width="200px">默认链接</mc-link>
<mc-link width="200px" type="red">默认链接</mc-link>
<mc-link width="200px" type="blue">默认链接</mc-link>
<mc-link width="200px" type="yellow">默认链接</mc-link>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233137850.gif#pic_center)


### 分割线

```html
<mc-divider text="分割线"></mc-divider>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233205800.gif#pic_center)

### 文字提示

```html
<mc-tip text="补充说明文字提示"><mc-tag>文字提示</mc-tag></mc-tip>
<mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233233980.gif#pic_center)

### 标签

```html
<mc-tag>标签</mc-tag>
<mc-tag type="red">标签二</mc-tag>
<mc-tag type="blue">标签三</mc-tag>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233258633.gif#pic_center)



## 表单组件

### 输入框

```html
<mc-input v-model:value="inputch" placeholder="请输入密码"></mc-input>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233339794.gif#pic_center)


### 按钮

```html
<mc-button size="small"> 按钮 </mc-button>
<mc-button size="small" type="red"> 按钮 </mc-button>
<mc-button size="small" type="blue"> 按钮 </mc-button>
<mc-button size="large"> 大按钮 </mc-button>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233451623.gif#pic_center)


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

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233522909.gif#pic_center)


### 开关

```html
<mc-switch v-model:value="switchch"> 开关 </mc-switch>
```


![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233546602.gif#pic_center)

### 单选按钮

```html
<mc-radio v-model:value="radioch" label="1"> 单选按钮 </mc-radio>
<mc-radio v-model:value="radioch" label="2"> 单选按钮 </mc-radio>
<mc-radio v-model:value="radioch" label="3"> 单选按钮 </mc-radio>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233613826.gif#pic_center)


### 复选按钮

```html
<mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
<mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
<mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233653298.gif#pic_center)


### 数字选择器

```html
<mc-switch v-model:value="switchch"> 开关 </mc-switch>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233721418.gif#pic_center)


### 日期选择器

```html
<mc-date date="2020-10-01" v-model:value="datech"> </mc-date>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233851117.gif#pic_center)


### 滑动条

```html
<mc-slider v-model:value="sliderch"> </mc-slider>
<mc-slider :top="1" v-model:value="sliderch"> </mc-slider>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004233942752.gif#pic_center)


## 提示组件

### 滑动解锁

```html
<mc-unlock v-model:value="iflock" width="50%">
  <h4>滑动解锁按钮</h4>
</mc-unlock>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234030445.gif#pic_center)


### 隐藏显示切换

```html
<mc-unlock2 width="50%">
  <h4>显示与隐藏按钮</h4>
</mc-unlock2>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234057351.gif#pic_center)


### 提示框

```js
this.$alert({
  name: "hello",
  text: "hellohellohellohellohellohellohello",
});
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234131743.gif#pic_center)


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
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234205103.gif#pic_center)


### 顶部提示框

```js
this.$top_alert(this.count++);
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234234366.gif#pic_center)


### 右部提示框

```js
this.$right_alert(this.count++);
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234313625.gif#pic_center)


### 右部提示页

```html
<mc-right-page @close="right_show=false" v-if="right_show">
  <mc-articl>
    思路就是将scrollArea设定为垂直布局，然后加入按钮和widget，当鼠标点击按钮后，隐藏widget，利用垂直布局，做到自然伸缩，然后为什么要使用scrollArea做容器，因为scrollArea可以实现当容器空间不足，出现进度条进行列表滑动，下面一步一步来实现。
  </mc-articl>
</mc-right-page>
```


## 布局组件

### 段落

```html
<mc-articl>
  思路就是将scrollArea设定为垂直布局，然后加入按钮和widget，当鼠标点击按钮后，隐藏widget，利用垂直布局，做到自然伸缩，然后为什么要使用scrollArea做容器，因为scrollArea可以实现当容器空间不足，出现进度条进行列表滑动，下面一步一步来实现。
</mc-articl>
```




### 头部菜单

```html
<mc-header :menu='[{name:"布局",path:"layout"},{name:"提示",path:"unlock"}]'>
  mycom-vue3
</mc-header>
```


![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234504385.gif#pic_center)

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

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020100423454388.gif#pic_center)

### 卡片

```html
<mc-articl>
  思路就是将scrollArea设定为垂直布局，然后加入按钮和widget，当鼠标点击按钮后，隐藏widget，利用垂直布局，做到自然伸缩，然后为什么要使用scrollArea做容器，因为scrollArea可以实现当容器空间不足，出现进度条进行列表滑动，下面一步一步来实现。
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

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234609662.gif#pic_center)


### 百分比显示按钮

```html
<mc-percent-button text="加载中" process="0.5"> </mc-percent-button>

<mc-percent-button text="加载中.." :process="loading"></mc-percent-button>

<mc-percent-button text="加载中.." :process="ctrlloading"></mc-percent-button>

<mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234638892.gif#pic_center)


### 百分比显示饼图

```html
<mc-percent-pie text="加载中" :process="0.7"> </mc-percent-pie>
<mc-percent-pie text="加载中.." :process="loading"> </mc-percent-pie>
<mc-percent-pie text="加载中.." :process="ctrlloading"></mc-percent-pie>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234708914.gif#pic_center)


### 百分比显示环图

```html
<mc-percent-ring text="加载中" :process="0.7"> </mc-percent-ring>
<mc-percent-ring text="加载中.." :process="loading"> </mc-percent-ring>

<mc-percent-ring text="加载中.." :process="ctrlloading"> </mc-percent-ring>
<mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234732679.gif#pic_center)



### 下拉刷新

```html
<mc-dropdown @refresh="refreshdemo()"></mc-dropdown>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201004234808708.gif#pic_center)
