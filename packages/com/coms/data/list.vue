<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-08 19:23:41
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-08 21:06:43
-->
<template>
  <div class="mc_list_out">
    <div v-if="name" class="list_header">{{ name }}</div>
    <div class="mc_list myscrollbar">
      <div class="list_row" v-for="(row, index1) in value" :key="index1">
        {{ row }}
      </div>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-list",
  props: ["value", "name"],

  mixins: [setting],
  data: function () {
    return {};
  },
  mounted: function () {},
  emits: {
    ["update:value"]: () => {
      return true;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";
.mc_list_out {
  width: 50px;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.mc_list {
  width: 100%;
  height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  border: $borderstyle;
  position: relative;
}

.list_row {
  width: 100%;
  height: 30px;
  border: $borderstyle;
  text-align: center;
  transition: $alltransition;
}
.list_header {
  width: 100%;
  height: 30px;
  border: $borderstyle;
  background-color: $black;
  color:$white ;
  text-align: center;
  transition: $alltransition;
}
.list_row:hover {
  background-color: $hovercolor;
}


.myscrollbar::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 7px;
  /*高宽分别对应横竖滚动条的尺寸*/
  scrollbar-base-color: rgba(12, 110, 196, 0.226);
  background-color: rgba(17, 95, 126, 0.2);
  height: 4px;
  transition: all 0.2s;
}
.myscrollbar::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  background-color: rgba(0, 0, 0, 0.438);
  transition: all 0.2s;
}
.myscrollbar::-webkit-scrollbar-thumb:hover {
  /*滚动条里面小方块*/
  background-color: rgba(102, 102, 102, 0.315);
}
.myscrollbar::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 0;
  background-color: rgba(241, 148, 179, 0.07);
  transition: all 0.2s;
}
.myscrollbar::-webkit-scrollbar-track:hover {
  background-color: rgba(47, 70, 85, 0.11);
}

</style>