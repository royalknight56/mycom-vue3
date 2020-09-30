<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-28 21:23:19
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-28 21:28:03
-->
<template>
  <div class="outer">
      <div class="mc_articl">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "mc-articl",
  data:function(){
      return{
          
      }
  },
  mounted: function () {
    
  },
};
</script>
<style scoped>
.mc_articl{
    width: 100%;
    height: 100%;
    font-weight: 500;
    font-size: 15px;
    padding: 5px;
    color: rgba(0, 0, 0, 0.849);
    background-color: rgba(202, 202, 202, 0.26);
    border-left: 1px solid rgba(138, 138, 138, 0.425);
}
</style>