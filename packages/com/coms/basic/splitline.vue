<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 22:37:30
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-16 20:40:52
-->
<template>
      <div class="mc_divider">
          <div class="mc_divder_text" :class="'mc_divder_text_'+contentPosition">
              <slot></slot>
          </div>
      </div>
</template>

<script>
export default {
  name: "mc-divider",
  props:['contentPosition'],
};
</script>
<style scoped>
.mc_divider{
    position: relative;
    width: 100%;
    height: 2px;
    margin: 20px;
    background-color: rgba(0, 0, 0, 0.384);
    display: flex;
    justify-content: center;
    align-items: center;
}
.mc_divder_text{
    background-color: rgb(100, 100, 100);
    padding:0 4px;
    color: white;
    user-select: none;
}
.mc_divder_text_left{
    position: absolute;
    left: 30px;
}
.mc_divder_text_right{
    position: absolute;
    right: 30px;
}
</style>