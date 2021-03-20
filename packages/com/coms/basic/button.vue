<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 16:10:15
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-20 10:39:43
-->
<template>
<div class="mc_button_outer">
  <div
    :class="[
      size ? className[size] : 'small_button',
      type ? typeName[type] : 'none',
    ]"
    class="mc_button"
  >
    <slot></slot>
  </div>
</div>
  
</template>

<script>
export default {
  name: "mc-button",
  props: ["width", "size", "type",'round'],
  props:{
    type: {
      type: String,
      default: "none",
    },
    size: {
      type: String,
      default: "small",
    },
  },
  data: function () {
    return {
      className: {
        small: "small_button",
        large: "large_button",
      },
      typeName: {
        none: "none",
        red: "red",
        blue: "blue",
      },
    };
  },
  mounted: function () {
    // console.log(this.$props)
    if(this.$props.round==''){
      //圆形
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";
.mc_button_outer{
  height:fit-content;
  width: fit-content;
  margin-top: 3px;
  margin-bottom: 3px;
}
.mc_button {
  height: 100%;
  position: relative;
  // margin: 10px auto;
  // margin-top: 10px;
  user-select: none;
  /* border: 1px solid rgba(80, 80, 80, 0.486); */
  border: $borderstyle;
  color: $whitecolor;
  transition: all 0.2s;
  text-align: center;
  cursor: pointer;
  border-radius: 0;
}
.mc_button:hover {
  background-color: $whitecolor;
  color: $black;
}

.small_button {
  padding: 5px;
  width: fit-content;
  height: 20px;
}
.large_button {
  padding: 10px;
  width: fit-content;
  height: 30px;
}
.red {
  background-color: rgba(206, 71, 61, 0.555);
}
.blue {
  background-color: rgba(61, 140, 206, 0.555);
}
.none {
  background-color: $black;
}
</style>