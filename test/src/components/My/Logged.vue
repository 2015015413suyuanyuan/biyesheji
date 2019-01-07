<template>
  <div class="page-tabbar">
    <div class='header'>
      <div class='header-left'>
        <img src="../../assets/img/logo.jpg" alt="">
        <p>厨友154331094</p>
      </div>
      <div class='header-right'>
        <button>退出按钮</button>
      </div>
    </div>
    <div @click="change">
      切换是否有菜谱
    </div>

    <!-- 确认删除的弹出框 -->
    <div class='msgbox' style="position:absolute;z-index: 2007;display:none;" ref="msgbox">
      <div class='mint-msgbox'>
        <div class='title'>确认要删除这一项吗？</div>
        <div class='textbox'>
          <div class='cancel' @click="cancel">
            取消
          </div>
          <div class='sure' @click="dele">
            确认
          </div>
        </div>
      </div>
    </div>
    <div class='v-modal' style='z-index: 2006;display:none;' ref='modal'></div>
      


    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'" @click.native='changeStyle("tab-container1")' :class="{active: classObject1}">我喜欢的菜谱</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'" @click.native='changeStyle("tab-container2")' :class="{active: classObject2}">我的作品</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active">
        <mt-tab-container-item id="tab-container1">
          <div class="content">
            <div class='list' v-if="isHasBookList">
              <img src="../../assets/img/like.png" alt="" class='nothingimg'>
              <p class='nothingtxt'>目前没有内容</p>
            </div>
            <div class='list' v-else>
              <div class="foodItem" v-for="(item,index) in myFavoriteBookList" :key="index">
                <div class='foodItemlfet'>
                  <img :src="item.img" alt="">
                </div>
                <div class='foodItemright'>
                  <p>{{item.name}}</p>
                  <button @click="del(index)">删除</button>
                </div>
              </div>
            </div>
          </div>         
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <MyDiyBook></MyDiyBook>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>

</template>


<script>
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'
import { MessageBox } from 'mint-ui';
import MyDiyBook from './MyDiyBook.vue'
import { TabContainer, TabContainerItem } from 'mint-ui';

export default {
  name: 'page-tabbar',
  data() {
    return {
      classObject1: true,
      classObject2: false,
      active: 'tab-container1',
      deleteIndex: '',
      isHasBookList: false,
      myFavoriteBookList: [
        {
          img: '/static/img/food2.jpg',
          name: '锅包肉'
        },
        {
          img: '/static/img/food2.jpg',
          name: '糖醋排骨'
        },
        {
          img: '/static/img/food2.jpg',
          name: '酱香猪蹄'
        },
        {
          img: '/static/img/food2.jpg',
          name: '酱香猪蹄'
        }
      ],
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
  components: {
    MyDiyBook
  },
  methods: {
    change(){
      this.isHasBookList = !this.isHasBookList
    },
    del(index){
      this.deleteIndex = index
      this.$refs.modal.style.display = 'block'
      this.$refs.msgbox.style.display = 'block'  
    },
    dele(){
     this.myFavoriteBookList.splice(this.deleteIndex,1)
      this.$refs.modal.style.display = 'none'
      this.$refs.msgbox.style.display = 'none'
    },
    cancel(){
      this.$refs.modal.style.display = 'none'
      this.$refs.msgbox.style.display = 'none'
    },
    changeStyle(str){
      if(str == 'tab-container1'){
        this.classObject1 = true
        this.classObject2 = false
      }
      if(str == 'tab-container2'){
        this.classObject2 = true
        this.classObject1 = false
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.page-tabbar {
    // 我的作品 我喜欢的菜谱样式
    .active {
      border-radius: 0;
      color: #FF9800;
      border-bottom: 2px solid #FF9800;
    }
  .item {
    display: inline-block;
  }
  // .nav {
  //   padding: 10px;
  // }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
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
    margin-bottom: 70px;
    .list {
      .nothingimg {
        height: 170px;
        width: 203px;
        margin-top: 59px;
      }
      .nothingtxt {
        font-size: 20px;
        margin-top: 31px;
        color: #A8A8A8;
      }
      .foodItem {
        height: 140px;
        background-color: white;
        margin-bottom: 19px;
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
            outline: none;
            width: 69px;
            height: 27px;
            border-radius: 4px;
            background-color: #E3E0E0;
            color: #918E8E;
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
  .v-modal {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background: #000;
  }
  .mint-msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    width: 75%;
    border-radius: 0.08rem;
    font-size: 0.426667rem;
    -webkit-user-select: none;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: .2s;
    transition: .2s;

    .title {
      height: 60px;
      line-height: 60px;
    }

    .textbox::after {
      display: block;
      content: '';
      clear: both;
    }
    .textbox {
      border-top: 1px solid rgb(243, 238, 238);
      .cancel {
        width: 50%;
        float: left;
        height: 35px;
        line-height: 35px;
      }
      .sure {
        width: 50%;
        height: 35px;
        line-height: 35px;
        float: left;
        background-color: #FF9800;
        color: white;
      }
    }
  }
}
</style>
