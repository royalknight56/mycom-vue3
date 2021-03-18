<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-01-14 21:15:47
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-18 16:16:41
-->
<template>
  <div class="main">
    <div class="left">
      <div class="level1">
        <div
          class="left_menu_level1"
          v-for="(level, index) in menu"
          :key="index"
          @click="changeTo(level)"
        >
          <div
            class="left_menu_level1_text"
            :class="{
              left_menu_level1_text_chosen: current_page == level.page,
            }"
          >
            {{ level.name }}
          </div>

          <div v-if="level.page == current_page" ref='left' class="left_menu">
          <!--  -->
            <div
              class="left_menu_level2"
              v-for="(item, index) in menu[index].children"
              :class="{ 'left_menu_level2_chosen':index== current_hash }"
              :key="index"
              @click="scollTo(item, index)"
            >
              <div :id="item.name" class="left_menu_level2_text" :href="'#'+item.name">
                {{ item.name }}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="right" class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  reactive,
  ref,
} from "vue";
import { useRouter } from "vue-router";
import mixin from "./mixin";
import hljs from "highlight.js";
// import 'highlight.js/styles/atom-one-dark.css'
const hightbreak = () => {
  const prel = document.querySelectorAll("pre");
  prel.forEach((el) => {
    hljs.highlightBlock(el);
  });
};

function scollSys() {
  const router = useRouter();
  let menu = reactive([
    { name: "入门", page: "/guide" },

    { name: "基本", page: "/basic" },
    { name: "表单", page: "/form" },
    { name: "提示", page: "/unlock" },
    { name: "布局", page: "/layout" },
    { name: "实用", page: "/useful" },
  ]);
  // console.log()
  let current_page = ref(router.currentRoute.value.path);
  let current_hash = ref(0);
  let right = ref(null);
  let left = ref(null);
  let changeTo = function (page) {
    current_page.value = page.page;
    router.push({ path: page.page });
  };
  router.afterEach(() => {
    nextTick(() => {
      pageChanged();
    });
  });
  let scollTo = function (item, index) {
    index
    item
    right.value.scrollTo({
      top: item.offset - 50,
      behavior: "smooth",
    });
    // current_hash.value=index
    // right.value.scrollTop = item.offset-50;
  };
  let curPageItem = {};
  let max = 0;
  
  let scollTimer = function () {
    max= 0;
    let sctop = right.value.scrollTop+ 80;
    let len= curPageItem.children.length;
    for (let i = 0; i <len; i++) {
      left.value.children[i].classList.remove('left_menu_level2_chosen')
        if (curPageItem.children[i].offset <= sctop) {
          max = i;
        } 
    }
    left.value.children[max].classList.add('left_menu_level2_chosen')
  };

  // let timerNum = setInterval(scollTimer, 300);
//   function throttle(fn,wait){
//     var timer = null;
//     return function(){
//         var context = this;
//         var args = arguments;
//         if(!timer){
//             timer = setTimeout(function(){
//                 fn.apply(context,args);
//                 timer = null;
//             },wait)
//         }
//     }
// }

  let pageChanged = function () {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].page == current_page.value) {
        curPageItem = menu[i];
      }
    }
    curPageItem.children = [];
    for (let i = 0; i < right.value.children.length; i++) {
      curPageItem.children.push({
        name: right.value.children[i].children[0].innerText,
        offset: right.value.children[i].children[0].offsetTop,
      });
    }

    right.value.onscroll=scollTimer
  };
  onMounted(() => {
    pageChanged();
    hightbreak();
  });
  onUpdated(() => {
    hightbreak();
  });
  onBeforeUnmount(() => {
    // clearInterval(timerNum);
  });
  return { right,left, menu, current_page, current_hash, changeTo, scollTo };
}
export default {
  name: "basic",
  props: ["level1_menu"],
  mixins: [mixin],
  setup() {
    return { ...scollSys() };
  },
  data() {
    return {
      checkch: [],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./exmCss.css";
</style>
