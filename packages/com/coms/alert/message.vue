<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 16:57:03
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-02 17:00:18
-->
<template>
  <div class="outer">
      <div class="mc_message">
          提示
          <!-- <slot></slot> -->
      </div>
  </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-message",
  mixins:[setting],
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
    text-align: center;
    background-color: antiquewhite;
}
</style>