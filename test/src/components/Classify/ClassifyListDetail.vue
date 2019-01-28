<template>
  <div class="page-tabbar">
    <mt-header title="午餐" fixed class="abouttitle">
        <mt-button icon='back' class="back" slot="left"  @click="toBack"></mt-button>
    </mt-header>
      <div class="content contentone" @click="toCookBookDetail">
        <img src="/static/img/2.jpg" alt="" class="img1">
        <div class="content-detail">
          <div class="text-left">
            <p class="sp1">香酥黑芝麻卷</p>
            <p class="sp2">小时候每当加工蛋卷的人在街上摆上家伙，立马就能吸引拿上鸡蛋……</p>
          </div>
          <div class="img-right">
            <img src="/static/img/MyLogo.png" alt="" class="img2">
            <p class="sp3">李莉莉的……</p>
          </div>
        </div>
      </div>
      <div class="content" @click="toCookBookDetail">
        <img src="/static/img/2.jpg" alt="" class="img1">
        <div class="content-detail">
          <div class="text-left">
            <p class="sp1">香酥黑芝麻卷</p>
            <p class="sp2">小时候每当加工蛋卷的人在街上摆上家伙，立马就能吸引拿上鸡蛋……</p>
          </div>
          <div class="img-right">
            <img src="/static/img/MyLogo.png" alt="" class="img2">
            <p class="sp3">李莉莉的……</p>
          </div>
        </div>
      </div>
      <div class="content" @click="toCookBookDetail">
        <img src="/static/img/2.jpg" alt="" class="img1">
        <div class="content-detail">
          <div class="text-left">
            <p class="sp1">香酥黑芝麻卷</p>
            <p class="sp2">小时候每当加工蛋卷的人在街上摆上家伙，立马就能吸引拿上鸡蛋……</p>
          </div>
          <div class="img-right">
            <img src="/static/img/MyLogo.png" alt="" class="img2">
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
  .content.contentone{
      margin-top: 68px;
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
    },
    toBack() {
      this.$router.back(-1);
    }
  }
};
</script>