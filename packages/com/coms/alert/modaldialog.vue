<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-03 20:23:10
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 20:33:10
-->
<template>
  <div v-if="alertShow" class="mc_alert_basic">
    <div class="mc_alert_name">
      {{ message.name }}
    </div>
    <div class="mc_alert_text">
      {{ message.text }}
    </div>
    <div class="mc_alert_button_group">
      <div @click="resolve();alertShow = false" class="mc_alert_button mc_alert_button_res">确认</div>
      <div @click="reject();alertShow = false" class="mc_alert_button mc_alert_button_rej">拒绝</div>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-alert-modal",
  mixins: [setting],
  data: function () {
    return {
      message: {},
      alertShow: false,
      resolve: null,
      reject: null,
    };
  },

  mounted: function () {},
  beforeUnmount: function () {
    
  },
  methods: {

    show(opt, resolve, reject) {
      this.message = opt;
      this.resolve = resolve;
      this.reject = reject;

      if (this.alertShow) {
        //
      } else {
        this.alertShow = true;
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
  border: $borderstyle;
  overflow: hidden;

  text-align: center;
  line-height: 60px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.192);

  animation: topalertan 0.2s;

  z-index: inherit;
}
.mc_alert_name {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: $black ;
  color: $whitecolor ;
  // border-bottom: 1px solid black;
}
.mc_alert_text {
  position: absolute;
  top: 50px;
  width: 100%;
  height: 100%;
  background-color: $white;
}

@keyframes topalertan {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }
}
.mc_alert_button_group{
  position: absolute;
  bottom: 2px;
  display: flex;
  flex-direction: row;
}
.mc_alert_button{
  width: 60px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: $borderstyle;
  cursor: pointer;
  transition:$alltransition;
}
.mc_alert_button_res{
  color:$black ;
  background-color: $whitecolor ;
}
.mc_alert_button_res:hover{
  color:$white ;
  background-color: $black ;
}
.mc_alert_button_rej{
  color:$white ;
  background-color: $black;
}
// .mc_alert_button_rej:hover{
//   color:$black ;
//   background-color: $whitecolor ;
// }
// .mc_alert_button:hover{
//   filter: brightness(110%);
// }
</style>