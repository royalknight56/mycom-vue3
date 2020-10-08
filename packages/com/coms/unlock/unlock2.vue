<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-28 09:10:42
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-08 19:23:20
-->
<template>
  <div class="outer">
    <button id="mc_unlock_button" @click="ifLocked=!ifLocked">{{ifLocked?'隐藏':'显示'}}</button>
    <slot v-if="ifLocked"></slot>
  </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-unlock2",
  mixins:[setting],
  props:['text','width','height'],
  data:function(){
      return{
          ifLocked:false,
      }
  },
  mounted: function () {
    
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";
button{
  outline: none;
}
.outer{
    width: 100%;
    height: 40px;
    margin: 10px 0;
    text-align: center;
}
.mc_unlock_button{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $black;
  border: $borderstyle;
  color: $whitecolor;
  /* box-shadow: 1px 1px 5px rgba(0,0,0,0.2); */
}

.slider-txt{
  position: absolute;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #000;
  text-align: center;
}

</style>