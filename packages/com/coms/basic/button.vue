<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 16:10:15
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-03 17:12:07
-->
<template>
    <div :class="[size ? className[size] : 'small_button',type ? typeName[type] : 'none']" class="mc_button">
      <slot></slot>
    </div>

</template>

<script>
export default {
  name: "mc-button",
  props: ["width", "size" ,"type"],
  data: function () {
    return {
      className: {
        small: "small_button",
        large: "large_button",
      },
      typeName:{
          none:'none',
          red:'red',
          blue:'blue'
      }
    };
  },
  mounted: function () {},
};
</script>
<style scoped>
.mc_button {
  height: 100%;
  position: relative;
  margin: 10px auto;
  margin-top: 10px;
  
  border: 1px solid rgba(80, 80, 80, 0.486);
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
}
.mc_button:hover{
    background-color: aliceblue;
}
.mc_button::selection{
  display: none;
}
.small_button {
  padding: 5px;
  width: 100px;
}
.large_button {
  padding: 10px;
  width: 200px;
}
.red{
    background-color:rgba(206, 71, 61, 0.555);
}
.blue{
    background-color:rgba(61, 140, 206, 0.555);
}
.none{
    background-color: #e8e8e8;
}
</style>