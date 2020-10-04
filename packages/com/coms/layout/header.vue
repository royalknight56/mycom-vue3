<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-03 20:49:17
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 10:40:17
-->
<template>
  <div
    :class="hidden ? 'mc_header_hidden' : 'mc_header_show'"
    class="mc_header"
  >
    <div class="mc_header_in">
      <div class="mc_header_for">
        <div
          @click="routeTo(item.path)"
          v-for="(item, index) in menu"
          :key="index"
          class="mc_header_item"
        >
          {{ item.name }}
        </div>
      </div>
      <!-- <slot></slot> -->
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-header",
  mixins: [setting],
  props: ["menu"],
  data: function () {
    return {
      hidden: false,
      startY: 0,
    };
  },
  methods: {
    routeTo: function (path) {
      document.location.hash = path;
    },
    lis: function (e) {
      if (e.deltaY > 0) {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    },
    touch: function (e) {
      if (e.touches[0].pageY -this.startY> 0) {
        this.hidden = false;
      } else {
        this.hidden = true;
      }
      this.startY=e.touches[0].pageY
    },
  },
  mounted: function () {
    // document.addEventListener("touchstart", this.touch);
    document.addEventListener("touchmove", this.touch);
    document.addEventListener("mousewheel", this.lis);
  },
  unmounted: function () {

    document.removeEventListener("touchmove", this.touch);
    document.removeEventListener("mousewheel", this.lis);
    
  },
};
</script>
<style scoped>
.mc_header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.2s;
  background-color: rgb(216, 216, 216);
  box-shadow: 0 0 5px black;
}
.mc_header_hidden {
  top: -60px;
}
.mc_header_in {
  width: 100%;
  height: 100%;
}
.mc_header_for {
  position: relative;
  left: 40%;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.mc_header_item {
  transition: all 0.1s;
  cursor: pointer;
  width: 80px;
  height: 100%;
  line-height: 40px;
}
.mc_header_item:hover {
  background-color: rgba(255, 255, 255, 0.589);
}
</style>