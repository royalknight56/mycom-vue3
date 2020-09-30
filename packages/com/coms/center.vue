<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 10:31:51
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 10:49:04
-->
<template>
      <div class="contener">
          <slot></slot>
      </div>
</template>

<script>
import set from './js/setting'
export default {
  name: "mc-center",
  mixins:[set],
  data: function () {
    return {};
  },
  mounted: function () {},
};
</script>
<style scoped>
.mc_center {
  width: 100%;
  height: 100%;

  z-index: 6;
}
.contener{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    width: 100%;
    height: 100%;
    background-color: rgb(224, 245, 255);
    border: 1px solid rgba(0, 0, 0, 0.123);
}
</style>