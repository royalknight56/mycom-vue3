<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-02 22:46:31
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-15 22:21:16
-->
<template>
  <div class="mc_collapse">
    <div class="mc_col_top">{{ title }}</div>
    <input type="checkbox" placeholder="Mickey" class="fold-button" />
    <section>
      <div ref="content" class="fold-content">
        <slot></slot>
        <!-- {{ text.text }} -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "mc-collapse",

  props: {
    title: {
      type: String,
      default: function () {
        return "折叠面板";
      },
    },
    width: {
      type: String,
      default: function () {
        return "300px";
      },
    },
    height: {
      type: String,
      default: function () {
        return "150px";
      },
    },
  },
  data: function () {
    return {
      ifShow: false,
    };
  },
  mounted: function () {
    if (this.width) {
      this.$el.style.width = this.width;
    }
    if (this.height) {
      this.$refs.content.style.height = this.height;
    }
  },
  methods: {
    show: function () {
      this.ifShow = !this.ifShow;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";

.mc_collapse {
  position: relative;
  width: 300px;
}
.mc_col_top {
  position: absolute;
  user-select: none;
  pointer-events: none;
  color: $white;
  top: 0;
  z-index: 1;
  padding: 0 5px;
}
.fold-button {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  position: relative;
  top: 0px;
  /* left: 0; */
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 1px;
  background: $black;
  color: $white;
  border-radius: 0;
  cursor: pointer;
  outline: none;
}
.fold-button:checked {
  background: $pblack;
}
.fold-button:hover {
  background: $black;
}
.fold-button + section {
  position: relative;
  top: -4px;
  overflow: hidden;
}
.fold-button + section > div.fold-content {
  width: 100%;
  height: 100%;
  background: $middlecolor;
  box-sizing: border-box;

  padding: 0 5px;
  opacity: 1;
  overflow: hidden;
  transition: height 0.3s ease-out, opacity 0.3s ease-out;
  /* transform: scaleY(1); */
  /* -moz-transition: height 1s ease-out, opacity 1s ease-out; */
}

.fold-button:checked + section > div.fold-content {
  opacity: 0;
  height: 0 !important;
  /* transform: scaleY(0); */
}
</style>