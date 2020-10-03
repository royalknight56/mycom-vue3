<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 22:46:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-03 15:56:08
-->
<template>
  <div class="mc_collapse">
    <div class="mc_col_top">{{ text.name }}</div>
    <input type="checkbox" placeholder="Mickey" class="fold-button" />
    <section>
      <div class="fold-content">
        {{ text.text }}
      </div>
    </section>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-collapse",
  mixins: [setting],
  props: {
    text: {
      type: Object,
      default: function () {
        return { name: "折叠面板", text: "内容为空" };
      },
    },
  },
  data: function () {
    return {
      ifShow: false,
    };
  },
  mounted: function () {},
  methods: {
    show: function () {
      this.ifShow = !this.ifShow;
    },
  },
};
</script>
<style scoped>
.mc_collapse {
  position: relative;
}
.mc_col_top {
  position: absolute;
  top: 0;
  z-index: 1;
  padding: 0 5px;
}
.fold-button {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  position: relative;
  top: 0px;
  /* left: 0; */
  width: 300px;
  height: 20px;
  margin: 0;
  padding: 0;

  background: rgba(192, 192, 192, 0.815);
  outline: none;
}
.fold-button:checked {
  background: rgba(226, 226, 226, 0.432);
}
.fold-button:hover {
  background: rgba(226, 226, 226, 0.836);
}
.fold-button + section {
  position: relative;
  top: -4px;
  overflow: hidden;
}
.fold-button + section > div.fold-content {
  width: 300px;
  height: 100px;
  background: #def;
  box-sizing: border-box;
  /* border-radius: 4px; */
  padding: 0 5px;
  opacity: 1;
  overflow: hidden;
  transition: height 0.3s ease-out, opacity 0.3s ease-out;
  /* transform: scaleY(1); */
  /* -moz-transition: height 1s ease-out, opacity 1s ease-out; */
}

.fold-button:checked + section > div.fold-content {
  
  opacity: 0;
  height: 0;
  /* transform: scaleY(0); */
}
</style>