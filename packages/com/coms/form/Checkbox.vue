<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 10:17:36
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-01 12:57:42
-->
<template>
  <div @click="chose()" class="mc_checkbox">
    <div class="mc_checkbox_cir">
      <div v-if="ifChose" class="mc_checkbox_cir_cen"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-checkbox",
  props: ["checked", "value", "label"],

  mixins: [setting],
  data: function () {
    return {
      //   checkedpo:this.checked
      ifChose:false,
    };
  },
  mounted: function () {

  },
  emits: {
    ['update:value']: () => {
      return true;
    },
  },
  methods: {
    chose: function () {
        var temp=this.value;
        if(temp.indexOf(this.label)==-1){
            temp.push(this.label)
            this.ifChose=true
        }else{
            temp.splice(temp.indexOf(this.label),1)
            this.ifChose=false
        }
      this.$emit("update:value", temp);
    },
  },
};
</script>
<style scoped>
.mc_checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
.mc_checkbox::selection {
  background: none;
}
.mc_checkbox_cir {
  position: relative;
  width: 16px;
  height: 16px;
  background-color: rgba(127, 193, 255, 0.521);
  margin: 0 4px;
}
.mc_checkbox_cir_cen {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: rgb(255, 255, 255);
  animation: mc_radio_cir_cenan 0.2s;
}
@keyframes mc_radio_cir_cenan {
  0% {
    width: 1px;
    height: 1px;
  }
  100% {
    width: 10px;
    height: 10px;
  }
}
</style>