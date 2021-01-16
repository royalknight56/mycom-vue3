<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-03 16:00:25
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-10 18:51:48
-->
<template>
  <div class="mc_right_alert_outer">
    <div
      v-for="(item, index) in rightalert"
      :key="item"
      class="mc_rightp_alert_item"
      
    >
      <div v-if="item.ifShow" :class="item.ifhidden?'mc_rightp_alert_item_close':''" class="mc_right_alert">
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
      idcount: 0,
      rightalert: [],

    };
  },
  mounted: function () {
    
  },
  methods: {
    
    hidden(index) {
      this.rightalert[index].ifhidden=true
      setTimeout(() => {
          this.rightalert.splice(index, 1);
      }, 200);
    },
    show(opt,timeout) {
      var localid = this.idcount;
      this.rightalert.push({
        message: opt,
        ifShow: true,
        id: localid,
      });

      if (timeout) {
        setTimeout(() => {
          var index = this.rightalert.findIndex((item) => {
            return item.id == localid;
          });
          if(this.rightalert[index]){
            this.rightalert[index].ifhidden = true;
          }
        }, timeout - 200);
        setTimeout(() => {
          var index = this.rightalert.findIndex((item) => {
            return item.id == localid;
          });
          this.rightalert.splice(index, 1);
        }, timeout);
      }
      this.idcount++;

    },
  },
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';

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
  color: $whitecolor;
  width: 200px;
  height: 40px;
  padding: 6px;
  margin: 10px 0;
  background-color: $hoverblackcolor;
  border: $borderstyle ;

  text-align: center;
  overflow: hidden;
  animation: topalertan 0.2s;
  transition: all 0.2s;
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