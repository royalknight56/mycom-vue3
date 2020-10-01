<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-01 14:44:26
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-01 15:56:44
-->
<template>
    <div class="mc_number">
        <div @click="change(-1)" class="mc_number_button mc_number_left">
            -
        </div>
        <div class="mc_number_middle">
            {{num}}
        </div>
        <div  @click="change(1)" class="mc_number_button mc_number_right">
            +
        </div>
    </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-number",
  mixins:[setting],
  props:['value'],
  data:function(){
      return{
          num:0,
      }
  },
  emits: {
    ['update:value']: () => {
      return true;
    },
  },
  mounted: function () {
    this.num=this.value
  },
  methods:{
      change:function(n){
          this.num+=n
          this.$emit('update:value',this.num)
      }
  }
};
</script>
<style scoped>
.mc_number{
    width: 150px;
    height: 40px;
    background-color: rgb(224, 224, 224);
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
.mc_number_button{
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: white;
    font-weight: 600;
    background-color: rgba(133, 133, 133, 0.527);
    cursor: pointer;
}
.mc_number_button:hover{
    background-color: rgb(207, 207, 207);
}
.mc_number_button::selection{
    background: none;
}
.mc_number_left{

}
.mc_number_right{
}
</style>