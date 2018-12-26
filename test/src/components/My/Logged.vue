<template>
  <div class="page-tabbar">
    <div class='header'>
      <div class='header-left'>
        <img src="../../assets/logo.jpg" alt="">
        <p>厨友154331094</p>
      </div>
      <div class='header-right'>
        <button>退出按钮</button>
      </div>
    </div>
    <div @click="change">
      切换是否有菜谱
    </div>
    <div class="content">
      <div class='list' v-if="isHasBookList">
        <p class='cookbook'>我喜欢的菜谱~</p>
        <img src="../../assets/like.png" alt="">
        <p>目前没有内容</p>
      </div>
      <div class='list' v-else>
        <p class='cookbook'>我喜欢的菜谱~</p>
        <div class="foodItem" v-for="(item,index) in myFavoriteBookList" :key="index">
          <div class='foodItemlfet'>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-tabbar {
  overflow: hidden;
  background-color: #FFF9EF;
  position: relative;
  height: 100vh;
  p {
    margin: 0;
    padding: 0;
  }
  .header {
    background-color: white;
    margin: 0 auto;
    text-align: center;
    height: 146px;
    width: 100vw;
    .header-left {
      float: left;
      margin-left: 8px;
      margin-top: 11px;
      img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
      }
      p {
        font-size: 18px;
      }
    }
    .header-right {
      float: right;
      margin: 0 auto;
      text-align: center;
      position: absolute;
      top: 51px;
      right: 12px;
      button {
        display: block;
        width: 80px;
        height: 30px;
        border-radius: 4px;
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: center;
        border: 1px solid rgba(187, 187, 187, 1);
        background-color: white;
      }
    }
  }
  .header::after {
    content: '';
    display: block;
    clear: both;
  }
  .content {
    padding: 20px 0 ;
    margin-top: 14px;
    background-color: white;
      .list {
        img {
            width: 200px;
            margin-bottom: 31px;
        }
        p {
            color: #A8A8A8;
            font-size: 20px;
        }
        .cookbook {
            color: #FF9800;
            font-size: 18px; 
            text-align: left;
            padding-left: 10px;
        }
      }
  }
}
</style>

<script>
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'

export default {
  name: 'page-tabbar',
  data() {
    return {
      isHasBookList: true,
      myFavoriteBookList: [
        {
          img: '../../assets/food1.png',
          name: '锅包肉'
        },
        {
          img: '../../assets/food2.png',
          name: '糖醋排骨'
        },
        {
          img: '../../assets/food3.png',
          name: '酱香猪蹄'
        }
      ]
    };
  },
  methods: {
    change(){
      this.isHasBookList = !this.isHasBookList
    }
  }
};
</script>


