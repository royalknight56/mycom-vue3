<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 17:07:32
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-05 15:03:25
-->
<template>
  <div v-if="alertShow" class="mc_alert_basic">
    <div class="mc_alert_name">
      {{ message.name }}
    </div>
    <div class="mc_alert_text">
      {{ message.text }}
    </div>

    <div @click="hidden(index)" class="mc_right_alert_close">×</div>

  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-alert-basic",
  mixins: [setting],
  data: function () {
    return {
      message: {},
      alertShow: false,
    };
  },

  mounted: function () {

  },
  beforeUnmount:function(){
      
  },
  methods: {
    hidden(){
      this.alertShow=false
    },
    show(opt) {
      this.message = opt;

      if (this.alertShow) {
        //
      } else {
        this.alertShow = true;
        // setTimeout(() => {
        //   this.alertShow = false;
        // }, 2000);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';

.mc_alert_basic {
  position: fixed;

  width: 400px;
  height: 200px;

  left: 50%;
  top: 50%;

  transform: translateY(-50%) translateX(-50%);

  background-color: rgb(255, 255, 255);
  border:$borderstyle;
  overflow: hidden;

  text-align: center;
  line-height: 60px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.192);

  animation: topalertan 0.2s;

  z-index: inherit;
}
.mc_alert_name{
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    background-color:  $black;
    color: $whitecolor ;
}
.mc_alert_text{
    position: absolute;
    top: 50px;
    width: 100%;
    height: 100%;
    background-color: $white;
}

@keyframes topalertan {
    0%{
        opacity: 0;
        transform:translateX(-50%) translateY(-100%);
    }
    100%{
        opacity: 1;
        transform: translateX(-50%) translateY(-50%);
    }
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