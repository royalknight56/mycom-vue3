<!--
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-10-04 16:24:11
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2020-10-04 16:31:59
-->
<template>
  <div class="outer">

  </div>
</template>

<script>
import setting from '../js/setting'
export default {
  name: "mc-",
  props: [],
  mixins:[setting],
  data: function () {
    return {

    };
  },
  emits: {
    ['update:value']: () => {
      return true;
    },
  },

  methods: {

  },
  mounted: function () {

  },
};
</script>
<style scoped>

</style>