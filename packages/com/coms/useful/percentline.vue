<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-10 10:46:07
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-10 10:59:20
-->
<template>
  <div class="mc_percent_line">
      <div ref="white"  class="mc_percent_line_white_out">
          <div class="mc_percent_line_in mc_percent_line_white"></div>
      </div>
    <div ref='black' class="mc_percent_line_in mc_percent_line_black"></div>
    <div class="mc_percent_line_text">
        {{text}}
    </div>
    
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-percent-line",
  mixins: [setting],
  props:['process' ,'text'],
  data: function () {
    return {};
  },
  mounted: function () {
      this.$refs.white.style.width=parseInt(this.process*100)+'%'
  },
  watch:{
      process:function(){
          this.$refs.white.style.width=parseInt(this.process*100)+'%'
      }
  }
};
</script>
<style scoped>
.mc_percent_line {
    margin: 6px 0;
  width: 400px;
  height: 8px;
  border: 1px solid rgba(0, 0, 0, 0.247);
  position: relative;
  z-index: 0;
  cursor: pointer;
}
.mc_percent_line_in{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.mc_percent_line_white_out{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}
.mc_percent_line_white{
    overflow: hidden;
    background-color: black;
    color: white;
    z-index: 1;
    width:  100%;
}
.mc_percent_line_black{
    background-color: white;
    color: black;
    z-index: 0;
}
.mc_percent_line_text{
    position: absolute;
    font-size: 8px;
    right: -60px;
    top: -5px;
}
</style>