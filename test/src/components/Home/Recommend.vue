<template>
  <div class="page-tabbar" @click="toCookBookDetail">
      <h1>每日推荐</h1>
      <div class="content" v-for="(item,index) in recommendList" @click="toCookBookDetail(item)">
        <div class='img1' :style=" {backgroundImage:'url('+item.cover+')'}">
        </div>
        <div class="content-detail">
          <div class="text-left">
            <p class="sp1">{{item.menu_name}}</p>
            <p class="sp2">{{item.story}}</p>
          </div>
          <div class="img-right">
            <img :src="'./static/img/MyLogo.png'" class="img2">
            <p class="sp3">{{item.user.name}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { Tabbar } from "mint-ui";
import Vue from "vue";
import Router from "vue-router";

export default {
  name: "page-tabbar",
  data() {
    return {
      selected: "外卖",
      recommendList: []
    };
  },
  created() {
    this.getRecommend();
  },
  methods: {
    toCookBookDetail(){
      this.$router.push({
        name: "CookBookDetail"
      });
    },
    getRecommend() {
      this.$ajax.post('recommend',{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        this.recommendList = res;
      })
    },
    toCookBookDetail(item) {
      this.$router.push({
        name: "CookBookDetail",
        params:{
          menu:{
          menu_name: item.menu_name,
          id: item.id,
          new : false,
          class: false,
          result: false,
          recommend: true
          }
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.page-tabbar {
  overflow: hidden;
  margin-bottom: 30px;
  background-color: #FFF9EF;
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
    margin-bottom: 16px;
  }
  .content {
    background-color: white;
    text-align: center;
    margin: 0 auto;
    padding-top: 10px;
    
    .img1 {
      width: 100%;
      height: 140px;
      background-size: 100%;
      background-position:50% 50%;
      margin-bottom: 10px;
    }
    .content-detail {
      margin-bottom: 25px;
      padding: 0 10px;
      .text-left {
        width: 70vw;
        float: left;

        .sp1{
          font-size: 14px;
          text-overflow: ellipsis;
          overflow: hidden;
          text-align: left;
          white-space: nowrap;
        }
        .sp2{
          text-align: left;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .img-right {
        float: right;
        margin: 0 auto;
        text-align: center;
        width: 20vw;
        .img2 {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .sp3{
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          
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

