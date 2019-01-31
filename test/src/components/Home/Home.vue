<template>
  <div class="page-hellow">
    <div class="header">
      <div class="search-box">
        <div class="search">
        <i class="searchicon">
            <img :src="'./static/img/search.png'" >
        </i>
        <input type="search" placeholder="搜索菜谱" class="searchbar" @click="toSearch">
      </div>
    </div>
    <div class="add-box">
      <img :src="'./static/img/plus.png'"  class="add" @click="toCreateCook" slot="right">
    </div>
  </div>
  <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
  </div>
    <Recommend></Recommend>
  </div>
</template>

<style lang="scss" scoped>
.page-hellow {
  overflow: hidden;
  .header {
    position: relative;
    width: 100%;
    vertical-align: middle;
    padding: 11px 0 7px 5px;
  .search-box {
    float: left;
    .search {
      width: 309px;
      position: relative;
      text-align: left;
      .searchicon {
        img {
          width: 24px;
          height: 24px;
          position: absolute;
          top: 6.5px;
          left: 6.5px;
        }
      }
      .searchbar {
        outline: none;
        left: 5px;
        top: 34px;
        width: 309px;
        height: 37px;
        line-height: 20px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid rgba(187, 187, 187, 1);
        padding-left: 24px;
        font-size: 16px;
      }
    }
  }

  .add-box {
    float: left;
    .add {
      width: 27px;
      height: 27px;
      font-size: 14px;
      display: block;
      position: absolute;
      right: 20px;
      top: 16px;
    }
  }
  }

  .header::after {
    display: block;
    clear: both;
    content: "";
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
}
</style>

<script>
import { Search } from "mint-ui";
import { Header } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
import Vue from "vue";
import Router from "vue-router";
import Recommend from "./Recommend.vue";
import { MessageBox } from 'mint-ui';

export default {
  name: "page-tabbar",
  data() {
    return {
      value: "外卖"
    };
  },
  components: {
    Recommend
  },
  methods: {
    toSearch() {
      this.$router.push({
        name: "Search"
      });
    },
    // 判断是否登录 如果登录 去创建菜谱
    toCreateCook(){
      if(localStorage.getItem('username')){
        this.$router.push({
          name: "CookBook1"
        });
      }else{
        MessageBox.confirm('',{
          message: '创建菜谱需要登录哦~',
          title: '',
          confirmButtonText: '去登录',
          cancelButtonText: '取消'
        }).then(action => {
          if(action == 'confirm'){
            this.$router.push({
              name: "Login"
            });
          }
        }).catch(err => {
          if(err == 'cancel') {

          }
        })
      }
    }
  },
};
</script>


