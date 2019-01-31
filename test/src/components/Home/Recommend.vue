<template>
  <div class="page-tabbar" @click="toCookBookDetail">
      <h1>每日推荐</h1>
      <div class="content">
        <img :src="'./static/img/2.jpg'" class="img1">
        <div class="content-detail">
          <div class="text-left">
            <p class="sp1">香酥黑芝麻卷</p>
            <p class="sp2">小时候每当加工蛋卷的人在街上摆上家伙，立马就能吸引拿上鸡蛋……</p>
          </div>
          <div class="img-right">
            <img :src="'./static/img/MyLogo.png'" class="img2">
            <p class="sp3">李莉莉的……</p>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.page-tabbar {
  overflow: hidden;
  p{
    margin: 0;
    padding: 0;
  }
  h1 {
    width: 100%;
    border: 1px solid #ff9800;
    background-color: white;
    color: #ff9800;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
  }
  .content {
    background-color: white;
    text-align: center;
    margin: 0 auto;
    .img1 {
      width: 340px;
      height: 140px;
    }
    .content-detail {
      margin-bottom: 50px;
      .text-left {
        width: 70vw;
        float: left;
        text-align: left;
        padding: 10px 0 10px 18px;
        .sp1{
          font-size: 14px;
        }
        .sp2{
          font-size: 12px;
        }
      }
      .img-right {
        float: right;
        margin: 0 auto;
        text-align: center;
        margin-right: 18px;
        .img2 {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .sp3{
          text-align: left;
        }
      }
    }
    .content-detail::after{
      display: block;
      content: '';
      clear: both;
    }
  }
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
  },
  methods: {
    toCookBookDetail(){
      this.$router.push({
        name: "CookBookDetail"
      });
    }
  }
};
</script>


