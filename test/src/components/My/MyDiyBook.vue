<template>
<div>
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
        <p>锅包肉</p>
        <div class='useritem'>
            <img :src="item.userImg" alt="">
            <p>手机用户1111</p>
        </div>
    </div>
  </div>
</div>
</template>


<script>
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'
import { MessageBox } from 'mint-ui';

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
.page-tabbar {
.MyDiyBookItem {
    position: relative;
    .bookImg {
        width: 100vw;
        height: 140px;
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
            img {
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
        width: 340px;
        height: 140px;
        line-height: 20px;
        background-color: rgba(16, 16, 16, 0.2);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .bookItemBottom {
        p {
            width: 40vw;
        }
        .useritem {
            width: 40vw;
            img {
                width: 35px;
                height: 35px;
            }
        }
    }
}
}
</style>
