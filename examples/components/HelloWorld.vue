<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 21:10:01
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 16:05:04
-->
<template>
  <div class="hello">
    <div class="header">
      <div class="out">
        > mycom-vue3 <span style="font-size: 10px">npm install mycom-vue3</span>
      </div>
    </div>
      <router-view :level1_menu='level1_menu'></router-view>
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
      current_page:'/unlock',
      level1_menu: [
        { name: "基本", page: "/basic" },
        { name: "表单", page: "/form" },
      { name: "提示", page: "/unlock" },
      { name: "布局", page: "/layout" },
      { name: "实用", page: "/useful" }
      ],
    };
  },
  methods: {
    changeTo(page){
      this.$router.push({ path: page.page })
    },
    tpTo(offset) {
      this.$refs.right.scrollTop = offset.offsetTop - 50;
    },
    alertDemo() {
      this.$alert("kkk");
    },
  },
  mounted() {

  },
  updated() {
    hightbreak();
  },
  watch: {
    iflock: function () {
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.out{
  white-space: nowrap;
}
.hello {
  display: grid;
  grid-template-rows: 50px 1fr;
}
.header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 20px;
  transform: skewX(-4deg);
  line-height: 50px;
  padding: 0 10px 0 30px;
  border-bottom: 1px solid rgb(167, 167, 167);
  /* box-shadow: inset 0px -3px 2px black; */
}
</style>
