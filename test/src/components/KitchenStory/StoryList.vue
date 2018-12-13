<template>
  <div class="page-tabbar">
    <div class="img-right">
        <p class="p1">把大海装进盒子里送给你吃</p>
        <img src="/static/img/4.jpg" alt="" class="img2">
        <p class="p2"><span>来自</span><span>饮品记</span></p>
    </div>
    <div class="img-right">
        <p class="p1">把大海装进盒子里送给你吃</p>
        <img src="/static/img/2.jpg" alt="" class="img2">
        <p class="p2"><span>来自</span><span>饮品记</span></p>
    </div>
    <div class="img-right">
        <p class="p1">把大海装进盒子里送给你吃</p>
        <img src="/static/img/3.jpg" alt="" class="img2">
        <p class="p2"><span>来自</span><span>饮品记</span></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-tabbar {
  overflow: hidden;
  .img-right {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: white;
    padding: 3px 21px;
    .p1{
        font-size: 14px;
    }
    .p2{
        font-size: 12px;
    }
    p {
      padding: 0;
      margin: 0;
      text-align: left;
    }
    .img2 {
      display: inline-block;
      width: 80vw;
      height: 140px;
      margin: 10px 0;
    }
  }
  .img-right:nth-child(1){
    margin-top: 58px;
  }
}
.page-tabbar::after{
    display: block;
    content: "";
    clear: both;
}
</style>

<script>
import { Tabbar } from "mint-ui";
import Vue from "vue";
import Router from "vue-router";

export default {
  name: "page-tabbar",
  data() {
    return {
      selected: "外卖"
    };
  }
};
</script>


