<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 23:19:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-03 22:57:12
-->
<template>
  <div class="main">
    <div class="left">
      <div class="level1">
        <div
          class="left_menu_item"
          v-for="(level, index) in level1_menu"
          :key="index"
          @click="changeTo(level)"
        >
          {{ level.name }}
          <div v-if="level.page == current_page" class="left_menu">
            <div
              class="left_menu_item"
              v-for="(item, index) in menu"
              :key="index"
              @click="tpTo(item.offset)"
            >
              {{ item.tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="right" class="right">
      <mc-page>
        <mc-text>输入框</mc-text>
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
        <mc-text>按钮</mc-text>
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
        <mc-button size="small"> 按钮 </mc-button>
        <mc-button size="small" type="red"> 按钮 </mc-button>
        <mc-button size="small" type="blue"> 按钮 </mc-button>
        <mc-button size="large"> 大按钮 </mc-button>
      </mc-page>

      <mc-page>
        <mc-text>选择器</mc-text>
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
        <mc-text>开关</mc-text>
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
          <mc-switch v-model:value="switchch" label="1"> 开关 </mc-switch>
        </mc-middle>
        {{switchch}}
        
      </mc-page>

      <mc-page>
        <mc-text>单选按钮</mc-text>
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
        <mc-text>复选框</mc-text>
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
        <mc-text>数字选择器</mc-text>
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
        {{numberch}}
      </mc-page>

      <mc-page>
        <mc-text>日期选择</mc-text>
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
        <mc-text>滑动条</mc-text>
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
          <mc-slider v-model:value="sliderch" > </mc-slider><br />

          <mc-slider :top='1' v-model:value="sliderch2" > </mc-slider>
        {{sliderch}}<br />
        {{sliderch2}}
      </mc-page>

      
    </div>
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "forms",
  props: ["level1_menu"],
  mixins: [mixin],
  data() {
    return {
      current_page: "/form",
      radioch: 3,
      inputch: "",
      checkch: [],
      checkch2: [],
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
      numberch: 0,
      sliderch: 0,
      sliderch2:0,
      datech: "",
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
@import "./exmCss.css";
</style>
