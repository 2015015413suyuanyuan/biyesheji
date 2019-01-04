<template>
<div class='page'>
  <div class="MyDiyBookItem" v-for='(item,index) in myDiyBookList' :key="index">
    <div class='bookImg'>
        <div class='Img'>
            <img :src="item.img" alt="">
        </div>
        <div class='edit'>
            <img src="../../assets/edit.png" alt="" class='editPencil'>
        </div>
    </div>
    <div class='mongolia'>

    </div>
    <div class='bookItemBottom'>
        <p class='title'>锅包肉</p>
        <div class='useritem'>
            <img :src="item.userImg" alt="">
            <p>手机用户1111</p>
        </div>
    </div>
  </div>
</div>
</template>


<script>
import Vue from 'vue'
import Router from 'vue-router'


export default {
  name: 'page-tabbar',
  data() {
    return {
      myDiyBookList: [
        {
          img: '/static/img/food2.jpg',
          name: '锅包肉',
          userImg: '/static/img/food2.jpg',
          userName: '手机用户1111'
        },
        {
          img: '/static/img/food2.jpg',
          name: '糖醋排骨',
          userImg: '/static/img/food2.jpg',
          userName: '手机用户1111'
        },
        {
          img: '/static/img/food2.jpg',
          name: '酱香猪蹄',
          userImg: '/static/img/food2.jpg',
          userName: '手机用户1111'
        },
        {
          img: '/static/img/food2.jpg',
          name: '酱香猪蹄',
          userImg: '/static/img/food2.jpg',
          userName: '手机用户1111'
        }        
      ]
    };
  },
  methods: {

  }
};
</script>


<style lang="scss" scoped>
.page {
.MyDiyBookItem {
    position: relative;
    .bookImg {
        width: 100vw;
        height: 140px;
        position: relative;
        .Img {
            width: 100vw;
            height: 140px;
            img {
                width: 100vw;
                height: 140px;
            }
        }
        .edit {
            width: 33px;
            height: 33px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            top: 5px;
            right: 5px;
            z-index: 1000;
            background-color: rgba(0, 0, 0, 0.76);
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0);
            img {
                position: absolute;
                top: 5px;
                right: 8px;
                width: 20px;
                height: 20px;            
            }
        }
    }

    .mongolia {
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100vw;
        height: 140px;
        line-height: 20px;
        background-color: rgba(16, 16, 16, 0.2);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .bookItemBottom {
        padding-left: 13px;
        padding-right: 7px;
        .title {
            text-align: left;
            width: 40vw;
            float: left;
            height: 60px;
            line-height: 60px;
            color: rgba(16, 16, 16, 1);
            font-size: 18px;
            text-align: left;
            font-family: 方正楷体-标准;

        }
        .useritem {
            font-size: 12px;
            width: 80px;
            float: right;
            height: 60px;
            text-align: center;
            img {
                width: 35px;
                height: 35px;
                border-radius: 50%;
            }
        }
    }
    .bookItemBottom::after {
        content: '';
        display: block;
        clear: both;
    }
}
margin-bottom: 70px;
}
</style>
