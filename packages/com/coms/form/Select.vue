<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 12:50:50
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-03-19 12:52:13
-->
<template>
  <div class="mc_select">
    <div @click="showList()" class="mc_select_input">
      {{ chosen }}
    </div>

    <div v-if="ifShow" class="mc_select_menu">
      <div
        v-for="(item, index) in label"
        :key="index"
        class="mc_select_menu_item"
        @click="chose(item)"
      >
        {{ item.label }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-select",
  props: ["checked", "value", "label"],

  mixins: [setting],
  data: function () {
    return {
      //   checkedpo:this.checked
      ifShow: false,
      chosen: "点击选择",
      mouse_click: {},
    };
  },
  mounted: function () {
    document.body.addEventListener("click", even, true);
    var $this = this;
    function even() {
      for (let key in $this.mouse_click) {
        $this.mouse_click[key]();
      }
    }

    this.chosen = this.label[0].label;
  },
  emits: {
    ['update:value']: () => {
      return true;
    },
  },
  methods: {
    $mc_mouse_on: function (name, event) {
      this.mouse_click[name] = event;
    },
    showList: function () {
      this.ifShow = true;

      this.$mc_mouse_on("select", () => {
        this.ifShow = false;
      });
    },
    chose: function (item) {
      this.chosen = item.label;
      this.$emit("update:value", item.value);
    },
  },
};
</script>
<style scoped>
.mc_select {
  position: relative;
  width: fit-content;
  height: 100%;
  white-space: nowrap;

  cursor: pointer;
}
.mc_select_input {
  padding: 0 5px;
  box-sizing: border-box;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  background-color: black;

  outline: none;
  transition: all 0.2s;
}

.mc_select_input:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  border: 1px solid rgba(49, 149, 196, 0.555);
}
.mc_select_menu {
  width: max-content;
  position: absolute;
  z-index: 1;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.233);
  border-radius: 4px;
  outline: none;
  animation: mc_select_menu_main_cenan 0.1s linear;
}
.mc_select_menu_item {
  padding: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.137);
}
.mc_select_menu_item:hover {
  background-color: aliceblue;
}
.mc_select_input::selection {
  background: none;
}
.mc_select_menu::selection {
  background: none;
}
.mc_select_menu_item::selection {
  background: none;
}

</style>
<style>
@keyframes mc_select_menu_main_cenan {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>