<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 16:58:58
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 09:50:09
-->
<template>
      <div class="mc_page">
          <slot></slot>
      </div>
</template>

<script>
export default {
  name: "mc-page",
  data:function(){
      return{
          
      }
  },
  mounted: function () {
    
  },
};
</script>
<style scoped>
.mc_page{
    width: 100%;
    box-sizing: border-box;
    /* height: max-content; */
    margin: 20px 0;
    padding: 20px 0;
    /* overflow: hidden; */
}
</style>