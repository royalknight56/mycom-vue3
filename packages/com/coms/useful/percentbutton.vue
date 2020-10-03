<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-03 18:04:05
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-03 18:23:46
-->
<template>
  <div class="mc_percent_button">
      <div ref="white"  class="mc_percent_button_white_out">
          <div class="mc_percent_button_in mc_percent_button_white">{{text}}</div>
      </div>
    <div ref='black' class="mc_percent_button_in mc_percent_button_black">{{text}}</div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-percent-button",
  mixins: [setting],
  props:['process' ,'text'],
  data: function () {
    return {};
  },
  mounted: function () {
      this.$refs.white.style.width=parseInt(this.process*100)+'px'
  },
  watch:{
      process:function(){
          this.$refs.white.style.width=parseInt(this.process*100)+'px'
      }
  }
};
</script>
<style scoped>
.mc_percent_button {
  width: 100px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.247);
  position: relative;
  z-index: 0;
  cursor: pointer;
}
.mc_percent_button_in{
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-align: center;
}
.mc_percent_button_white_out{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.mc_percent_button_white{
    overflow: hidden;
    background-color: white;
    color: black;
    z-index: 1;
    width: 100px;
}
.mc_percent_button_black{

    background-color: black;
    color: white;
    z-index: 0;
}
</style>