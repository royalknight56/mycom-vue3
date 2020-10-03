<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-03 16:00:25
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-03 17:18:15
-->
<template>
  <div class="mc_right_alert_outer">
    <div
      v-for="(item, index) in rightalert"
      :key="index"
      class="mc_rightp_alert_item"
    >
      <div v-if="item.ifShow" class="mc_right_alert">
        {{ item.message }}
      </div>
      <div @click="hidden(index)" class="mc_right_alert_close">×</div>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-right-alert",
  mixins: [setting],
  data: function () {
    return {
      alertShow: false,
      message: "",
      rightalert: [],

    };
  },
  mounted: function () {
    
  },
  methods: {
    
    hidden(index) {
      this.rightalert.splice(index, 1);
    },
    show(opt) {
      this.rightalert.push({
        message: opt,
        ifShow: true,
      });

      // setTimeout(() => {
      //     // console.log(index-1)
      //     this.rightalert.splice(0,1)
      // //   this.alertShow = false;
      // }, 4000);
    },
  },
};
</script>
<style scoped>
.mc_right_alert_outer {
  position: fixed;
  right: 10px;
  top: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
}
.mc_rightp_alert_item {
  position: relative;
}
.mc_right_alert {
  width: 200px;
  height: 40px;
  padding: 6px;
  margin: 10px 0;
  background-color: rgba(159, 217, 255, 0.822);
  border: 1px solid black;
  border-radius: 6px;
  text-align: center;
  overflow: hidden;
  animation: topalertan 0.2s;
}
.mc_right_alert_close {
  color: white;
  position: absolute;
  right: 4px;
  top: 10px;

  width: 20px;
  height: 23px;
  line-height: 20px;

  font-weight: 600;
  font-size: 20px;
  transform: rotateZ(0deg);
  transform-origin: center;
  text-align: center;

  transition: all 0.2s;
  cursor: pointer;
}
.mc_right_alert_close:hover {
  transform: rotateZ(180deg);
}
@keyframes topalertan {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>