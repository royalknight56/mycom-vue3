<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-29 18:30:02
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-08 10:31:58
-->
<template>
      <div class="mc_global">

      </div>
</template>

<script>
export default {
  name: "mc-global",
  props:['menu'],
  data:function(){
      return{
          
      }
  },
  mounted: function () {
    
  },
};
</script>
<style scoped>
.mc_global{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<style>

@font-face {
  font-family: 'iconfont';
  src: url('../../font_r5t09q53xm/iconfont.eot');
  src: url('../../font_r5t09q53xm/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../../font_r5t09q53xm/iconfont.woff2') format('woff2'),
      url('../../font_r5t09q53xm/iconfont.woff') format('woff'),
      url('../../font_r5t09q53xm/iconfont.ttf') format('truetype'),
      url('../../font_r5t09q53xm/iconfont.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
    font-family: 'webfont';
    font-display: swap;
    src: url('../../webfont_nhel4mko598/webfont.eot'); /* IE9 */
    src: url('../../webfont_nhel4mko598/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../webfont_nhel4mko598/webfont.woff2') format('woff2'),
    url('../../webfont_nhel4mko598/webfont.woff') format('woff'), /* chrome、firefox */
    url('../../webfont_nhel4mko598/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../../webfont_nhel4mko598/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}

*{
    font-family: "webfont" !important;
    /* font-size: 16px; */
    /* font-style: normal;  */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>