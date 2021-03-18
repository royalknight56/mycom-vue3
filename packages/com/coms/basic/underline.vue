<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-28 21:12:56
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-17 22:51:22
-->
<template>
      <div :id="hash" class="mc_text" :href="'#'+hash">
          <slot></slot>
      </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-title",
  props:['size','hash'],
  mixins:[setting],
  data:function(){
      return{
          
      }
  },
  mounted: function () {
    if(this.size=='small'){
        this.$el.style.fontSize='10px'
        this.$el.style.padding='5px';
    }else if(this.size=='middle'){
        this.$el.style.fontSize='20px'
        this.$el.style.padding='5px';
    }
  },
};
</script>
<style scoped>
.mc_text{
    width: 100%;
    height: max-content;
    
    font-weight: 600;
    font-size: 30px;
    padding:10px;
    color: rgba(0, 0, 0, 0.664);
    /* background-color: rgba(202, 202, 202, 0.26); */
    /* border-left: 5px solid rgba(138, 138, 138, 0.425); */
    margin: 5px 0px;
}
.mc_text::before{
    display: inline;
    content: '# ';
    opacity: 0.1;
    transition: all 0.2s;
}
.mc_text:hover::before{
    opacity: 1;
}
</style>