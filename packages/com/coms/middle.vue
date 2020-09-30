<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-28 15:29:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-28 22:19:27
-->
<template>
  <div class="outer">
      <div class="mc_middle">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "mc-middle",
  props:['width'],
  data:function(){
      return{
          
      }
  },
  mounted: function () {
    
  },
};
</script>
<style scoped>
.mc_middle{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>