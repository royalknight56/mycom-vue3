<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 18:58:55
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 22:02:12
-->
<template>
  <div class="out">
    <div @click="link_click()" class="mc_link" :class="type" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-link",
  props: ["type","href"],
  mixins: [setting],
  setup(props){
    let link_click=function(){
      window.open(props.href)
    }
    return{link_click}
  }
};
</script>
<style scoped>
.out {
  position: relative;
  box-sizing: border-box;
}
.mc_link {
  box-sizing: border-box;
  cursor: pointer;
  width: fit-content;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.664);
  margin: 5px 0px;
}
.mc_link:hover {
  border-bottom: 1px solid rgba(138, 138, 138, 0.781);
}
.red{
    color: red;
}
.red:hover{
    border-bottom: 1px solid rgba(255, 85, 85, 0.781);
}
.blue{
    color: blue;
}
.blue:hover{
    border-bottom: 1px solid rgba(98, 98, 255, 0.705);
}
.yellow{
    color: rgb(204, 159, 13);
}
.yellow:hover{
    border-bottom: 1px solid rgba(163, 120, 0, 0.781);
}
</style>