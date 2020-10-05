<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-03 18:24:07
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 20:43:53
-->
<template>
  <div class="mc_percent_pie">
    <div class="mc_percent_pie_ri"></div>
    <div ref="rp" class="mc_percent_pie_rp"></div>
    <div ref="li" class="mc_percent_pie_li"></div>
    <!-- <div ref="white"  class="mc_percent_pie_white_out">
          <div class="mc_percent_pie_in mc_percent_pie_white">{{text}}</div>
      </div>
    <div ref='black' class="mc_percent_pie_in mc_percent_pie_black">{{text}}</div>-->
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-percent-pie",
  mixins: [setting],
  props: {
    process: {
      type: Number,
      default: 0.5,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    changeTo(process) {
      if (process <= 0.5) {
        this.$refs.rp.style.transform = "rotate(" + process + "turn)";
        this.$refs.li.style.transform = "rotate(" + 0 + "turn)";

        this.$refs.li.style.zIndex = "1";
      } else {
        this.$refs.li.style.transform = "rotate(" + (0.5 + process) + "turn)";
        this.$refs.rp.style.transform = "rotate(" + 0.5 + "turn)";

        this.$refs.li.style.zIndex = "3";
      }
    },
  },
  mounted: function () {
    // var init = parseFloat(this.process);
    this.changeTo(this.process);
  },
  watch: {
    process: function () {
      this.changeTo(this.process);
    },
  },
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';

.mc_percent_pie {
  z-index: 0;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: $middlecolor;
  transition: transform 0.2s;
  transform: scale(1);
  /* background-image: linear-gradient(to right, #655 50%, #655 0); */
  /* background-image: linear-gradient(to right, transparent 50%, #655 0); */
}
.mc_percent_pie:hover{
    transform: scale(1.1);
}
.mc_percent_pie_ri {
  position: absolute;
  top: 0;
  content: "";
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0/50%;
  background-color: $pblack ;
  transform-origin: left;
  transform: rotate(0turn);
  z-index: 1;
  width: 50px;
}
.mc_percent_pie_li {
  position: absolute;
  top: 0;
  content: "";
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0/50%;
  background-color: $pblack ;
  transform-origin: left;

  transform: rotate(0.5turn);
  z-index: 1;
  width: 50px;
}
.mc_percent_pie_rp {
  position: absolute;
  top: 0;
  content: "";
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0/50%;
  background-color: inherit;
  transform-origin: left;

  transform: rotate(0.5turn);
  z-index: 2;
  width: 50px;
}
</style>