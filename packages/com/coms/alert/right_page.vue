<template>
  <div ref="mainin">
    <div @click="hidden()" class="mc_right_page_close">×</div>
    <div class="mc_right_page_outer">
        <slot></slot>
    </div>
    <div @click="hidden()" class="mc_right_page_close_out"></div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-right-page",
  mixins: [setting],
  props: {
    display: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      alertShow: false,
      message: "",
      rightalert: [],
      mouse_click: {},
      isInput: true,
    };
  },
  emits: {
    ["close"]: () => {
      return true;
    },
  },
  mounted: function () {

  },
  methods: {
    hidden() {
      this.$emit("close");
    },
    show(opt) {
      this.rightalert.push({
        message: opt,
        ifShow: true,
      });

    },
  },
};
</script>
<style scoped>
.mc_right_page_outer {
  position: fixed;
  height: 100%;
  width: 300px;
  right: 0;
  top: 0;
  padding: 20px;
  background-color: rgb(242, 251, 255);
  border-left: 10px solid rgba(175, 175, 175, 0.418);
  box-shadow: 0 0 10px 10000px rgba(0, 0, 0, 0.295),
  0 0 300px 10px rgba(0, 0, 0, 0.521);
  z-index: 3;

  animation: topalertan 0.2s;
}
.mc_rightp_page_item {
  position: relative;
}

.mc_right_page_close {
  color: white;
  background-color: rgba(0, 0, 0, 0.349);
  border-radius: 50%;
  position: absolute;
  right: 4px;
  top: 10px;

  width: 20px;
  height: 20px;
  line-height: 20px;

  font-weight: 600;
  font-size: 14px;
  transform: rotateZ(0deg);
  transform-origin: center;
  text-align: center;

  transition: all 0.2s;
  cursor: pointer;
  z-index: 4;
}
.mc_right_page_close_out{
    background-color: rgba(65, 65, 65, 0.178);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
}
.mc_right_page_close:hover {
  transform: rotateZ(180deg);
}
@keyframes topalertan {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>