<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 21:44:42
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 22:55:25
-->
<template>
  <div class="mc_top_alert_outer">
    <div
      v-for="(item, index) in topalert"
      :key="item"
      class="mc_top_alert_item"
      :class="item.ifhidden ? 'mc_top_alert_hidden' : ''"
    >
      <div v-if="item.ifShow" class="mc_top_alert">
        {{ item.message }}
      </div>
      <div @click="hidden(index)" class="mc_right_alert_close">×</div>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-top-alert",
  mixins: [setting],
  props: {
    timeout: {
      type: Number,
      default: 2000,
    },
  },
  data: function () {
    return {
      alertShow: false,
      message: "",
      idcount: 0,
      topalert: [],
    };
  },
  mounted: function () {},
  methods: {
    hidden(index) {
      this.topalert[index].ifhidden=true
      setTimeout(() => {
          this.topalert.splice(index, 1);
      }, 200);
    },

    show(opt, timeout) {
      var localid = this.idcount;
      this.topalert.push({
        id: localid,
        message: opt,
        ifShow: true,
      });
      if (timeout) {
        setTimeout(() => {
          var index = this.topalert.findIndex((item) => {
            return item.id == localid;
          });
          if(this.topalert[index]){
            this.topalert[index].ifhidden = true;
          }
        }, timeout - 200);
        setTimeout(() => {
          var index = this.topalert.findIndex((item) => {
            return item.id == localid;
          });
          this.topalert.splice(index, 1);
        }, timeout);
      }
      this.idcount++;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";

.mc_top_alert_outer {
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 20px;
  display: flex;
  flex-direction: column;
  z-index: 5;
}
.mc_top_alert_item{
  position: relative;
}
.mc_top_alert {
  position: relative;
  width: 300px;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
  background-color:$hoverblackcolor;
  border: $borderstyle;
  color: $white;
  // border-radius: 6px;
  text-align: center;
  overflow: hidden;
  animation: topalertan 0.2s;
  transition: $alltransition;
}
@keyframes topalertan {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.mc_top_alert_hidden .mc_top_alert {
  opacity: 0;
  transform: translateY(-100%);
}

.mc_rightp_alert_item_close{
  opacity: 0;
    transform: translateX(100%);
}
.mc_right_alert_close {
  color: white;
  position: absolute;
  right: 4px;
  top: 10px;

  width: 20px;
  height: 23px;
  line-height: 20px;

  user-select: none;
  font-weight: 600;
  font-size: 20px;
  transform: rotateZ(0deg);
  transform-origin: center;
  text-align: center;

  transition: all 0.2s;
  cursor: pointer;
}
.mc_right_alert_close:hover {
  transform: rotateZ(90deg);
}
</style>