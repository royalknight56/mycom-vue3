<template>
  <div class="mc_select">
    <div @click="showList()" class="mc_select_input">
      {{ chosen }}
    </div>
    <div v-if="ifShow" class="mc_select_level_menu">
      <div class="mc_select_menu">
        <div
          v-for="(item, index) in label"
          :key="index"
          class="mc_select_menu_item"
          :class="{ mc_select_menu_item_chose: index == choselist[0] }"
          @mouseover="lvchose(item, 1, index)"
          @click="chose(item)"
        >
          {{ item.label }}
        </div>
      </div>
      <div v-for="(item, indextot) in lvlabel" :key="item">
        <div v-if="lvlabel[indextot + 1]" class="mc_select_menu">
          <div
            v-for="(item, index) in lvlabel[indextot + 1]"
            :key="index"
            class="mc_select_menu_item"
            :class="{
              mc_select_menu_item_chose: index == choselist[indextot + 1],
            }"
            @mouseover="lvchose(item, indextot + 2, index)"
            @click="chose(item)"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-level-select",
  props: ["checked", "value", "label", "type"],

  mixins: [setting],
  data: function () {
    return {
      //   checkedpo:this.checked
      ifShow: false,
      chosen: "点击选择",
      mouse_click: {},
      lvlabel: [],
      choselist: [],
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
    ["update:value"]: () => {
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
    lvchose: function (item, level, index) {
      this.choselist[level - 1] = index;
      if (item.value instanceof Array) {
        this.lvlabel[level] = item.value;
        this.lvlabel.splice(level + 1);
      } else {
        this.lvlabel.splice(level);
      }
      this.choselist.splice(level);
      //   this.$emit("update:value", item.value);
    },
    chose: function (item) {
      if (item.value instanceof Array) {
        if (this.type == "all") {
          this.chosen = item.label;
          this.$emit("update:value", item.value);
        }
      } else {
        this.chosen = item.label;
        this.$emit("update:value", item.value);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";
.mc_select {
  position: relative;
  width: fit-content;
  height: 100%;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
}
.mc_select_input {
  padding: 0 5px;
  box-sizing: border-box;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  background-color: black;

  outline: none;
  transition: all 0.2s;
}

.mc_select_input:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  border: $borderstyle;
}
.mc_select_level_menu {
  position: absolute;
  display: flex;
  flex-direction: row;
}
.mc_select_menu {
  width: max-content;

  background-color: white;
  border: $borderstyle;

  outline: none;
  animation: mc_radio_cir_cenan 0.1s linear;
}
.mc_select_menu_item_chose {
  background-color: $black;
  color: $whitecolor;
}
.mc_select_menu_item {
  padding: 6px;
  border-bottom: $borderstyle;
}
// .mc_select_menu_item:hover {
//   background-color: aliceblue;
// }
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