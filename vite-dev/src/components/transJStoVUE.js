/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-17 20:12:28
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-20 09:42:50
 */
var fs = require("fs");

function getOnePage_temp(item) {
    let extend_js =``;
    if(item.extend_js){
        extend_js =  `<pre v-highlightjs class="js hljs"><code class="js">
        {{\`${item.extend_js}\`}}
        </code></pre>`
    }
    let perpage =``;
    if(item.title){
        perpage = `
    <mc-page>
        <mc-title :content="'${item.title}'">${ item.title }</mc-title>
    
        <mc-articl
          >${item.descripttion }

         ${extend_js}

          <pre v-highlightjs class="html hljs"><code class="html">
              {{\`${item.usage}\`}}
              </code></pre>
        </mc-articl>
        ${item.usage}
        ${item.extend_vue?item.extend_vue:''}
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.${item.name}"
        >
        </mc-table>
    </mc-page>
        `
    }else{
        perpage = ` `
    }
    return perpage
}
function get_table(list){
    let map ={}
    for(let i=0;i<list.length;i++){
        map[list[i].name]= list[i].table
    }
    return JSON.stringify(map)
}
function get_vueSetup(list){
    let str =``
    for(let i=0;i<list.length;i++){
        if(list[i].extend_js){
            str+= list[i].extend_js
        }
    }
    return str
}
function getAllPage(list){
    let str ='';
    for(let i=0;i<list.length;i++){
        str+=getOnePage_temp(list[i]);
    }
    return str
}

function getVUEstr(name,pageslist) {

    let str = `
<template>
    ${getAllPage(pageslist)}
  </template>

  <script setup>

  ${get_vueSetup(pageslist)}
  </script>

  
  
  <script>
  import { reactive,ref } from 'vue';
  export default {
    name: "${name}",
    data() {
      return {
        checkch: [],
        current_page: "/${name}",
        table: 
          ${get_table(pageslist)}
        ,
      };
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  
    `
    return str
}
function writeTOFile(name,data) {
    fs.writeFileSync(`./${name}.vue`, data)
    console.log(`./${name}.vue转换完毕`);
}

let fsWait = false
fs.watch("./mdsoc/",(event,filename)=>{
    if (filename){

        if (fsWait) return;
        fsWait = setTimeout(() => {
            fsWait = false;
        }, 1000)
        let name = filename.split('.')[0]
        console.log(`${name}文件发生更新`)
        
        delete require.cache[require.resolve('./mdsoc/'+name)];

        writeTOFile(name,getVUEstr(name,require('./mdsoc/'+name)))
    }
})
