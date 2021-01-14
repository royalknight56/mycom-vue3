<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-11 09:33:21
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-11 15:58:24
-->
<template>
  <div @mousedown="dragStart" @mousemove="dragMove" ref="dragitem" class="mc_drag_outer">outer</div>
</template>

<script>
import { ref,reactive, onMounted } from "vue";
var start = reactive({
    x:0,
    y:0
})
var ifDrag=ref(false);
function dragStart(event){
    start.x=event.pageX;
    start.y=event.pageY;
    ifDrag.value=true
    console.log(event.pageX);
}
function dragMove(){
    // if(ifDrag.value){
        
        
    // }
}

//reactive
export default {
  name: "mc-drag-item",
  setup() {
    const name = ref("小四");
    const age = ref(18);
    function plusOne() {
      age.value++; //想改变值或获取值 必须.value
    }
    var dragitem=ref(null)
    onMounted(()=>{
        console.log(dragitem.value)
    })
        
    return {
        dragStart,
        dragMove,
      //必须返回 模板中才能使用
      name,
      age,
      plusOne,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scssvar.scss";
.mc_drag_outer {
  width: 100px;
  height: 50px;
  user-select: none;
  background-color: aliceblue;
}
</style>