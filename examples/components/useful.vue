<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 23:19:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-14 21:55:58
-->
<template>

      <mc-page>
        <mc-title content='切换轮播图'></mc-title>

        <mc-articl
          >点击左右的按钮可以切换<br />
          可以设置height值与widght值<br />
          绑定值可以获取到当前的页号<br />

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-tab v-model:value="test" height="200px" width="50%">
              <mc-tab-page>1</mc-tab-page>
              <mc-tab-page>2</mc-tab-page>
              <mc-tab-page>4</mc-tab-page>
            </mc-tab>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-middle>
          <mc-tab v-model:value="test" height="200px" width="50%">
            <mc-tab-page>1</mc-tab-page>
            <mc-tab-page>2</mc-tab-page>
            <mc-tab-page>4</mc-tab-page>
          </mc-tab>
        </mc-middle>
      </mc-page>

      <mc-page>
        <mc-title content='百分比显示按钮'></mc-title>
        <mc-articl
          >通过绑定process来控制百分比的显示<br />
          process为0~1的小数<br />
          通过绑定text来控制按钮文字的显示<br />

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
        <mc-percent-button text="加载中" process="0.5"> </mc-percent-button>

        <mc-percent-button
          text="加载中.."
          :process="loading"
        ></mc-percent-button>

        <mc-percent-button
          text="加载中.."
          :process="ctrlloading"
        ></mc-percent-button>
        
        <mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-percent-button text="加载中" process="0.5"> </mc-percent-button>
        <mc-percent-button
          text="加载中.."
          :process="loading"
        ></mc-percent-button>
        <mc-percent-button
          text="加载中.."
          :process="ctrlloading"
        ></mc-percent-button>
        <mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
      </mc-page>

      <mc-page>
        <mc-title content='进度条'></mc-title>
        <mc-articl
          >待完善的文档

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
        <mc-percent-button text="加载中" process="0.5"> </mc-percent-button>

        <mc-percent-button
          text="加载中.."
          :process="loading"
        ></mc-percent-button>

        <mc-percent-button
          text="加载中.."
          :process="ctrlloading"
        ></mc-percent-button>
        
        <mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-percent-line text="加载中" process="0.5"> </mc-percent-line>
        <mc-percent-line text="加载中.." :process="loading"></mc-percent-line>
        <mc-percent-line
          text="加载中.."
          :process="ctrlloading"
        ></mc-percent-line>
        <mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
      </mc-page>

      <mc-page>
        <mc-title content='百分比显示饼图'></mc-title>
        <mc-articl
          >通过绑定process来控制百分比的显示<br />
          process为0~1的小数<br />
          通过绑定text来控制文字的显示<br />

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-percent-pie text="加载中" :process="0.7"> </mc-percent-pie>
            <mc-percent-pie text="加载中.." :process="loading"> </mc-percent-pie>
            <mc-percent-pie text="加载中.." :process="ctrlloading"></mc-percent-pie>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-percent-pie text="加载中" :process="0.7"> </mc-percent-pie>
        <mc-percent-pie text="加载中.." :process="loading"> </mc-percent-pie>

        <mc-percent-pie text="加载中.." :process="ctrlloading">
        </mc-percent-pie>
        <mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
      </mc-page>

      <mc-page>
        <mc-title content='百分比显示环图'></mc-title>
        <mc-articl
          >通过绑定process来控制百分比的显示<br />
          process为0~1的小数<br />
          通过绑定text来控制文字的显示<br />

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
        <mc-percent-ring text="加载中" :process="0.7"> </mc-percent-ring>
        <mc-percent-ring text="加载中.." :process="loading"> </mc-percent-ring>

        <mc-percent-ring text="加载中.." :process="ctrlloading">
        </mc-percent-ring>
        <mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
            `
          }}
          </code></pre>
        </mc-articl>
        <mc-percent-ring text="加载中" :process="0.7"> </mc-percent-ring>
        <mc-percent-ring text="加载中.." :process="loading"> </mc-percent-ring>

        <mc-percent-ring text="加载中.." :process="ctrlloading">
        </mc-percent-ring>
        <mc-slider :top="1" v-model:value="ctrlloading"></mc-slider>
      </mc-page>

      <mc-page>
        <mc-title content='下拉刷新'></mc-title>
        <mc-articl
          >在顶部会出现检测区域<br />
          当用户从顶部拉到鼠标或手指向下时<br />
          出现刷新指示圆圈,<br />
          当下拉到一定位置时,<br />
          松开事件会触发refresh<br />

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-dropdown @refresh='refreshdemo()'></mc-dropdown>
            `
          }}
          </code></pre>
        </mc-articl>

        <mc-unlock2 width="50%">
          <mc-dropdown @refresh="refreshdemo()"></mc-dropdown>
        </mc-unlock2>
      </mc-page>

      <mc-page>
        <mc-title content='拖拽'></mc-title>
        <mc-articl
          >待完善的文档

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-dropdown @refresh='refreshdemo()'></mc-dropdown>
            `
          }}
          </code></pre>
        </mc-articl>

        <mc-drag-item></mc-drag-item>
      </mc-page>

      <mc-page>
        <mc-title content='回到顶部'></mc-title>
        <mc-articl
          >待完善的文档

          <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-dropdown @refresh='refreshdemo()'></mc-dropdown>
            `
          }}
          </code></pre>
        </mc-articl>

        <mc-totop></mc-totop>
      </mc-page>

</template>

<script>

export default {
  name: "useful",

  data() {
    return {
      current_page: "/useful",
      loading: 0,
      ctrlloading: 0,
    };
  },
  watch: {
    test: function () {
      console.log(this.test);
    },
  },
  mounted: function () {
    setInterval(() => {
      this.loading += 0.05;
      this.loading = this.loading % 1;
    }, 100);
  },
  methods: {
    refreshdemo: function () {
      this.$top_alert("刷新触发");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "./exmCss.css"; */
</style>
