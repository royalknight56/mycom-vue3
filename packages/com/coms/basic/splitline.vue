<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 22:37:30
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 17:03:10
-->
<template>
      <div class="mc_divider">
          <div v-if='text' class="mc_divder_text">
              {{text}}
          </div>
      </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-divider",
  mixins:[setting],
  props:['text'],
  data:function(){
      return{
          
      }
  },
  mounted: function () {
    
  },
};
</script>
<style scoped>
.mc_divider{
    width: 100%;
    height: 2px;
    margin: 20px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mc_divder_text{
    background-color: black;
    padding:0 4px;
    color: white;
    user-select: none;
}
</style>