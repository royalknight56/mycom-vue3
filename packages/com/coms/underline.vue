<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-28 21:12:56
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-09-30 09:45:31
-->
<template>
      <div class="mc_text">
          <slot></slot>
      </div>
</template>

<script>
import setting from './js/setting'
export default {
  name: "mc-text",
  props:['size'],
  mixins:[setting],
  data:function(){
      return{
          
      }
  },
  mounted: function () {
    if(this.size=='small'){
        this.$el.style.fontSize='10px'
        this.$el.style.padding='5px';
    }else{
        this.$el.style.fontSize='20px'
        this.$el.style.padding='10px';
    }
  },
};
</script>
<style scoped>
.mc_text{
    width: 100%;
    height: 30px;
    
    font-weight: 600;
    color: rgba(0, 0, 0, 0.664);
    background-color: rgba(202, 202, 202, 0.26);
    border-left: 5px solid rgba(138, 138, 138, 0.425);
    margin: 5px 0px;
}
</style>