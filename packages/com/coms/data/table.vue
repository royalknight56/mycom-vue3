<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-05 10:23:28
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-05 11:16:48
-->
<template>
  <div ref='mainin' class="mc_table">
      <div class="table_prop table_row">
          <div class="table_column prop_column" v-for="(row, index1) in prop" :key="index1">
              {{row}}
        </div>
      </div>
      <div class="table_row" v-for="(row, index1) in value" :key="index1">
        <div class="table_column" v-for="(column, index2) in row" :key="index2">
          <div @click="chose(column)" class="table_item">
            {{ column ? column : null }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import setting from "../js/setting";
export default {
  name: "mc-table",
  props: ["value","prop"],

  mixins: [setting],
  data: function () {
    return {

    };
  },
  mounted: function () {
    
  },
  emits: {
    ["update:value"]: () => {
      return true;
    },
  },
  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';
.table_row{
    display: flex;
    flex-direction: row;
}

.table_column{
    // display: flex;
    // flex-direction: column;
    width: 50px;
    height: 30px;
    border: $borderstyle;
    text-align: center;
    transition: $alltransition;
}
.table_column:hover{
    background-color: $hovercolor;
}
.prop_column{
    background-color: $black ; 
    color: $whitecolor;
    // width: 50px;
    // height: 30px;
    // border: $borderstyle;
}
.prop_column:hover{
    background-color: $middlecolor ; 
    color: $whitecolor;
    // width: 50px;
    // height: 30px;
    // border: $borderstyle;
}
</style>