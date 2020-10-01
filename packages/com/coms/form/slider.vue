<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 15:09:52
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-01 16:00:16
-->
<template>
  <div class="mc_slider">
      <div ref='button' class="mc_slider_button">
      </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-slider",
  mixins: [setting],
  props:['value'],
  data: function () {
    return {
      ifLocked: false,
      num:0,
    };
  },
  emits: {
    ['update:value']: () => {
      return true;
    },
  },
  mounted: function () {
      var ifdrug=false;
      var $this=this
      var start={
          x:0,
          buttonx:0,
      }
      this.$refs.button.addEventListener('mousedown',function(e){
          start.x=e.pageX;
          start.buttonx=$this.$refs.button.style.left.slice(0,-2);
        //   console.log(parseInt($this.$refs.button.style.left.slice(0,-2)))
            // console.log(start.buttonx-start.x+e.pageX);
          ifdrug=true;
      })
      document.addEventListener('mousemove',function(e){
          if(ifdrug){
              var temp=start.buttonx-start.x+e.pageX;
              if(temp<=4||temp>=271){
                  //
              }else{
                $this.$refs.button.style.left=start.buttonx-start.x+e.pageX+'px'
                $this.num=parseInt(100*(temp-4)/266);
                $this.$emit('update:value',$this.num)
              }
            }
      })
      document.addEventListener('mouseup',function(){
          ifdrug=false;
          $this.$emit('update:value',$this.num)
      })
  },
};
</script>
<style scoped>
.mc_slider{
    position: relative;

    width: 300px;
    height: 30px;
    background-color: rgba(75, 96, 116, 0.747);
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.247);
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
}
.mc_slider:hover{
    background-color:rgba(111, 130, 148, 0.747);
}
.mc_switch_left{
    background-color: rgba(255, 102, 102, 0.726)
}
.mc_switch_right{
    background-color: rgba(100, 180, 255, 0.747);
}
.mc_slider_button{
    position: absolute;
    left: 4px;
    top: 1px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: rgb(238, 238, 238);
    border: 3px solid rgba(0, 0, 0, 0.034);
}
.mc_slider_button:hover{
    background-color: rgb(255, 255, 255);
}
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