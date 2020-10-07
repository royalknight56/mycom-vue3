<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 21:10:01
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-05 15:57:34
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

</style>
