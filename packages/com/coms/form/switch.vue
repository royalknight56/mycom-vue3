<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 14:15:40
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-01 15:57:16
-->
<template>
    <div @click="chose" class="mc_switch" :class="ifchose?'mc_switch_right':'mc_switch_left'">
        <div class="mc_switch_cir" :class="ifchose?'mc_switch_cir_right':'mc_switch_cir_left'">

        </div>
        <div class="mc_switch_txt">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-switch",
  mixins:[setting],
  props:['value'],
  data:function(){
      return{
          ifchose:false
      }
  },
  emits: {
    ['update:value']: () => {
      return true;
    },
  },
  mounted: function () {
    this.ifchose=this.value
  },
  methods:{
      chose:function(){
          this.ifchose=!this.ifchose
          this.$emit('update:value',this.ifchose)
      }
  }
};
</script>
<style scoped>
.mc_switch{
    width: 60px;
    height: 30px;
    
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.247);
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
}
.mc_switch_left{
    background-color: rgba(255, 102, 102, 0.726)
}
.mc_switch_right{
    background-color: rgba(100, 180, 255, 0.747);
}
.mc_switch_cir{
    position: absolute;
    top: 1px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    border: 3px solid rgba(0, 0, 0, 0.034);
    transition: all 0.3s;
}
.mc_switch_cir_left{
    left: 4px;
}
.mc_switch_cir_right{
    left: 30px;
}
.mc_switch_txt{
    position: absolute;
    left: 90px;
    top: 0;
    width: fit-content;
}
</style>