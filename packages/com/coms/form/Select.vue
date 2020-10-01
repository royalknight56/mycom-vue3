<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 12:50:50
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-01 15:57:08
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
  
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; */
  cursor: pointer;
}
.mc_select_input {
  padding: 0 5px;
  box-sizing: border-box;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.233);
  border-radius: 4px;
  outline: none;
  transition: all 0.2s;
}

.mc_select_input:focus {
  border: 1px solid rgba(132, 220, 255, 0.233);
}
.mc_select_input:hover {
  border: 1px solid rgba(49, 149, 196, 0.555);
}
.mc_select_menu {
  width: max-content;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.233);
  border-radius: 4px;
  outline: none;
  animation: mc_radio_cir_cenan 0.1s linear;
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

@keyframes mc_radio_cir_cenan {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>