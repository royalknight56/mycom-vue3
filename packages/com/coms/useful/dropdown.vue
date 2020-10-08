<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-04 10:51:04
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-08 09:46:31
-->
<template>
  <div class="mc_dropdown_out">
    <div ref="drop" class="mc_dropdown">下拉刷新</div>
    <div ref="dropcir" class="mc_dropdown_cir"></div>
  </div>
</template>

<script>
var starty = 0;
var timer = new Date();
import setting from "../js/setting";
export default {
  name: "mc-dropdown",
  mixins: [setting],
  props: ["menu"],
  data: function () {
    return {
      hidden: false,
      start: {
        y: 0,
        x: 0,
      },
      overy: 0,
      isDrug: false,
    };
  },
  emits: {
    ["refresh"]: () => {
      return true;
    },
  },

  methods: {
    routeTo: function (path) {
      document.location.hash = path;
    },
    mousestart: function (e) {
      var ofy = 0;
      if (e.pageY) {
        ofy = e.pageY;
      } else {
        ofy = e.touches[0].pageY;
      }
      starty = ofy;
      this.isDrug = true;
    },
    mouseend: function () {
      if (parseInt(this.$refs.dropcir.style.top) > 200) {
        this.$emit("refresh");
      }
      this.$refs.dropcir.style.top = -50 + "px";
      this.isDrug = false;
    },
    mousemove: function (e) {
      if (this.isDrug) {
        var ofy = 0;
        if (e.pageY) {
          ofy = e.pageY;
        } else {
          ofy = e.touches[0].pageY;
        }
        let now = new Date();
        if (now - timer > 100) {
          timer = now;
          if (parseInt(this.$refs.dropcir.style.top) > 200) {
            this.$refs.dropcir.style.filter = "brightness(1.1)";
          } else {
            this.$refs.dropcir.style.filter = "brightness(0.6)";
          }
          this.$refs.dropcir.style.top = ofy - starty + "px";
          this.$refs.dropcir.style.transform =
            "rotateZ(" + (-((ofy - starty) * 2) ) + "deg)";
        }
      }
    },
    touch: function (e) {
      if (e.touches[0].pageY - starty > 0) {
        this.hidden = false;
      } else {
        this.hidden = true;
      }
      this.startY = e.touches[0].pageY;
    },
  },
  mounted: function () {
    this.$refs.drop.addEventListener("mousedown", this.mousestart);
    document.addEventListener("mousemove", this.mousemove);
    document.addEventListener("mouseup", this.mouseend);

    this.$refs.drop.addEventListener("touchstart", this.mousestart);
    document.addEventListener("touchmove", this.mousemove);
    document.addEventListener("touchend", this.mouseend);
  },
  unmounted: function () {
    document.removeEventListener("mousedown", this.mousestart);
    document.removeEventListener("mousemove", this.mousemove);
    document.removeEventListener("mouseup", this.mouseend);

    document.removeEventListener("touchstart", this.mousestart);
    document.removeEventListener("touchmove", this.mousemove);
    document.removeEventListener("touchend", this.mouseend);
  },
};
</script>
<style scoped>
.mc_dropdown_out{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
}
.mc_dropdown {
  width: 100%;
  height: 40px;
  color: aliceblue;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.2s;
  background: linear-gradient(rgba(0, 0, 0, 0.623), rgba(255, 255, 255, 0));
  opacity: 0;

  user-select: none;
}
.mc_dropdown:hover {
  opacity: 1;
}
.mc_dropdown_cir {
  position: relative;
  top: -50px;
  width: 50px;
  height: 50px;
  /* background-color: rgb(230, 230, 230); */
  /* border: 2px solid rgb(177, 177, 177); */
  /* box-shadow: 0 0 5px rgb(94, 94, 94); */
  border-radius: 50%;
  transition: all 0.1s linear;
  filter: brightness(0.6);
  user-select: none;
  transform: rotateZ(0deg);
  background-size: 50px;
  background-image:url('data:image/png;base64,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');
  }
</style>