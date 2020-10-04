<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 15:09:52
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 10:24:30
-->
<template>
  <div draggable="false" class="mc_slider">
      <div draggable="false" ref='button' class="mc_slider_button">
      </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-slider",
  mixins: [setting],
  props:['value','top'],
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
  watch:{
    value:function(){
      this.$refs.button.style.left=this.value/this.top*266+4+'px'
    }
  },
  mounted: function () {
    console.log(navigator.platform)
      var ifdrug=false;
      var $this=this
      var start={
          x:0,
          buttonx:0,
      }
      this.$refs.button.addEventListener('touchstart',function(e){
          start.x=e.touches[0].pageX;
          start.buttonx=$this.$refs.button.style.left.slice(0,-2);
          ifdrug=true;
      })
      document.addEventListener('touchmove',function(e){
          if(ifdrug){
              var temp=start.buttonx-start.x+e.touches[0].pageX;
              if(temp<=4||temp>=271){
                  //
              }else{
                $this.$refs.button.style.left=start.buttonx-start.x+e.touches[0].pageX+'px'
                $this.num=parseInt(100*(temp-4)/266);
                $this.emit($this.num)
              }
            }
      })
      document.addEventListener('touchend',function(){
          ifdrug=false;

          // $this.emit($this.num)
      })

      this.$refs.button.addEventListener('mousedown',function(e){
          start.x=e.pageX;
          start.buttonx=$this.$refs.button.style.left.slice(0,-2);
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
                $this.emit($this.num)
              }
            }
      })
      document.addEventListener('mouseup',function(){
          ifdrug=false;

          // $this.emit($this.num)
      })
  },
  methods:{
    emit:function(num){
      // this.num=parseFloat(100*(temp-4)/266);
      if(this.top){
        num=num/100*this.top
      }else{
        //没有定义top
      }
      this.$emit('update:value',num)
    }
  }
};
</script>
<style scoped>
.mc_slider{
    position: relative;
    margin: 4px 0;
    width: 300px;

    height: 30px;

    top: 50%;
    
    background-color: rgba(75, 96, 116, 0.747);
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.247);
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
}
.mc_slider:hover{
    background-color:rgba(111, 130, 148, 0.747);
    height: 30px;
}

.mc_slider_button{
    position: absolute;
    left: 4px;
    top: 1px;

    width: 21px;
    height: 21px;
    border-radius: 20px;
    background-color: rgb(238, 238, 238);
    border: 3px solid rgba(0, 0, 0, 0.034);

    transform: scale(0.8);
    transition: transform 0.1s;
    user-select: none;
}
.mc_slider_button:hover{
    background-color: rgb(255, 255, 255);
    transform: scale(1.1);
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