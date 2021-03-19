
<template>
    
    <mc-page>
        <mc-title :content="'输入框'">输入框</mc-title>
    
        <mc-articl
          >输入框<br />
        可以设置height值与widght值<br />
        使用v-model:value来绑定值<br />
        可以获取到当前输入的内容<br />
        placeholder指示提示的内容<br>
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
    let inputch = ref("")
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-input v-model:value="inputch" placeholder="请输入密码"></mc-input>
        <mc-input height='140px' v-model:value="inputch" placeholder="请输入密码"></mc-input>
        <mc-input width='140px' v-model:value="inputch" placeholder="请输入密码"></mc-input>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-input v-model:value="inputch" placeholder="请输入密码"></mc-input>
        <mc-input height='140px' v-model:value="inputch" placeholder="请输入密码"></mc-input>
        <mc-input width='140px' v-model:value="inputch" placeholder="请输入密码"></mc-input>
        
        
        {{inputch}}
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.input"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'按钮'">按钮</mc-title>
    
        <mc-articl
          >
        可以设置size 为 small或large <br />
        可以设置type 为 red 或 blue<br />
    

         

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-button size="large" type="blue"> 大按钮 </mc-button>
        <mc-button> 按钮 </mc-button>
        <mc-button size="small" type="red"> 按钮 </mc-button>
        <mc-button size="small" type="blue"> 按钮 </mc-button>
        <mc-button size="large"> 大按钮 </mc-button>`}}
              </code></pre>
        </mc-articl>
        
        <mc-button size="large" type="blue"> 大按钮 </mc-button>
        <mc-button> 按钮 </mc-button>
        <mc-button size="small" type="red"> 按钮 </mc-button>
        <mc-button size="small" type="blue"> 按钮 </mc-button>
        <mc-button size="large"> 大按钮 </mc-button>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.button"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'选择器'">选择器</mc-title>
    
        <mc-articl
          >
        一组复选按钮,使用v-model:value绑定值<br />
        label指示可选项 示例中传入的label值如下<br />
        其中label为提示,value为用户选择后传给v-model:value的值<br />
        用户选择的结果 会保存到v-model:value绑定的值中<br />
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let selectlabel = reactive([
        { label: "草莓sdasfsda", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
      ])
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
            <mc-select width="100px" v-model:value="selectch" :label="selectlabel"></mc-select>`}}
              </code></pre>
        </mc-articl>
        
            <mc-select width="100px" v-model:value="selectch" :label="selectlabel"></mc-select>
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.select"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'级联选择器'">级联选择器</mc-title>
    
        <mc-articl
          >
        1006新增<br>
          通过v-model:value绑定用户选择的值<br>
          通过label传入选项<br>
          传入格式为一个数组,数组中每个对象为{label,value}<br>
          label代表选择器中的指示值<br>
          value代表选择后代表的值,如果是一个数组,则代表二级菜单<br>
           可以设置type为all,这样用户点击非叶子节点时,会返回当前的value值<br>
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
        let selectch = ref("");
          let levelselectlabel = reactive( [
            {
              label: "草莓",
              value: [
                {
                  label: "奶油草莓",
                  value: [
                    {
                      label: "大奶油草莓",
                      value: "9",
                    },
                    { label: "小奶油草莓", value: "6" },
                  ],
                },
                { label: "小草莓", value: "2" },
              ],
            },
            {
              label: "香蕉",
              value: [
                { label: "芝麻香蕉", value: "3" },
                { label: "大香蕉", value: "4" },
              ],
            },
          ])
        `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>
        <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>
        <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>
        
        {{selectch}}
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.levelselect"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'开关'">开关</mc-title>
    
        <mc-articl
          >
        一只开关,使用v-model:value绑定值<br />
        用户选择的结果会保存到绑定的值中<br />
        不建议在switch中传入innerhtml
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let switchch = ref(false);
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-switch v-model:value="switchch"> </mc-switch>开关 
        <mc-switch v-model:value="switchch"> </mc-switch>开关 
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-switch v-model:value="switchch"> </mc-switch>开关 
        <mc-switch v-model:value="switchch"> </mc-switch>开关 
        
        
    {{switchch}}
    
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.switch"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'单选按钮'">单选按钮</mc-title>
    
        <mc-articl
          >
        一组单选按钮,使用v-model:value绑定值<br />
          v-model:value绑定同一个值时,他们将是同一组按钮<br />
          用户选择的结果的label会保存到绑定的值中
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let radioch = ref(1);
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-radio v-model:value="radioch" label="1"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="2"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="3"> 单选按钮 </mc-radio>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-radio v-model:value="radioch" label="1"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="2"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="3"> 单选按钮 </mc-radio>
        
        
    {{radioch}}
    
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.radio"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'复选框'">复选框</mc-title>
    
        <mc-articl
          >
        一组复选按钮,使用v-model:value绑定值<br />
          v-model:value绑定同一个值时,他们将是同一组按钮<br />
          用户选择的结果的label会作为一个数组保存到绑定的值中
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let checkch = reactive([]);
      let checkch2 = reactive([]);
      
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
        

        <mc-checkbox v-model:value="checkch2" label="a"> 选a </mc-checkbox>
        <mc-checkbox v-model:value="checkch2" label="b"> 选b </mc-checkbox>
        <mc-checkbox v-model:value="checkch2" label="c"> 选c </mc-checkbox>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
        

        <mc-checkbox v-model:value="checkch2" label="a"> 选a </mc-checkbox>
        <mc-checkbox v-model:value="checkch2" label="b"> 选b </mc-checkbox>
        <mc-checkbox v-model:value="checkch2" label="c"> 选c </mc-checkbox>
        
        
    {{ checkch }}
    {{ checkch2 }}
    
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.checkbox"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'数字选择器'">数字选择器</mc-title>
    
        <mc-articl
          >
        数字选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let numberch = ref(0);
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-number v-model:value="numberch" > </mc-number>
        <mc-number width='300px' v-model:value="numberch" > </mc-number>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-number v-model:value="numberch" > </mc-number>
        <mc-number width='300px' v-model:value="numberch" > </mc-number>
        
        
    {{numberch}}
    
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.number"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'日期选择器'">日期选择器</mc-title>
    
        <mc-articl
          >
        日期选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中<br />
          结果的格式为一个对象<br />
          {year,month,day}<br />
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let datech = ref("");
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-date date='2020-10-01' v-model:value="datech" > </mc-date>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-date date='2020-10-01' v-model:value="datech" > </mc-date>
        
        
    {{datech}}
    
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.date"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'滑动条'">滑动条</mc-title>
    
        <mc-articl
          >
        滑动选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中<br />
          指定top值来设置选择的值为0~top的小数<br />
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let sliderch = ref(0);
      let sliderch2 = ref(0);
      
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-slider v-model:value="sliderch" > </mc-slider>
          <mc-slider v-model:value="sliderch" > </mc-slider>
          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-slider v-model:value="sliderch" > </mc-slider>
          <mc-slider v-model:value="sliderch" > </mc-slider>
          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
        
        
        {{sliderch}}<br />
        {{sliderch2}}
    
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.slider"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'评分'">评分</mc-title>
    
        <mc-articl
          >
        通过v-model:value来绑定评分值<br>
          设置top来指示最高评分值<br>
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let rateerch = ref(0);
      
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-rate width='200px' v-model:value="rateerch"> </mc-rate>
          <mc-rate width='300px' v-model:value="rateerch" :top='9'> </mc-rate>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-rate width='200px' v-model:value="rateerch"> </mc-rate>
          <mc-rate width='300px' v-model:value="rateerch" :top='9'> </mc-rate>
        
        
        {{rateerch}}
    
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.rate"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'表格'">表格</mc-title>
    
        <mc-articl
          >
        通过prop来绑定表格属性值<br>
          通过v-model:value来绑定表格内容<br>
          通过editable来使表格可以编辑<br>
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let tableData = reactive([
        ["24", "学生", "1145"],
        ["18", "工作", "14"],
        ["6", "在家", "19"],
      ]);
      let tableCol = reactive(["年龄", "职业", "编号"]);
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-table  :prop='tableCol' v-model:value="tableData" > </mc-table>
        <mc-table width='300px' :prop='tableCol' editable v-model:value="tableData" > </mc-table>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-table  :prop='tableCol' v-model:value="tableData" > </mc-table>
        <mc-table width='300px' :prop='tableCol' editable v-model:value="tableData" > </mc-table>
        
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.table"
        >
        </mc-table>
    </mc-page>
        
    <mc-page>
        <mc-title :content="'列表'">列表</mc-title>
    
        <mc-articl
          >
        通过v-model:value来绑定列表值<br>
          通过name来绑定列表头<br>
          通过editable来使列表可以编辑<br>
    

         <pre v-highlightjs class="js hljs"><code class="js">
        {{`
      let listData = reactive( [89, 64, 21, 18, 6]);
    `}}
        </code></pre>

          <pre v-highlightjs class="html hljs"><code class="html">
              {{`
        <mc-list  v-model:value="listData" > </mc-list>
          <mc-list width='300px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list editable width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
        `}}
              </code></pre>
        </mc-articl>
        
        <mc-list  v-model:value="listData" > </mc-list>
          <mc-list width='300px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list editable width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
        
        
        <mc-title size="small" content="属性值"></mc-title>
        <mc-table
          :prop="['参数', '说明', '类型', '可选值', '默认值']"
          v-model:value="table.list"
        >
        </mc-table>
    </mc-page>
        
  </template>

  <script setup>

  
    let inputch = ref("")
    
      let selectlabel = reactive([
        { label: "草莓sdasfsda", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
      ])
    
        let selectch = ref("");
          let levelselectlabel = reactive( [
            {
              label: "草莓",
              value: [
                {
                  label: "奶油草莓",
                  value: [
                    {
                      label: "大奶油草莓",
                      value: "9",
                    },
                    { label: "小奶油草莓", value: "6" },
                  ],
                },
                { label: "小草莓", value: "2" },
              ],
            },
            {
              label: "香蕉",
              value: [
                { label: "芝麻香蕉", value: "3" },
                { label: "大香蕉", value: "4" },
              ],
            },
          ])
        
      let switchch = ref(false);
    
      let radioch = ref(1);
    
      let checkch = reactive([]);
      let checkch2 = reactive([]);
      
    
      let numberch = ref(0);
    
      let datech = ref("");
    
      let sliderch = ref(0);
      let sliderch2 = ref(0);
      
    
      let rateerch = ref(0);
      
    
      let tableData = reactive([
        ["24", "学生", "1145"],
        ["18", "工作", "14"],
        ["6", "在家", "19"],
      ]);
      let tableCol = reactive(["年龄", "职业", "编号"]);
    
      let listData = reactive( [89, 64, 21, 18, 6]);
    
  </script>

  
  
  <script>
  import { reactive,ref } from 'vue';
  export default {
    name: "formNew",
    data() {
      return {
        checkch: [],
        current_page: "/formNew",
        table: 
          {"input":[["v-model:value","绑定的变量名","String","-","-"],["size","标题大小","String","small/middle/large","large"]],"button":[["type","按钮颜色","String","red/blue/none","none"],["size","按钮大小","String","small/large","small"]],"select":[["v-model:value","绑定的结果变量","var","-","-"],["label","选择标签","Array","-","[]"]],"levelselect":[["v-model:value","绑定的结果变量","var","-","-"],["label","选择标签","Array","-","[]"]],"switch":[["v-model:value","绑定的结果变量","var","-","-"]],"radio":[["v-model:value","绑定的结果变量","var","-","-"],["label","选项值","var","-","-"]],"checkbox":[["v-model:value","绑定的结果变量","var","-","-"],["label","选项值","var","-","-"]],"number":[["v-model:value","绑定的结果变量","var","-","-"]],"date":[["v-model:value","绑定的结果变量","var","-","-"]],"slider":[["v-model:value","绑定的结果变量","Number","-","-"],["top","最高值","Number","-","100"]],"rate":[["v-model:value","绑定的结果变量","var","-","-"],["top","最高值","Number","-","5"]],"table":[["prop","表格头","Array","-","-"],["size","表格值","Array<Array>","-","-"]],"list":[["v-model:value","列表值","Array","-","-"],["name","列表头","String","-","-"]]}
        ,
      };
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  
    