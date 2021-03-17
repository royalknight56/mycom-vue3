/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2020-09-30 22:23:11
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-01-14 21:56:20
 */

export default{

    data() {
      return {
        test: 0,
        iflock: false,
        menu: [],
      };
    },
    methods: {
      
      tpTo(offset) {
        this.$refs.right.scrollTop = offset.offsetTop - 50;
      },
      alertDemo() {
        this.$alert("kkk");
      },
    },
  }