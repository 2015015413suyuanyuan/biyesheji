
<template>
  <div class="page-hellow">

      <input type="text">
        <router-link to="/CookBook1" slot="right">
            <mt-button icon='more'></mt-button>
        </router-link>

    <div class="page-swipe">
      <mt-swipe :auto='4000'>
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <Recommend></Recommend>
  </div>
</template>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}
.mint-swipe {
  height: 180px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.mint-swipe-item {
  line-height: 180px;
}
.slide1 {
  background: url("/static/img/2.jpg");
  color: #fff;
}
.slide2 {
  background: url("/static/img/1.jpg");
  color: #000;
}
.slide3 {
  background: url("/static/img/4.jpg");
  color: #fff;
}
</style>
<script>
import { Search } from "mint-ui";
import { Header } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
import Vue from "vue";
import Router from "vue-router";
import Recommend from './Recommend.vue'

export default {
  name: "page-tabbar",
  data() {
    return {
      value: "外卖"
    };
  },
  components : {
    Recommend
  }
};
</script>


