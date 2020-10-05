<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 21:44:42
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-05 14:57:55
-->
<template>
  <div class="mc_top_alert_outer">
    <div v-for='item  in topalert' :key='item' class="mc_top_alert_item" :class="item.ifhidden?'mc_top_alert_hidden':''">
      <div v-if="item.ifShow" class="mc_top_alert">
        {{ item.message }}
      </div>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-top-alert",
  mixins: [setting],
  data: function () {
    return {
      alertShow: false,
      message: "",
      topalert:[],
    };
  },
  mounted: function () {},
  methods: {
    show(opt) {
        this.topalert.push({
            message:opt,
            ifShow:true,
        })
        setTimeout(() => {
            this.topalert[0].ifhidden=true;
        }, 1800);

        setTimeout(() => {
            this.topalert.splice(0,1)
        }, 2000);

    },
  },
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';

.mc_top_alert_outer{
    left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 20px;
  display: flex;
  flex-direction: column;
}
.mc_top_alert {
  position: relative;
  width: 300px;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
  background-color: $black;
  border: $borderstyle;
  color: $white ;
  // border-radius: 6px;
  text-align: center;
  overflow: hidden;
  animation: topalertan 0.2s;
  transition: $alltransition;
}
@keyframes topalertan {
    0%{
        opacity: 0;
        transform: translateY(-100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
.mc_top_alert_hidden .mc_top_alert{
  opacity: 0;
  transform: translateY(-100%);
}
</style>