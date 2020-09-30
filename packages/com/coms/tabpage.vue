<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-28 10:18:49
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-28 16:13:08
-->
<template>
  <div class="outer">
    <div class="tabpage_continer">
      <!-- <div  v-if="thisIndex==current"> -->
      <slot class="tabpage_inner"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "mc-tab-page",
  data: function () {
    return {
      ifLocked: false,
    };
  },
  mounted: function () {
  },
  updated: function () {},
};
</script>
<style scoped>
.outer {
  width: 100%;
  height: 100%;
}
.tabpage_continer {
  width: 100%;
  height: 100%;
}
.tabpage_continer::before {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
</style>