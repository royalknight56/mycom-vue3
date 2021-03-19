<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 10:17:36
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-19 12:39:26
-->
<template>
  <div @click="chose()" class="mc_radio">
    <div class="mc_radio_cir">
      <div v-if="value == label" class="mc_radio_cir_cen"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-radio",
  props: ["checked", "value", "label"],

  mixins: [setting],
  data: function () {
    return {
      //   checkedpo:this.checked
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
      this.$emit("update:value", this.label);
    },
  },
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';
.mc_radio {
  position: relative;
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
.mc_radio::selection {
  background: none;
}
.mc_radio_cir {
  position: relative;
  width: 16px;
  height: 16px;
  background-color: $black;

  margin: 0 4px;
  border-radius: 50%;
}
.mc_radio_cir_cen {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: $white;
  border-radius: 50%;
  animation: mc_radio_cir_cenan 0.2s;
}

</style>
<style>
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