<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 23:19:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-16 20:55:34
-->
<template>
      <mc-page>
        <mc-title content='输入框'></mc-title>
        <mc-middle> </mc-middle>
        <mc-articl
          >输入框<br />
          可以设置height值与widght值<br />
          使用v-model:value来绑定值<br />
          可以获取到当前输入的内容<br />
          placeholder指示提示的内容<br>
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-input v-model:value="inputch" placeholder="请输入密码"></mc-input>
            `
          }}
          </code></pre>
        </mc-articl>

        <mc-input v-model:value="inputch" placeholder="请输入密码"></mc-input>
        {{ inputch }}
      </mc-page>

      <mc-page>
        <mc-title content='按钮'></mc-title>
        <mc-articl
          >标题的格式<br />
          可以设置size 为 small或large <br />
          可以设置type 为 red 或 blue<br />
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
      <mc-button size="small"> 按钮 </mc-button>
      <mc-button size="small" type="red"> 按钮 </mc-button>
      <mc-button size="small" type="blue"> 按钮 </mc-button>
      <mc-button size="large"> 大按钮 </mc-button>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-button test  size="small"> 按钮 </mc-button>
        <mc-button size="small" type="red"> 按钮 </mc-button>
        <mc-button size="small" type="blue"> 按钮 </mc-button>
        <mc-button size="large"> 大按钮 </mc-button>
      </mc-page>

      <mc-page>
        <mc-title content='选择器'></mc-title>
        <mc-articl
          >一组复选按钮,使用v-model:value绑定值<br />
          label指示可选项 示例中传入的label值如下<br />
          其中label为提示,value为用户选择后传给v-model:value的值<br />
          用户选择的结果 会保存到v-model:value绑定的值中<br />
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
      selectlabel: [
        { label: "草莓sdasfsda", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
      ],

        <mc-select width="100px" v-model:value="selectch" :label="selectlabel">
       `
          }}
          </code></pre>
        </mc-articl>
        <mc-middle>
            <mc-select width="100px" v-model:value="selectch" :label="selectlabel">
        </mc-select>
        </mc-middle>
        
        {{ selectch }}
      </mc-page>
      
      <mc-page>
        <mc-title content='级联选择器'></mc-title>
        <mc-articl>
          1006新增<br>
          通过v-model:value绑定用户选择的值<br>
          通过label传入选项<br>
          传入格式为一个数组,数组中每个对象为{label,value}<br>
          label代表选择器中的指示值<br>
          value代表选择后代表的值,如果是一个数组,则代表二级菜单<br>
           可以设置type为all,这样用户点击非叶子节点时,会返回当前的value值<br>
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            
            `
            [
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
            <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>

            `
          }}
          </code></pre>
        </mc-articl>
        <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>
          <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>
          {{selectch}}
      
      </mc-page>
      
      <mc-page>
        <mc-title content='开关'></mc-title>
        <mc-articl
          >一只开关,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中<br />
          不建议在switch中传入innerhtml
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
    <mc-switch v-model:value="switchch" > 开关 </mc-switch>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-middle>
          <mc-switch v-model:value="switchch" label="1"> </mc-switch>开关 
          <mc-switch v-model:value="switchch" label="1"> </mc-switch>开关 
        </mc-middle>
        {{switchch}}
        
      </mc-page>

      <mc-page>
        <mc-title content='单选按钮'></mc-title>
        <mc-articl
          >一组单选按钮,使用v-model:value绑定值<br />
          v-model:value绑定同一个值时,他们将是同一组按钮<br />
          用户选择的结果的label会保存到绑定的值中
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
        <mc-radio v-model:value="radioch" label="1"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="2"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="3"> 单选按钮 </mc-radio>

            `
          }}
          </code></pre>
        </mc-articl>
        <mc-radio v-model:value="radioch" label="1"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="2"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="3"> 单选按钮 </mc-radio>
        {{ radioch }}
      </mc-page>

      <mc-page>
        <mc-title content='复选框'></mc-title>
        <mc-articl
          >一组复选按钮,使用v-model:value绑定值<br />
          v-model:value绑定同一个值时,他们将是同一组按钮<br />
          用户选择的结果的label会作为一个数组保存到绑定的值中
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
        <mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>

            `
          }}
          </code></pre>
        </mc-articl>
        <mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
        {{ checkch }}

        <mc-checkbox v-model:value="checkch2" label="a"> 选a </mc-checkbox>
        <mc-checkbox v-model:value="checkch2" label="b"> 选b </mc-checkbox>
        <mc-checkbox v-model:value="checkch2" label="c"> 选c </mc-checkbox>
        {{ checkch2 }}
      </mc-page>

      <mc-page>
        <mc-title content='数字选择器'></mc-title>
        <mc-articl
          >数字选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
    <mc-switch v-model:value="switchch" > 开关 </mc-switch>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-number v-model:value="numberch" > </mc-number>
        <mc-number width='300px' v-model:value="numberch" > </mc-number>
        {{numberch}}
      </mc-page>

      <mc-page>
        <mc-title content='日期选择'></mc-title>
        <mc-articl
          >日期选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中<br />
          结果的格式为一个对象<br />
          {year,month,day}<br />
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-date date='2020-10-01' v-model:value="datech" > </mc-date>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-date date='2020-10-01' v-model:value="datech" > </mc-date>
        {{datech}}
      </mc-page>
      
      <mc-page>
        <mc-title content='滑动条'></mc-title>
        <mc-articl
          >滑动选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中<br />
          指定top值来设置选择的值为0~top的小数<br />
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-slider v-model:value="sliderch" > </mc-slider>
            <mc-slider :top='1' v-model:value="sliderch" > </mc-slider>
            `
          }}
          </code></pre>
        </mc-articl>
          <mc-slider v-model:value="sliderch" > </mc-slider>
          <mc-slider v-model:value="sliderch" > </mc-slider>
          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
        {{sliderch}}<br />
        {{sliderch2}}
      </mc-page>

      <mc-page>
        <mc-title content='评分'></mc-title>
        <mc-articl
          >通过v-model:value来绑定评分值<br>
          设置top来指示最高评分值
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-rate width='200px' v-model:value="rateerch"> </mc-rate>
          <mc-rate width='300px' v-model:value="rateerch" :top='9'> </mc-rate>

            `
          }}
          </code></pre>
        </mc-articl>
          <mc-rate width='200px' v-model:value="rateerch"> </mc-rate>
          <mc-rate width='300px' v-model:value="rateerch" :top='9'> </mc-rate>
          {{rateerch}}
      </mc-page>


      <mc-page>
        <mc-title content='表格'></mc-title>
        <mc-articl
          >通过prop来绑定表格属性值<br>
          通过v-model:value来绑定表格内容<br>
          通过editable来使表格可以编辑<br>
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
      tableData: [
        ["24", "学生", "1145"],
        ["18", "工作", "14"],
        ["6", "在家", "19"],
      ],
      tableCol: ["年龄", "职业", "编号"],
          <mc-table  :prop='tableCol' v-model:value="tableData" > </mc-table>
          <mc-table width='300px' :prop='tableCol' editable v-model:value="tableData" > </mc-table>

            `
          }}
          </code></pre>
        </mc-articl>
          <mc-table  :prop='tableCol' v-model:value="tableData" > </mc-table>
          <mc-table width='300px' :prop='tableCol' editable v-model:value="tableData" > </mc-table>
      </mc-page>

      <mc-page>
        <mc-title content='列表'></mc-title>
        <mc-articl
          >通过v-model:value来绑定列表值<br>
          通过name来绑定列表头<br>
          通过editable来使列表可以编辑<br>
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-list  v-model:value="listData" > </mc-list>
          <mc-list width='300px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list editable width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
            `
          }}
          </code></pre>
        </mc-articl>
          <mc-list  v-model:value="listData" > </mc-list>
          <mc-list width='300px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list editable width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
      </mc-page> 

      <mc-page>
        <mc-title content='Set结构'></mc-title>
        <mc-articl
          >待完善的文档
          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-list  v-model:value="listData" > </mc-list>
          <mc-list width='300px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list width='300px' height='400px' name='列表头'  v-model:value="listData" ></mc-list>

            `
          }}
          </code></pre>
        </mc-articl>
          <mc-set  v-model:value="listData" > </mc-set>
          <mc-set width='300px' name='列表头'  v-model:value="listData" ></mc-set>
          <mc-set editable width='300px' name='列表头'  v-model:value="listData" ></mc-set>
          {{listData}}
      
      </mc-page> 
</template>

<script>
export default {
  name: "forms",

  data() {
    return {
      current_page: "/form",
      radioch: 3,
      inputch: "",
      checkch: [],
      checkch2: [],
      rateerch: 3,
      selectch: "",
      selectlabel: [
        { label: "草莓sdasfsda", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
      ],
      switchch: true,
      numberch: 3,
      sliderch: 23,
      sliderch2: 0,
      datech: "",
      tableData: [
        ["24", "学生", "1145"],
        ["18", "工作", "14"],
        ["6", "在家", "19"],
      ],
      tableCol: ["年龄", "职业", "编号"],
      listData: [89, 64, 21, 18, 6],

      levelselectlabel: [
        {
          label: "草莓",
          value: [
            {
              label: "奶油草莓",
              value: [
                {
                  label: "大奶油草莓",
                  value: [
                    {
                      label: "大甜奶油草莓",
                      value: [
                        {
                          label: "大圆甜奶油草莓",
                          value: [
                            { label: "精品大圆甜奶油草莓", value: "11" },
                            { label: "普通大圆甜奶油草莓", value: "10" },
                          ],
                        },
                        { label: "大尖甜奶油草莓", value: "9" },
                      ],
                    },
                    { label: "大酸奶油草莓", value: "8" },
                  ],
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
      ],
    };
  },

  watch: {
    radioch: function () {},
  },
  methods: {
    test2: function () {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "./exmCss.css"; */
</style>
