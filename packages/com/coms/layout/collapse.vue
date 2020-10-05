<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 22:46:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-05 15:45:27
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
<style lang="scss" scoped>
@import  '../../../scssvar.scss';

.mc_collapse {
  position: relative;
  width: 300px;
}
.mc_col_top {
  position: absolute;
  user-select: none;
  pointer-events: none;
  color:$white;
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
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 1px;
  background: $black;
  color:$white;
  border-radius: 0;
  cursor: pointer;
  outline: none;
}
.fold-button:checked {
  background: $pblack;
}
.fold-button:hover {
  background:$black;
}
.fold-button + section {
  position: relative;
  top: -4px;
  overflow: hidden;
}
.fold-button + section > div.fold-content {
  width:100%;
  height: 100px;
  background: $middlecolor;
  box-sizing: border-box;

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