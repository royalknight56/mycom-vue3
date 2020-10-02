<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 22:46:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-02 23:29:10
-->
<template>
  <div class="mc_collapse">
    <div @click="show()" class="mc_collapse_top">折叠面板</div>
    <div :class="ifShow ? 'show' : 'hidden'" class="mc_collapse_in">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-collapse",
  mixins: [setting],
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
  width: 100%;
  height:100px;
  overflow: hidden;
}
.mc_collapse_top::selection{
    display: none;
}
.mc_collapse_top {
    position: absolute;
  background-color: rgb(255, 255, 255);
  top: 0;
  width: 400px;
  height: 40px;

  /* left: 50%; */
  /* z-index: 1; */
  /* transform: translateX(-50%); */
}
.mc_collapse_in {
    position: absolute;
  width: 400px;
  height: min-content;

  left: 50%;
  top: 40px;

  transform: translateX(-50%);

  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.048);
  overflow: hidden;
  border-radius: 6px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  text-align: center;
  line-height: 60px;
}
.show {
  animation: colltan 0.2s forwards;
}
.hidden {
  animation: collthian 0.2s forwards;
}

@keyframes colltan {
  0% {
    opacity: 0;
    top: 100px;
    /* transform: translateX(-50%) translateY(-100%); */
  }
  100% {
    opacity: 1;
    top: 40px;
    /* transform: translateX(-50%) translateY(0%); */
  }
}
@keyframes collthian {
  0% {
    opacity: 1;
    top: 40px;
    /* transform: translateX(-50%) translateY(0%); */
  }
  100% {
    opacity: 0;
    top: 100px;
    /* transform: translateX(-50%) translateY(-100%); */
  }
}
</style>