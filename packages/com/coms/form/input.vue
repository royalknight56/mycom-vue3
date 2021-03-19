<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 10:04:12
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-18 18:09:59
-->
<template>
  <div class="mc_input">
    <input
      class="mc_input_input"
      @input="$emit('update:value', $event.target.value)"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-input",
  mixins: [setting],
  props: ["type", "placeholder", "value"],
  emits: {
    ["update:value"]: () => {
      return true;
    },
  },

  data: function () {
    return {};
  },
  mounted: function () {},
};
</script>
<style scoped>
.mc_input {
  width: 200px;
  height: 30px;
  margin: 2px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.mc_input_input {
  /* padding: 6px; */
  /* margin: 2px; */
  width: 100%;
  height: 100%;
  background-color: rgba(80, 80, 80, 0.007);
  border: 1px solid rgba(0, 0, 0, 0.233);
  border-radius: 0;
  outline: none;
}
.mc_input_input:hover {
  border: 1px solid rgba(0, 0, 0, 0.493);
}
.mc_input_input:focus {
  background-color: rgba(255, 255, 255, 0.08);
}
</style>