<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-05 10:23:28
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-16 21:15:57
-->
<template>
  <div ref="mainin" class="mc_table">
    <div class="table_prop table_row">
      <div
        class="table_column prop_column"
        v-for="(row, index1) in prop"
        :key="index1"
      >
        {{ row }}
      </div>
    </div>
    
    <div class="table_row" v-for="(row, index1) in value" :key="index1">
      
      <div class="table_column" v-for="(column, index2) in row" :key="index2">
        <div
          @click="chose(column, index1, index2)"
          @dblclick="edit(column, index1, index2, $event)"
          :class="{
            table_item_cross: chosex == index1 || chosey == index2,
            table_item_chose: chosex == index1 && chosey == index2,
          }"
          class="table_item"
        >
          <input
            ref="table_input"
            @blur="blurfun()"
            @keyup.enter="endedit()"
            v-model="changevalue"
            v-if="editx == index1 && edity == index2"
            class="table_item_input"
          />
          <!-- :value="column ? column : null" -->
          {{ column ? column : null }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import setting from "../js/setting";
export default {
  name: "mc-table",
  props: ["value", "prop", "editable"],

  // mixins: [setting],
  data: function () {
    return {
      chosex: -1,
      chosey: -1,
      editx: -1,
      edity: -1,
      changevalue: "",
    };
  },
  mounted: function () {},
  emits: {
    ["update:value"]: () => {
      return true;
    },
  },
  methods: {
    endedit() {
      let re = JSON.parse(JSON.stringify(this.value));
      re[this.editx][this.edity]= this.changevalue;
      this.$emit("update:value",re);
      this.$refs.table_input.blur();
    },
    blurfun() {
      this.editx = -1;
      this.edity = -1;
    },
    chose(column, index1, index2) {
      this.chosex = index1;
      this.chosey = index2;
    },
    edit(column, index1, index2) {
      if (this.editable == "") {
        this.changevalue = column;
        this.editx = index1;
        this.edity = index2;
        this.$nextTick(() => {
          this.$refs.table_input.focus();
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";
.mc_table{
  width: min-content;
  display: table;
}
.table_row {
   display: table-row;
  // display: flex;
  // flex-direction: row;
}

.table_column {
   display: table-cell;
  // display: flex;
  // flex-direction: column;

  width: 100%;
  height: 30px;
  border: $borderstyle;
  text-align: center;
  transition: $alltransition;
  white-space: nowrap;
}
.table_column:hover {
  background-color: $hovercolor;
}
.table_item_cross {
  background-color: rgb(230, 230, 230);
}
.table_item_chose {
  background-color: rgb(192, 192, 192);
}
.table_item_input {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
}

.table_item {
  overflow: hidden;
  position: relative;
  height: 100%;
  
}
.prop_column {
  width: 100%;
  background-color: $black;
  color: $whitecolor;
  // width: 50px;
  // height: 30px;
  // border: $borderstyle;
}
.prop_column:hover {
  background-color: $middlecolor;
  color: $whitecolor;
  // width: 50px;
  // height: 30px;
  // border: $borderstyle;
}
</style>