<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 19:29:40
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 17:06:14
-->

<template>
  <div class="out">
    <div class="mc_tag" :class="type" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-tag",
  props: ["type"],
  mixins: [setting],
  data: function () {
    return {
    };
  },
  mounted: function () {},
};
</script>
<style scoped>
.out {
  position: relative;
  box-sizing: border-box;
}
.mc_tag {
  box-sizing: border-box;

  width: fit-content;
  height: fit-content;
  text-align: center;
  line-height: 24px;
  font-size: 15px;
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* border-radius: 4px; */
  padding: 4px;
  color: rgba(0, 0, 0, 0.8);
  margin: 5px 0px;
}
.mc_tag:hover {
  /* border-bottom: 1px solid rgba(138, 138, 138, 0.781); */
}
.black{
    background-color: rgb(32, 32, 32);
    color: rgb(255, 255, 255);
}


.red{
    background-color: rgb(255, 163, 163);
    color: rgb(255, 255, 255);
}
.red:hover{
    /* border-bottom: 1px solid rgba(255, 85, 85, 0.781); */
}
.blue{
    background-color: rgb(109, 214, 255);
    color: #ffffff;
}
.blue:hover{
    /* border-bottom: 1px solid rgba(98, 98, 255, 0.705); */
}
.yellow{
    color: rgb(204, 159, 13);
}
.yellow:hover{
    /* border-bottom: 1px solid rgba(163, 120, 0, 0.781); */
}
</style>