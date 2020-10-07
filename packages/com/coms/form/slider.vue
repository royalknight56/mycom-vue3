<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 15:09:52
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-07 21:00:41
-->
<template>
  <div draggable="false" class="mc_slider">
      <div :class="ifdrug?'druging':'nodrug'" draggable="false" ref='button' class="mc_slider_button">
      </div>
  </div>
</template>

<script>
import setting from "../js/setting";
export default {
  name: "mc-slider",
  mixins: [setting],
  // props:['value','top'],
  props:{
    value:{
      type:Number
    },
    top:{
      default:100,
      type:Number
    }
  },
  data: function () {
    return {
      ifLocked: false,
      num:0,
      ifdrug:false,
      bleft : 10,
      bright:270,
    };
  },
  emits: {
    ['update:value']: () => {
      return true;
    },
  },
  watch:{
    value:function(){
      this.$refs.button.style.left=this.value/this.top*(this.bright-this.bleft-1)+this.bleft+'px'
    }
  },
  mounted: function () {
    this.$refs.button.style.left=this.value/this.top*(this.bright-this.bleft-1)+this.bleft+'px'
      var left = this.bleft;
      var right= this.bright;
      var $this=this
      var start={
          x:0,
          buttonx:0,
      }
      this.$refs.button.addEventListener('touchstart',function(e){
          start.x=e.touches[0].pageX;
          start.buttonx=$this.$refs.button.style.left.slice(0,-2);
          $this.ifdrug=true;
      })
      document.addEventListener('touchmove',function(e){
          if($this.ifdrug){
              var temp=start.buttonx-start.x+e.touches[0].pageX;
              if(temp<left||temp>right){
                  //
              }else{
                $this.$refs.button.style.left=start.buttonx-start.x+e.touches[0].pageX+'px'
                $this.num=parseInt(100*(temp-left)/(right-left-1));
                $this.emit($this.num)
              }
            }
      })
      document.addEventListener('touchend',function(){
          $this.ifdrug=false;
      })

      this.$refs.button.addEventListener('mousedown',function(e){
          start.x=e.pageX;
          start.buttonx=$this.$refs.button.style.left.slice(0,-2);
          $this.ifdrug=true;
      })
      document.addEventListener('mousemove',function(e){
          if($this.ifdrug){
              var temp=start.buttonx-start.x+e.pageX;
              if(temp<=left||temp>=right){
                  //
              }else{
                $this.$refs.button.style.left=start.buttonx-start.x+e.pageX+'px'
                $this.num=parseInt(100*(temp-left)/(right-left-1));
                $this.emit($this.num)
              }
            }
      })
      document.addEventListener('mouseup',function(){
          $this.ifdrug=false;
      })

  },
  methods:{
    emit:function(num){
      // this.num=parseFloat(100*(temp-4)/266);
      if(this.top){
        num=num/(100*(1/this.top))
      }else{
        //没有定义top
      }
      
      this.$emit('update:value',num)
    }
  }
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';

.mc_slider{
    position: relative;
    margin: 4px 0;
    width: 300px;
    height: 30px;
    top: 50%;
    background-color: rgba(49, 49, 49, 0.747);
    // border-radius: 15px;
    // border: 1px solid rgba(0, 0, 0, 0.247);
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
}
.mc_slider:hover{
    background-color:rgba(63, 63, 63, 0.747);
    height: 30px;
}

.mc_slider_button{
    position: absolute;
    left: 10px;
    top: 4px;

    width: 20px;
    height: 20px;
    background-color: rgb(238, 238, 238);
    transform: scale(0.8) ;
    transition: transform 0.1s;
    user-select: none;
}
.druging{
  transform: scale(1.05);
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