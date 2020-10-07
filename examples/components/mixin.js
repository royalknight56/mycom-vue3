/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 22:23:11
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 22:55:03
 */
import hljs from "highlight.js";
// import 'highlight.js/styles/atom-one-dark.css'
const hightbreak = () => {
  const prel = document.querySelectorAll("pre");
  prel.forEach((el) => {
    hljs.highlightBlock(el);
  });
};
export default{

    props:['level1_menu'],
    data() {
      return {
        test: 0,
        iflock: false,
        menu: [],
      };
    },
    methods: {
      changeTo(page) {
        this.$router.push({ path: page.page });
      },
      tpTo(offset) {
        this.$refs.right.scrollTop = offset.offsetTop - 50;
      },
      alertDemo() {
        this.$alert("kkk");
      },
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
      },
    },
  }