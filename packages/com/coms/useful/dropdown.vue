<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-04 10:51:04
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 16:07:54
-->
<template>
  <div class="mc_dropdown_out">
    <div ref="drop" class="mc_dropdown">下拉刷新</div>
    <div ref="dropcir" class="mc_dropdown_cir"></div>
  </div>
</template>

<script>
var starty = 0;
var timer = new Date();
import setting from "../js/setting";
export default {
  name: "mc-dropdown",
  mixins: [setting],
  props: ["menu"],
  data: function () {
    return {
      hidden: false,
      start: {
        y: 0,
        x: 0,
      },
      overy: 0,
      isDrug: false,
    };
  },
  emits: {
    ["refresh"]: () => {
      return true;
    },
  },

  methods: {
    routeTo: function (path) {
      document.location.hash = path;
    },
    mousestart: function (e) {
      var ofy = 0;
      if (e.pageY) {
        ofy = e.pageY;
      } else {
        ofy = e.touches[0].pageY;
      }
      starty = ofy;
      this.isDrug = true;
    },
    mouseend: function () {
      if (parseInt(this.$refs.dropcir.style.top) > 200) {
        this.$emit("refresh");
      }
      this.$refs.dropcir.style.top = -50 + "px";
      this.isDrug = false;
    },
    mousemove: function (e) {
      if (this.isDrug) {
        var ofy = 0;
        if (e.pageY) {
          ofy = e.pageY;
        } else {
          ofy = e.touches[0].pageY;
        }
        let now = new Date();
        if (now - timer > 100) {
          timer = now;
          if (parseInt(this.$refs.dropcir.style.top) > 200) {
            this.$refs.dropcir.style.filter = "brightness(1.1)";
          } else {
            this.$refs.dropcir.style.filter = "brightness(0.6)";
          }
          this.$refs.dropcir.style.top = ofy - starty + "px";
          this.$refs.dropcir.style.transform =
            "rotateZ(" + (((ofy - starty) * 2) % 360) + "deg)";
        }
      }
    },
    touch: function (e) {
      if (e.touches[0].pageY - starty > 0) {
        this.hidden = false;
      } else {
        this.hidden = true;
      }
      this.startY = e.touches[0].pageY;
    },
  },
  mounted: function () {
    this.$refs.drop.addEventListener("mousedown", this.mousestart);
    document.addEventListener("mousemove", this.mousemove);
    document.addEventListener("mouseup", this.mouseend);

    this.$refs.drop.addEventListener("touchstart", this.mousestart);
    document.addEventListener("touchmove", this.mousemove);
    document.addEventListener("touchend", this.mouseend);
  },
  unmounted: function () {
    document.removeEventListener("mousedown", this.mousestart);
    document.removeEventListener("mousemove", this.mousemove);
    document.removeEventListener("mouseup", this.mouseend);

    document.removeEventListener("touchstart", this.mousestart);
    document.removeEventListener("touchmove", this.mousemove);
    document.removeEventListener("touchend", this.mouseend);
  },
};
</script>
<style scoped>
.mc_dropdown_out{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
}
.mc_dropdown {
  width: 100%;
  height: 40px;
  color: aliceblue;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.2s;
  background: linear-gradient(rgba(0, 0, 0, 0.623), rgba(255, 255, 255, 0));
  opacity: 0;

  user-select: none;
}
.mc_dropdown:hover {
  opacity: 1;
}
.mc_dropdown_cir {
  position: relative;
  top: -50px;
  width: 50px;
  height: 50px;
  /* background-color: rgb(230, 230, 230); */
  /* border: 2px solid rgb(177, 177, 177); */
  /* box-shadow: 0 0 5px rgb(94, 94, 94); */
  border-radius: 50%;
  transition: all 0.1s linear;
  filter: brightness(0.6);
  user-select: none;
  transform: rotateZ(0deg);
  background-size: 50px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8IS0tIENyZWF0ZWQgd2l0aCBNZXRob2QgRHJhdyAtIGh0dHA6Ly9naXRodWIuY29tL2R1b3BpeGVsL01ldGhvZC1EcmF3LyAtLT4KIDxnPgogIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4KICA8cmVjdCBmaWxsPSIjZmZmIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIGhlaWdodD0iODIiIHdpZHRoPSI4MiIgeT0iLTEiIHg9Ii0xIi8+CiAgPGcgZGlzcGxheT0ibm9uZSIgb3ZlcmZsb3c9InZpc2libGUiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJjYW52YXNHcmlkIj4KICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPgogIDwvZz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjAuOTQiIGlkPSJzdmdfMSIgZD0ibTM5LjEzMDkxMiwxMS4wNDMyNTJjMy4wNTgwNTEsMC4wMDM4NjcgNS45Nzk0NjQsMC41MzMzNTcgOC43NDYxNzksMS40MTc5MjhsLTIuMTg5NjU1LDMuNzg3MDc1bDE1LjU0Mjk5OCwwbC0zLjg4Njc0NCwtNi43MzEyNzJsLTMuODgzNzc3LC02LjcyOTI2bC0yLjA0NDQ1MSwzLjU0NTg4OGMtMy44MzE2MjYsLTEuNDAwODUzIC03Ljk2MjI2NCwtMi4xODQ4NDggLTEyLjI4MTc2NiwtMi4xODQ4NDhjLTE5Ljg4MjM0NiwwIC0zNS45OTc2MTIsMTYuMTE2Mjc1IC0zNS45OTc2MTIsMzUuOTk4NTQzYzAsOC4yNTE3OTQgMi44MDY1NTMsMTUuODMzMzg3IDcuNDc3Mjc1LDIxLjkwNzc4Nmw1LjQ3MzYyMywtNC4yMDI2MzdjLTMuNzc3NTQ5LC00LjkwODk1IC02LjA0ODgyLC0xMS4wMzQ2MzUgLTYuMDYxMTQzLC0xNy43MDMxNjNjMC4wMjc1MTMsLTE2LjA3NDU1MSAxMy4wMzI1MDUsLTI5LjA4MTM5NSAyOS4xMDUwNjgsLTI5LjEwNjA0MWwwLjAwMDAwMywwem0yOC41MjQxMzEsNy4yMDM4NmwtNS40NzM2MTEsNC4yMDQ2NDljMy43NzY1OTgsNC45MDcwODEgNi4wNDc4OCwxMS4wMjg5MDYgNi4wNTgyNzEsMTcuNjk5NDE1Yy0wLjAyNzUxNiwxNi4wNzQ0MTggLTEzLjAzMjUwNSwyOS4wNzk0MDIgLTI5LjEwNjAwMywyOS4xMDU4OTFjLTIuODQ4MzE4LC0wLjAwMzY4MiAtNS41NzMyODIsLTAuNDY2ODI0IC04LjE3MTA0NSwtMS4yNDEzNjhsMi4wNjA1MzcsLTMuNTYzMDczbC0xNS41NDI5MjksMGwzLjg4Mzg2OSw2LjcyNzU0N2wzLjg4NjY3Miw2LjczNjgyNWwyLjE2Njg3NywtMy43NjAzOWMzLjY3NTAwNywxLjI3OTM1OCA3LjYwODE3NSwxLjk5MzEwNyAxMS43MTYwMiwxLjk5NDk2NGMxOS44ODUyMTUsLTAuMDAzNzA1IDM1Ljk5NzcxNSwtMTYuMTE5OTk1IDM2LjAwMjM4NiwtMzYuMDAyMjc3Yy0wLjAwNDY3MSwtOC4yNTE3NzcgLTIuODEzMjIsLTE1LjgzMTUxOCAtNy40ODEwNDQsLTIxLjkwMjE4MWwwLC0wLjAwMDAwM3oiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMwMDAiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KPC9zdmc+");
}
</style>