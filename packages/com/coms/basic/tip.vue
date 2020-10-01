<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 18:58:55
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-01 20:13:57
-->
<template>
    <div @mouseover="ifShow=true" @mouseleave="ifShow=false" class="mc_tip" >
        <div class="mc_tip_in">
            <slot></slot>
        </div>
        <div v-if="ifShow" class="mc_tip_line">
            {{text}}
        </div>
    </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-tip",
  props: ["type","text"],
  mixins: [setting],
  data: function () {
    return {
        ifShow:false
    };
  },
  mounted: function () {},
};
</script>
<style scoped>

.mc_tip {
 position: relative;
}

.mc_tip_in{

}
.mc_tip_line{
    position: absolute;
    padding: 3px;
    border-radius: 4px;
    top: 0;
    height: 24px;
    width: max-content;
    transform: translateY(-100%);
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.74);
    color: white;
    animation: mc_tip_linean 0.2s;
}
.mc_tip_line::after{
    position: absolute;
    content: ' ';
    top: 27px;
    display: block;
    border: 12px solid black;
    border-color: rgba(0, 0, 0, 0.74) transparent transparent transparent;
    /* border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent; */
    width: 0px;
    height: 0px;
}
@keyframes mc_tip_linean {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>