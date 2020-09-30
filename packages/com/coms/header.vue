<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 18:30:02
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-29 18:57:50
-->
<template>
      <div class="mc_header">
          <div v-for="(item,index) in menu" :key='index' class="menu">
              
          </div>
      </div>
</template>

<script>
export default {
  name: "mc-header",
  props:['menu'],
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