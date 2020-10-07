<template>
  <div
    @mouseout="endchose()"
    @mouseover="startchose()"
    draggable="false"
    ref="rate"
    class="mc_rate"
  >
      <div
        @click="chose(item)"
        v-for="item in count"
        :key="item"
        :class="{ mc_rate_row_chose:mod == 0? item <= cho: item <= cur }"
        class="mc_rate_row"
      >
      </div>
    <!-- <div v-if="mod == 1">
      <div
        @click="chose(item)"
        v-for="item in count"
        :key="item"
        :class="{ mc_rate_row_chose: item <= cur }"
        class="mc_rate_row"
      >
      </div>
    </div> -->
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-rate",
  mixins: [setting],
  props: ["value", "top"],
  data: function () {
    return {
      ifLocked: false,
      num: 0,
      ifdrug: true,
      bleft: 0,
      bright: 300,
      count: 5,
      cur: 0,
      cho: 0,
      mod: 0, //0代表未选择1代表正在选择
    };
  },
  emits: {
    ["update:value"]: () => {
      return true;
    },
  },
  watch: {
    value: function () {
        this.cho=this.value
    },
    num: function () {
      this.cur = parseInt(this.num / (100/this.count) + 1);
    },
  },
  mounted: function () {
      this.cho=this.value
    // console.dir(this.$el)
    // var ifdrug=false;
    this.top ? (this.count = this.top) : (this.count = 5);
    this.bright = this.$el.offsetWidth;
    var left = this.bleft;
    var right = this.bright;

    var $this = this;
    var start = {
      x: 0,
      buttonx: 0,
    };
    this.$refs.rate.addEventListener("mousemove", function (e) {
      var offx = 0;
      if (e.target == $this.$refs.rate) {
        offx = e.offsetX;
      } else {
        offx = e.target.offsetLeft + e.offsetX;
      }
      if ($this.ifdrug) {
        var temp = start.buttonx - start.x + offx;
        if (temp <= left || temp >= right) {
          //
        } else {
          //   $this.$refs.button.style.left = start.buttonx - start.x + offx + "px";
          $this.num = parseInt((100 * (temp - left)) / (right - left - 1));
        }
      }
    });

    //   this.$refs.button.addEventListener('touchstart',function(e){
    //       start.x=e.touches[0].pageX;
    //       start.buttonx=$this.$refs.button.style.left.slice(0,-2);
    //       $this.ifdrug=true;
    //   })
    // document.addEventListener("touchmove", function (e) {
    //   if ($this.ifdrug) {
    //     var temp = start.buttonx - start.x + e.touches[0].pageX;
    //     if (temp < left || temp > right) {
    //       //
    //     } else {
    //       $this.$refs.button.style.left =
    //         start.buttonx - start.x + e.touches[0].pageX + "px";
    //       $this.num = parseInt((100 * (temp - left)) / (right - left - 1));
    //       $this.emit($this.num);
    //     }
    //   }
    // });
    //   document.addEventListener('touchend',function(){
    //       $this.ifdrug=false;
    //   })

    //   this.$refs.button.addEventListener('mousedown',function(e){
    //       start.x=e.pageX;
    //       start.buttonx=$this.$refs.button.style.left.slice(0,-2);
    //       $this.ifdrug=true;
    //   })

    //   document.addEventListener('mouseup',function(){
    //       $this.ifdrug=false;
    //   })
  },
  methods: {
    chose(item) {
      this.cho = item;
      this.$emit("update:value", this.cho);
    },
    endchose() {
      this.cur = 0;
      this.mod=0
    },
    startchose() {
        this.mod=1
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scssvar.scss";

.mc_rate {
  position: relative;
  margin: 4px 0;
  width: 300px;
  height: 30px;
  top: 50%;
  background-color: rgba(255, 255, 255, 0.13);
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
}
.mc_rate_row {
    flex-shrink: 0;
  width: 30px;
  border: $borderstyle;
  background-color: rgba(255, 255, 255, 0);
  transition: $alltransition;
}
.mc_rate_row_chose {
  background-color: black;
  border: 1px solid white;
}
// .mc_rate:hover {
//   background-color: rgba(63, 63, 63, 0.747);
//   height: 30px;
// }
/* .mc_switch_cir_left{
    left: 4px;
}
.mc_switch_cir_right{
    left: 30px;
}
.mc_switch_txt{
    position: absolute;
    left: 90px;
    top: 0;
    width: fit-content;
} */
</style>