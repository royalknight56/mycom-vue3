<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-28 09:10:42
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 09:51:41
-->
<template>
  <div class="outer">
    <button id="slider-box" @click="ifLocked=!ifLocked">{{text||'显示'}}</button>
    <slot v-if="ifLocked"></slot>
  </div>
</template>

<script>
import setting from './js/setting'
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
<style scoped>
button{
  outline: none;
}
.outer{
    width: 100%;
    height: 40px;
    margin: 10px 0;
    text-align: center;
}
#slider-box{
  position: relative;
  width: 100%;
  height: 100%;


  background-color: #e8e8e8;
  border: 1px solid rgba(80, 80, 80, 0.486);
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