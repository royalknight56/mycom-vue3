<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 21:44:42
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-02 22:33:47
-->
<template>
  <div class="mc_top_alert_outer">
    <div v-for='(item, index ) in topalert' :key='index' class="mc_top_alert_item">
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
            // console.log(index-1)
            this.topalert.splice(0,1)
        //   this.alertShow = false;
        }, 2000);

    //   this.message = opt;
    //   //   console.log(this.alertShow)
    //   if (this.alertShow) {
    //     //
    //   } else {
    //     this.alertShow = true;
        
    //   }
    },
  },
};
</script>
<style scoped>
.mc_top_alert_outer{
    left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 20px;
  display: flex;
  flex-direction: column;
}
.mc_top_alert {
  width: 300px;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
  background-color: rgb(122, 202, 255);
  border: 1px solid black;
  border-radius: 6px;
  text-align: center;
  overflow: hidden;
  animation: topalertan 0.2s;
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
</style>