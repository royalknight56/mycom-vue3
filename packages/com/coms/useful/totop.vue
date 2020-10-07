<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-06 18:25:09
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-07 21:02:43
-->
<template>
      <div @click="totop()" class="mc_totop">
      </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-totop",
  mixins:[setting],
  data:function(){
      return{
          
      }
  },
  mounted: function () {

  },
  methods:{
      totop(){
   
      }
  }
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';

.mc_totop{
    position: fixed;
    right: 10px;
    bottom: 10px;

    width: 50px;
    height: 50px;

    background-color: $black;

    cursor: pointer;

    
}
</style>