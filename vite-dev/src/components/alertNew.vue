
<template>
     
    <mc-page>
        <mc-title :content="'滑动解锁'">滑动解锁</mc-title>
    
        <mc-articl
          >从左到右拖动滑块成功之后可以显示包裹的内容<br />
        绑定值可以获取是否解锁成功<br />
        可用于验证等
        

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`let iflock = ref(false);`}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-unlock v-model:value="iflock" width="50%">
            <h4>滑动解锁按钮</h4>
          </mc-unlock>`}}
              </code></pre>
        </mc-articl>
        
        <mc-unlock v-model:value="iflock" width="50%">
            <h4>滑动解锁按钮</h4>
          </mc-unlock>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.unlock"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'隐藏与显示切换'">隐藏与显示切换</mc-title>
    
        <mc-articl
          >点击按钮选择包裹内容的显示与否<br />
        可以设置height值与widght值<br />
        

         

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-unlock2 width="50%">
            <h4>显示与隐藏按钮</h4>
          </mc-unlock2>`}}
              </code></pre>
        </mc-articl>
        
        <mc-unlock2 width="50%">
            <h4>显示与隐藏按钮</h4>
          </mc-unlock2>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.unlock2"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'提示框'">提示框</mc-title>
    
        <mc-articl
          >使用js代码,弹出一个提示框<br />
        调用可以从mycom-vue3引入,也可以从this调用,从this调用函数前需要添加$符号<br />
        参数为(option)<br />
        option是一个对象{name,text},<br />
        name为标题,text为内容<br />
        name代表标题,text代表内容<br />
        

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
        function alertDemo() {
            alert({
              name: "hello",
              text: "hellohellohellohellohellohellohello",
            });
          }
        `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-button size="small" @click="alertDemo()"> 按钮 </mc-button>`}}
              </code></pre>
        </mc-articl>
        
        <mc-button size="small" @click="alertDemo()"> 按钮 </mc-button>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.alert"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'模态对话框'">模态对话框</mc-title>
    
        <mc-articl
          >出现一个模态对话框<br />

        使用js代码,弹出一个提示框<br />
        调用可以从mycom-vue3引入,也可以从this调用,从this调用函数前需要添加$符号<br />

        参数为(option,resolve,reject)<br />
        option是一个对象{name,text},<br />
        name为标题,text为内容<br />

        resolve为用户点击确定后的回调<br />
        reject为用户点击拒绝后的回调<br />

        

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
        function alertDemomodal(){
            modal_alert(
                {name:'模态对话框',text:'是否接受'},
                ()=>{
                  top_alert('被接受')
                },
                ()=>{
                  top_alert('被拒绝')
                }
            );
        }
        `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-button size="small" @click="alertDemomodal()"> 按钮 </mc-button>`}}
              </code></pre>
        </mc-articl>
        
        <mc-button size="small" @click="alertDemomodal()"> 按钮 </mc-button>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.alertDemomodal"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'顶部提示框'">顶部提示框</mc-title>
    
        <mc-articl
          >出现一个顶部提示框<br />

        使用js代码,弹出一个提示框<br />
        调用可以从mycom-vue3引入,也可以从this调用,从this调用函数前需要添加$符号<br />

        参数为text:String,是提示的内容<br />
        time:Number,表示多少秒之后,提示框关闭,没有指定则为只能手动关闭<br />

        

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
        function alertDemo2(time){
            top_alert(count++,time)
        }
        `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-button size="small" @click="alertDemo2(2000)"> 2秒后消失 </mc-button>
        <mc-button size="small" @click="alertDemo2(4000)"> 4秒后消失 </mc-button>
        <mc-button size="small" @click="alertDemo2()"> 只能手动关闭 </mc-button>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-button size="small" @click="alertDemo2(2000)"> 2秒后消失 </mc-button>
        <mc-button size="small" @click="alertDemo2(4000)"> 4秒后消失 </mc-button>
        <mc-button size="small" @click="alertDemo2()"> 只能手动关闭 </mc-button>
        
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.alertDemo2"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'右部提示框'">右部提示框</mc-title>
    
        <mc-articl
          >
        出现一个右部提示框<br />

          使用js代码,弹出一个提示框<br />
          调用可以从mycom-vue3引入,也可以从this调用,从this调用函数前需要添加$符号<br />

          参数为text:String,是提示的内容<br />
          time:Number,表示多少秒之后,提示框关闭,没有指定则为只能手动关闭<br />

        

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
        function alertDemo3(time){
            right_alert(count++,time)
        }
        `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-button size="small" @click="alertDemo3(2000)"> 2秒后消失 </mc-button>
        <mc-button size="small" @click="alertDemo3(4000)"> 4秒后消失 </mc-button>
        <mc-button size="small" @click="alertDemo3()"> 只能手动关闭 </mc-button>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-button size="small" @click="alertDemo3(2000)"> 2秒后消失 </mc-button>
        <mc-button size="small" @click="alertDemo3(4000)"> 4秒后消失 </mc-button>
        <mc-button size="small" @click="alertDemo3()"> 只能手动关闭 </mc-button>
        
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.alertDemo3"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'右部提示页'">右部提示页</mc-title>
    
        <mc-articl
          >
        定义右部的提示页<br />
          
          通过切换v-if的值来使它显示<br />
          当用户点击了关闭按钮或者点击了空白处时<br />
          会触发@close,监听close事件,<br />
          可以设置v-if绑定的值为false来使提示页关闭<br />
        

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
        let right_show = ref(false)
        `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-button size="small" @click="right_show = true"> 按钮 </mc-button>
        <mc-right-page @close="right_show = false" v-if="right_show">
          <mc-articl>
            10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
          </mc-articl>
          <mc-articl>
            尧勤政爱民，人民安居乐业，幸福地生活着
            有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
          </mc-articl>
        </mc-right-page>

        `}}
              </code></pre>
        </mc-articl>
        
        <mc-button size="small" @click="right_show = true"> 按钮 </mc-button>
        <mc-right-page @close="right_show = false" v-if="right_show">
          <mc-articl>
            10月1日清晨，隆重的升国旗仪式在北京天安门广场举行，庆祝中华人民共和国成立71周年
          </mc-articl>
          <mc-articl>
            尧勤政爱民，人民安居乐业，幸福地生活着
            有一年夏天，天空中忽然出现了十个太阳，恣意妄为，有时还高悬在天上不落，把土地烤焦了，庄稼都枯干了，人们热得喘不过气来，倒在地上昏迷不醒。因为天气酷热的缘故，一些怪禽猛兽，也都从干涸的江湖和火焰似的森林里跑出来，在各地残害人民。
          </mc-articl>
        </mc-right-page>

        
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.rightpage"
        >
        </mc-table>
    </mc-page>
        
  </template>

  <script setup>

  
        import {alert,top_alert,right_alert,modal_alert} from '../../../packages/index'
        let count = 0;
        let iflock = ref(false);
        function alertDemo() {
            alert({
              name: "hello",
              text: "hellohellohellohellohellohellohello",
            });
          }
        
        function alertDemomodal(){
            modal_alert(
                {name:'模态对话框',text:'是否接受'},
                ()=>{
                  top_alert('被接受')
                },
                ()=>{
                  top_alert('被拒绝')
                }
            );
        }
        
        function alertDemo2(time){
            top_alert(count++,time)
        }
        
        function alertDemo3(time){
            right_alert(count++,time)
        }
        
        let right_show = ref(false)
        
  </script>

  
  
  <script>
  import { reactive,ref } from 'vue';
  export default {
    name: "alertNew",
    data() {
      return {
        checkch: [],
        current_page: "/alertNew",
        table: 
          {"unlock":[["hash","标题哈希值","String","-","-"],["size","标题大小","String","small/middle/large","large"]],"unlock2":[["hash","标题哈希值","String","-","-"],["size","标题大小","String","small/middle/large","large"]],"alert":[["hash","标题哈希值","String","-","-"],["size","标题大小","String","small/middle/large","large"]],"alertDemomodal":[["hash","标题哈希值","String","-","-"],["size","标题大小","String","small/middle/large","large"]],"alertDemo2":[["hash","标题哈希值","String","-","-"],["size","标题大小","String","small/middle/large","large"]],"alertDemo3":[["hash","标题哈希值","String","-","-"],["size","标题大小","String","small/middle/large","large"]],"rightpage":[["hash","标题哈希值","String","-","-"],["size","标题大小","String","small/middle/large","large"]]}
        ,
      };
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  
    