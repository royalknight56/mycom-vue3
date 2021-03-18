/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-03-17 21:54:29
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-18 13:46:56
 */
module.exports = [
    {
        title: "输入框",
        name: "input",
        descripttion: `输入框<br />
        可以设置height值与widght值<br />
        使用v-model:value来绑定值<br />
        可以获取到当前输入的内容<br />
        placeholder指示提示的内容<br>
    `,
        extend_js: `
    let inputch = ref("")
    `,
        usage: `
        <mc-input v-model:value="inputch" placeholder="请输入密码"></mc-input>
        `,
        extend_vue: `
        {{inputch}}
        `,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "按钮",
        name: "button",
        descripttion: `
        可以设置size 为 small或large <br />
        可以设置type 为 red 或 blue<br />
    `,
        usage: `
        <mc-button test  size="small"> 按钮 </mc-button>
        <mc-button size="small" type="red"> 按钮 </mc-button>
        <mc-button size="small" type="blue"> 按钮 </mc-button>
        <mc-button size="large"> 大按钮 </mc-button>`,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "选择器",
        name: "select",
        descripttion: `
        一组复选按钮,使用v-model:value绑定值<br />
        label指示可选项 示例中传入的label值如下<br />
        其中label为提示,value为用户选择后传给v-model:value的值<br />
        用户选择的结果 会保存到v-model:value绑定的值中<br />
    `,
        extend_js: `
      let selectlabel = reactive([
        { label: "草莓sdasfsda", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
        { label: "草莓", value: "a" },
        { label: "香蕉", value: "b" },
      ])
    `,
        usage: `
            <mc-select width="100px" v-model:value="selectch" :label="selectlabel"></mc-select>`,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "级联选择器",
        name: "select",
        descripttion: `
        1006新增<br>
          通过v-model:value绑定用户选择的值<br>
          通过label传入选项<br>
          传入格式为一个数组,数组中每个对象为{label,value}<br>
          label代表选择器中的指示值<br>
          value代表选择后代表的值,如果是一个数组,则代表二级菜单<br>
           可以设置type为all,这样用户点击非叶子节点时,会返回当前的value值<br>
    `,

        extend_js: `
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
        `,
        usage: `
        <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>
        <mc-level-select  v-model:value="selectch" :label="levelselectlabel"> </mc-level-select>
        `,
        extend_vue: `{{selectch}}`,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],

    },
    {
        title: "开关",
        name: "switch",
        descripttion: `
        一只开关,使用v-model:value绑定值<br />
        用户选择的结果会保存到绑定的值中<br />
        不建议在switch中传入innerhtml
    `,
        extend_js: `
      let switchch = ref(false);
    `,
        usage: `
        <mc-switch v-model:value="switchch" label="1"> </mc-switch>开关 
        <mc-switch v-model:value="switchch" label="1"> </mc-switch>开关 
        `,
        extend_vue: `
    {{switchch}}
    `,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "单选按钮",
        name: "radio",
        descripttion: `
        一组单选按钮,使用v-model:value绑定值<br />
          v-model:value绑定同一个值时,他们将是同一组按钮<br />
          用户选择的结果的label会保存到绑定的值中
    `,
        extend_js: `
      let radioch = ref(1);
    `,
        usage: `
        <mc-radio v-model:value="radioch" label="1"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="2"> 单选按钮 </mc-radio>
        <mc-radio v-model:value="radioch" label="3"> 单选按钮 </mc-radio>
        `,
        extend_vue: `
    {{radioch}}
    `,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "复选框",
        name: "checkbox",
        descripttion: `
        一组复选按钮,使用v-model:value绑定值<br />
          v-model:value绑定同一个值时,他们将是同一组按钮<br />
          用户选择的结果的label会作为一个数组保存到绑定的值中
    `,
        extend_js: `
      let checkch = reactive([]);
      let checkch2 = reactive([]);
      
    `,
        usage: `
        <mc-checkbox v-model:value="checkch" label="1"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="2"> 复选按钮 </mc-checkbox>
        <mc-checkbox v-model:value="checkch" label="3"> 复选按钮 </mc-checkbox>
        

        <mc-checkbox v-model:value="checkch2" label="a"> 选a </mc-checkbox>
        <mc-checkbox v-model:value="checkch2" label="b"> 选b </mc-checkbox>
        <mc-checkbox v-model:value="checkch2" label="c"> 选c </mc-checkbox>
        `,
        extend_vue: `
    {{ checkch }}
    {{ checkch2 }}
    `,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "数字选择器",
        name: "number",
        descripttion: `
        数字选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中
    `,
        extend_js: `
      let numberch = ref(0);
    `,
        usage: `
        <mc-number v-model:value="numberch" > </mc-number>
        <mc-number width='300px' v-model:value="numberch" > </mc-number>
        `,
        extend_vue: `
    {{numberch}}
    `,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "日期选择器",
        name: "date",
        descripttion: `
        日期选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中<br />
          结果的格式为一个对象<br />
          {year,month,day}<br />
    `,
        extend_js: `
      let datech = ref("");
    `,
        usage: `
        <mc-date date='2020-10-01' v-model:value="datech" > </mc-date>
        `,
        extend_vue: `
    {{datech}}
    `,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "滑动条",
        name: "slider",
        descripttion: `
        滑动选择,使用v-model:value绑定值<br />
          用户选择的结果会保存到绑定的值中<br />
          指定top值来设置选择的值为0~top的小数<br />
    `,
        extend_js: `
      let sliderch = ref(0);
      let sliderch2 = ref(0);
      
    `,
        usage: `
        <mc-slider v-model:value="sliderch" > </mc-slider>
          <mc-slider v-model:value="sliderch" > </mc-slider>
          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
        `,
        extend_vue: `
        {{sliderch}}<br />
        {{sliderch2}}
    `,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "评分",
        name: "rate",
        descripttion: `
        通过v-model:value来绑定评分值<br>
          设置top来指示最高评分值<br>
    `,
        extend_js: `
      let rateerch = ref(0);
      
    `,
        usage: `
        <mc-rate width='200px' v-model:value="rateerch"> </mc-rate>
          <mc-rate width='300px' v-model:value="rateerch" :top='9'> </mc-rate>
        `,
        extend_vue: `
        {{rateerch}}
    `,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "表格",
        name: "rate",
        descripttion: `
        通过prop来绑定表格属性值<br>
          通过v-model:value来绑定表格内容<br>
          通过editable来使表格可以编辑<br>
    `,
        extend_js: `
      let tableData = reactive([
        ["24", "学生", "1145"],
        ["18", "工作", "14"],
        ["6", "在家", "19"],
      ]);
      let tableCol = reactive(["年龄", "职业", "编号"]);
    `,
        usage: `
        <mc-table  :prop='tableCol' v-model:value="tableData" > </mc-table>
        <mc-table width='300px' :prop='tableCol' editable v-model:value="tableData" > </mc-table>
        `,
        
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "列表",
        name: "rate",
        descripttion: `
        通过v-model:value来绑定列表值<br>
          通过name来绑定列表头<br>
          通过editable来使列表可以编辑<br>
    `,
        extend_js: `
      let listData = reactive( [89, 64, 21, 18, 6]);
    `,
        usage: `
        <mc-list  v-model:value="listData" > </mc-list>
          <mc-list width='300px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
          <mc-list editable width='300px' height='200px' name='列表头'  v-model:value="listData" ></mc-list>
        `,
        
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
    {
        title: "Set结构",
        name: "rate",
        descripttion: `
        待完善的文档
    `,
        
        usage: `
        <mc-set  v-model:value="listData" > </mc-set>
          <mc-set width='300px' name='列表头'  v-model:value="listData" ></mc-set>
          <mc-set editable width='300px' name='列表头'  v-model:value="listData" ></mc-set>
        `,
        extend_vue:`{{listData}}`,
        table: [
            ["hash", "标题哈希值", "String", "-", "-"],
            ["size", "标题大小", "String", "small/middle/large", "large"],
        ],
    },
]