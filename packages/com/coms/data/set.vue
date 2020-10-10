<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-08 21:15:06
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-10 14:30:48
-->
<template>
  <div class="mc_set_out">
    <div v-if="name" class="set_header">{{ name }}</div>
    <div class="mc_set myscrollbar">
      <div
      @click="chose(row, index1)"
          @dblclick="edit(row, index1, $event)"
       class="set_row" v-for="(row, index1) in value" :key="index1">
        <input
            ref="list_input"
            @blur="blurfun()"
            @keyup.enter="endedit()"
            v-model="changevalue"
            v-if="editx == index1"
            class="list_item_input"
          />
        {{ row }}
      </div>
    </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-set",
  props: ["value", "name","editable"],
  mixins: [setting],
  data: function () {
    return {
      editx:-1,
      chosex:-1,
      changevalue:null,
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
      if(typeof re[this.editx]=='number'){
        re[this.editx]=Number(this.changevalue);
      }else{
        re[this.editx]=this.changevalue
      }
      
      re=Array.from(new Set(re))
      this.$emit("update:value",re);
      this.$refs.list_input.blur();
    },
    blurfun() {
      this.editx = -1;
    },
    chose(column, index1) {
      this.chosex = index1;
    },
    edit(column, index1) {
      if (this.editable == "") {
        this.changevalue = column;
        this.editx = index1;
        this.$nextTick(() => {
          this.$refs.list_input.focus();
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";
.mc_set_out {
  width: 50px;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.mc_set {
  width: 100%;
  height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  border: $borderstyle;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  // grid-auto-columns: 1fr 1fr 1fr;
}

.set_row {
  position: relative;
  width: 30px;
  height: 30px;  
  border: $borderstyle;
  text-align: center;
  transition: $alltransition;
}
.set_header {
  width: 100%;
  height: 30px;
  border: $borderstyle;
  background-color: $black;
  color:$white ;
  text-align: center;
  transition: $alltransition;
}
.set_row:hover {
  background-color: $hovercolor;
}
.list_item_input{
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