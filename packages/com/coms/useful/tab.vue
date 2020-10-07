<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-28 09:10:42
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-03 22:50:08
-->
<template>
  <div class="outer">
    <button
      class="mc_tab_button mc_tab_button_left"
      id="slider-box"
      @click="changeTo(-1)"
    >
      ←
    </button>
    <div ref="mc_tab" class="mc_tab">
      <div ref="mc_flex" class="mc_flex">
        <slot current="4"> </slot>
      </div>
    </div>
    <button
      class="mc_tab_button mc_tab_button_right"
      id="slider-box"
      @click="changeTo(1)"
    >
      >
    </button>
  </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-tab",
  props: ["text",'value'],
  mixins:[setting],
  data: function () {
    return {
      ifLocked: false,
      current: 0,
      number: 0,
    };
  },
  emits: {
    ['update:value']: () => {
      return true;
    },
  },

  methods: {
    changeTo: function (num) {
      if (this.current + num >= this.number || this.current + num < 0) {
        this.current;
      } else {
        this.current += num;
        this.$emit('update:value',this.current)

        if (isNaN(parseInt(this.$refs.mc_tab.style.left))) {
          this.$refs.mc_tab.style.left = 0 + "%";
          this.$refs.mc_tab.style.left = -this.current * 100 + "%";
        } else {
          this.$refs.mc_tab.style.left = -this.current * 100 + "%";
        }
      }
    },
  },
  mounted: function () {
    var temp=this.$slots;
    
    let ar = temp.default()

    this.number = ar.length;
    this.$refs.mc_flex.style.width = this.number * 100 + "%";
  },
};
</script>
<style scoped>
.outer {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
  background-color: rgba(138, 138, 138, 0.253);
}
.mc_tab {
  position: relative;
  height: 100%;
  width: 100%;
  left: 0;
  transition: all 0.2s;
  
}
.mc_flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
}

.mc_flex .tabpage_continer {
  width: 100%;
  height: 100%;
}
.mc_tab_button {
  position: relative;
  background-color: rgba(240, 248, 255, 0.39);
  border: none;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.mc_tab_button_left {
  position: absolute;
  left: 0;
}
.mc_tab_button_right {
  position: absolute;
  right: 0;
}
</style>