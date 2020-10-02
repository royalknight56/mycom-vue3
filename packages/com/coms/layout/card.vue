<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 20:50:45
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-02 21:04:00
-->
<template>
      <div class="mc_card">
          <slot></slot>
      </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-card",
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
.mc_card{
    margin: 10px;
    padding: 30px;
    width: fit-content;
    height: fit-content;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.336);
    border: 1px solid rgba(0, 0, 0, 0.363);
    border-radius: 10px;
}
</style>