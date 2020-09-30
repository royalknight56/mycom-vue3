<template>
  <div class="hello">
    <div class="header">
      <div class="out">
        > mycom-vue3 <span style="font-size: 10px">npm install mycom-vue3</span>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <div class="left_menu">
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
      <div ref="right" class="right">
        <mc-page>
          <mc-text>切换轮播图</mc-text>
          <mc-middle>
            <mc-tab v-model="test" height="200px" width="50%">
              <mc-tab-page>1</mc-tab-page>
              <mc-tab-page>2</mc-tab-page>
              <mc-tab-page>4</mc-tab-page>
            </mc-tab>
          </mc-middle>
          <mc-articl
            >点击左右的按钮可以切换<br />
            可以设置height值与widght值<br />
            绑定值可以获取到当前的页号<br />
            示例
            <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-tab v-model="test" height="200px" width="50%">
              <mc-tab-page>1</mc-tab-page>
              <mc-tab-page>2</mc-tab-page>
              <mc-tab-page>4</mc-tab-page>
            </mc-tab>
            `
          }}
          </code></pre>
          </mc-articl>
        </mc-page>

        <mc-page>
          <mc-text>滑动解锁</mc-text>

          <mc-articl
            >从左到右拖动滑块可以显示包裹的内容<br />
            可以设置height值<br />
            绑定值可以获取是否解锁成功<br />
            示例

            <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-unlock v-model="iflock" width="50%">
              <h4>滑动解锁按钮</h4>
            </mc-unlock>
            `
          }}
          </code></pre>
          </mc-articl>

          <mc-middle>
            <mc-unlock v-model="iflock" width="50%">
              <h4>滑动解锁按钮</h4>
            </mc-unlock>
          </mc-middle>
        </mc-page>

        <mc-page>
          <mc-text>隐藏与显示的切换</mc-text>

          <mc-articl
            >点击按钮选择包裹内容的显示与否<br />
            可以设置height值与widght值<br />
            示例

            <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
            <mc-unlock2 width="50%">
              <h4>显示与隐藏按钮</h4>
            </mc-unlock2>
            `
          }}
          </code></pre>
          </mc-articl>

          <mc-middle>
            <mc-unlock2 width="50%">
              <h4>显示与隐藏按钮</h4>
            </mc-unlock2>
          </mc-middle>
        </mc-page>

        <mc-page>
          <mc-text>标题</mc-text>

          <mc-articl
            >标题的格式<br />
            可以设置size 为 small<br />
            示例

            <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
    <mc-text width="200px">这是一个大标题</mc-text>
    <mc-text width="200px" size="small">这是一个标题</mc-text>
            `
          }}
          </code></pre>
          </mc-articl>
          <mc-middle>
            <mc-text width="200px">这是一个大标题</mc-text>
            <mc-text width="200px" size="small">这是一个标题</mc-text>
          </mc-middle>
        </mc-page>

        <mc-page>
          <mc-text>按钮</mc-text>
          <mc-articl
            >标题的格式<br />
            可以设置size 为 small或large <br />
            可以设置type 为 red 或 blue<br />
            示例
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
          <mc-text>居中框</mc-text>
          <mc-articl>
            居中框显示一个一直在居中的框体<br />
            用于登录框 <br />
            <br />
            示例
            <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-unlock2 width="50%">
            <mc-center> 登录框 </mc-center>
          </mc-unlock2>
            `
          }}
          </code></pre>
          </mc-articl>
          <mc-unlock2 width="50%">
            <mc-center width="50%" height="50%"> 登录框 </mc-center>
          </mc-unlock2>
        </mc-page>

        <mc-page>
          <mc-text>提示框</mc-text>
          <mc-articl>
            出现一个提示框<br />
            <br />
            示例
            <pre v-highlightjs class="html hljs"><code class="html">
          {{
            `
          <mc-unlock2 width="50%">
            <mc-center> 登录框 </mc-center>
          </mc-unlock2>
            `
          }}
          </code></pre>
          </mc-articl>
            <mc-button size="small" @click="alertDemo()"> 按钮 </mc-button>
        </mc-page>

      </div>
    </div>
  </div>
</template>

<script>
// import vue from 'vue'
import hljs from "highlight.js";
// import 'highlight.js/styles/atom-one-dark.css'
const hightbreak = () => {
  const prel = document.querySelectorAll("pre");
  prel.forEach((el) => {
    hljs.highlightBlock(el);
  });
};

export default {
  name: "HelloWorld",

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      test: 0,
      iflock: false,
      menu: [],
    };
  },
  methods: {
    tpTo(offset) {
      this.$refs.right.scrollTop = offset.offsetTop - 50;
    },
    alertDemo(){
      this.$alert('kkk')
    }
  },
  mounted() {
    hightbreak();
    var ch = this.$refs.right.childNodes;
    for (let i = 0; i < ch.length; i++) {
      this.menu.push({
        tag: ch[i].childNodes[1].innerText,
        offset: ch[i].childNodes[1],
      });
    }
  },
  updated() {
    hightbreak();
  },
  watch: {
    iflock: function () {
      console.log(this.iflock);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test_tab {
  background-color: antiquewhite;
}
.hello {
  display: grid;
  grid-template-rows: 50px 1fr;
}
.header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 25px;
  line-height: 50px;
  padding: 0 10px 0 30px;
  /* border-bottom: 3px solid black; */
  box-shadow: inset 0px -3px 2px black;
}
.main {
  display: grid;
  grid-template-columns: 200px 1fr;
}
.left {
  overflow: hidden;
}
.left_menu_item {
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  background-color: rgba(126, 126, 126, 0.24);
  border-left: 5px solid rgba(114, 114, 114, 0.267);
  cursor: pointer;
}
.left_menu_item:hover {
  background-color: rgba(160, 160, 160, 0.24);
  border-left: 5px solid rgba(141, 141, 141, 0.267);
}
.right {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.2s;
}
</style>
