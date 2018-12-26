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
            <img :src="item.img" alt="">
          </div>
          <div class='foodItemright'>
            <p>{{item.name}}</p>
            <button>删除</button>
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
    
      .list {
        .cookbook {
            color: #FF9800;
            font-size: 18px; 
            text-align: left;
            padding-left: 10px;
        }
        .foodItem {
          height: 140px;
          background-color: white;
          margin-bottom: 10px;
          .foodItemlfet {
            float: left;
            vertical-align: middle;
            padding-top: 12px;
            padding-left: 10px;
            img {
              width: 200px;
              height: 120px;
              border-radius: 18px;
            }
          }
          .foodItemright {
            float: right;
            width: 150px;
            height: 140px;
            text-align: left;
            position: relative;
            color: rgba(16, 16, 16, 1);
            font-size: 16px;
            font-family: SourceHanSansSC-regular;
            button {
              width: 69px;
              height: 27px;
              border-radius: 4px;
              background-color: rgba(255, 152, 0, 1);
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              text-align: center;
              font-family: Microsoft Yahei;
              border: 1px solid rgba(255, 255, 255, 0);
              position: absolute;
              right: 22px;
              bottom: 8px;
            }
          }
        }
        .foodItem::after {
          display: block;
          content: '';
          clear: both;
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
      isHasBookList: false,
      myFavoriteBookList: [
        {
          img: '/static/img/food1.jpg',
          name: '锅包肉'
        },
        {
          img: '/static/img/food2.jpg',
          name: '糖醋排骨'
        },
        {
          img: '/static/img/food1.jpg',
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


