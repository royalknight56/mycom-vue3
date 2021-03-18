
<template>
    
    <mc-page>
        <mc-title :content="'标题'">标题</mc-title>
    
        <mc-articl
          >标题的格式<br />
        可以设置size 为 small,middle<br />
        可以设置hash值<br />
        

         

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-title >这是一个大标题</mc-title>
        <mc-title size="middle" >这是一个中标题</mc-title>
        <mc-title size="small" >这是一个标题</mc-title>`}}
              </code></pre>
        </mc-articl>
        
        <mc-title >这是一个大标题</mc-title>
        <mc-title size="middle" >这是一个中标题</mc-title>
        <mc-title size="small" >这是一个标题</mc-title>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.title"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'链接'">链接</mc-title>
    
        <mc-articl
          >链接的格式<br />
        可以设置type为对应的颜色<br />
        可以设置href为对应的链接<br />
        示例

         

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-link width="200px">默认链接</mc-link>
        <mc-link width="200px" href='https://github.com/royalknight56/mycom-vue3'>mycom-vue3</mc-link>
        <mc-link width="200px" type="red">默认链接</mc-link>
        <mc-link width="200px" type="blue">默认链接</mc-link>
        <mc-link width="200px" type="yellow">默认链接</mc-link>`}}
              </code></pre>
        </mc-articl>
        
        <mc-link width="200px">默认链接</mc-link>
        <mc-link width="200px" href='https://github.com/royalknight56/mycom-vue3'>mycom-vue3</mc-link>
        <mc-link width="200px" type="red">默认链接</mc-link>
        <mc-link width="200px" type="blue">默认链接</mc-link>
        <mc-link width="200px" type="yellow">默认链接</mc-link>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.link"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'分割线'">分割线</mc-title>
    
        <mc-articl
          >显示一个分割线<br />
        可以在分割线中显示文字<br />
        设置content-position可以选择分割线中显示文字的位置<br />
        取值又 left,right
        <br />
        示例

         

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-divider></mc-divider>
        <mc-divider>分割线</mc-divider>
        <mc-divider content-position='left'>分割线</mc-divider>
        <mc-divider content-position='right'>分割线</mc-divider>`}}
              </code></pre>
        </mc-articl>
        
        <mc-divider></mc-divider>
        <mc-divider>分割线</mc-divider>
        <mc-divider content-position='left'>分割线</mc-divider>
        <mc-divider content-position='right'>分割线</mc-divider>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.divider"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'文字提示'">文字提示</mc-title>
    
        <mc-articl
          >使用mc-tip组件来包裹需要进行提示的组件<br />
        设置text来指示需要提示的内容<br />
        示例

         

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-tip text="补充说明文字提示">
        <mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
      </mc-tip>
      <mc-tip text="补充说明文字提示"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>`}}
              </code></pre>
        </mc-articl>
        
        <mc-tip text="补充说明文字提示">
        <mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
      </mc-tip>
      <mc-tip text="补充说明文字提示"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
      <mc-tip text="补充说明"><mc-tag>文字提示</mc-tag></mc-tip>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.tip"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'标签'">标签</mc-title>
    
        <mc-articl
          >显示一个标签<br />
        设置text来指示标签的内容<br />
        设置type来指示标签的颜色<br />
        示例

         

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-tag>标签</mc-tag>
        <mc-tag type="red">标签二</mc-tag>
        <mc-tag type="blue">标签三</mc-tag>
        <mc-tag type="black">标签四</mc-tag>`}}
              </code></pre>
        </mc-articl>
        
        <mc-tag>标签</mc-tag>
        <mc-tag type="red">标签二</mc-tag>
        <mc-tag type="blue">标签三</mc-tag>
        <mc-tag type="black">标签四</mc-tag>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.tag"
        >
        </mc-table>
    </mc-page>
        
  </template>

  <script setup>

  
  </script>

  
  
  <script>
  import { reactive,ref } from 'vue';
  export default {
    name: "basicNew",
    data() {
      return {
        checkch: [],
        current_page: "/basicNew",
        table: 
          {"title":[["hash","标题哈希值","String","-","-"],["size","标题大小","String","small/middle/large","large"]],"link":[["type","颜色","String","red/blue/yellow","-"],["href","指向的链接","String","[link]","-"]],"divider":[["contentPosition"," 分割线文字位置","String","left/right/middle","middle"]],"tip":[],"tag":[]}
        ,
      };
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  
    