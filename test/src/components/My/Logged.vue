<template>
  <div class="page-tabbar">
    <div class='header'>
      <div class='header-left' @click="changeInfo">
        <img :src="userImage">
        <p>{{userName}}</p>
      </div>
      <div class='header-right'>
        <button @click="NoLogin">退出按钮</button>
      </div>
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
      

    <!-- 我喜欢的菜谱 我的作品 tab切换 -->
    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'" @click.native='changeStyle("tab-container1")' :class="{active: classObject1}">我喜欢的菜谱</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'" @click.native='changeStyle("tab-container2")' :class="{active: classObject2}">我的作品</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active">
        <!-- 我喜欢的菜谱 -->
        <mt-tab-container-item id="tab-container1">
          <div class="content">
            <!-- 我喜欢的菜谱为空 -->
            <div class='list' v-if="isHasBookList">
              <img src="../../assets/img/like.png" class='nothingimg'>
              <p class='nothingtxt'>目前没有内容</p>
            </div>
            <!-- 我喜欢的菜谱不为空 -->
            <div class='list' v-else>
              <div class="foodItem" v-for="(item,index) in myFavoriteBookList" :key="index">
                <div class='foodItemlfet' @click="detailBook(item)">
                  <img :src="item.cover">
                </div>
                <div class='foodItemright'>
                  <p class='menu_name'>{{item.menu_name}}</p>
                  <button @click="del(index,item.id)">删除</button>
                </div>
              </div>
            </div>
          </div>         
        </mt-tab-container-item>
        <!-- 我的作品 -->
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
// 我的作品
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
      // 判断 我喜欢的菜谱是否有数据
      isHasBookList: false,
      myFavoriteBookList: [],
      myDiyBookList: [],
      userImage: '',
      userName: '',
      menu_id: '',
    };
  },
  components: {
    MyDiyBook
  },
  created() {
      this.getBasicInfo();
      this.getData();
      if(this.myFavoriteBookList.length == 0){
        this.isHasBookList = true;
      } else {
        this.isHasBookList =false;
      }
  },
  methods: {
    changeInfo() {
      this.$router.push({
        name: "ChangeInfo"
      });  
    },
    change(){
      this.isHasBookList = !this.isHasBookList
    },
    del(index,id){
      this.deleteIndex = index
      this.menu_id = id
      this.$refs.modal.style.display = 'block'
      this.$refs.msgbox.style.display = 'block'  
    },
    dele(){
      this.myFavoriteBookList.splice(this.deleteIndex,1)
      this.$refs.modal.style.display = 'none'
      this.$refs.msgbox.style.display = 'none'
      const data = {
        "user_id": localStorage.getItem('user_id'),
        "main_menu_id": this.menu_id
      }
      this.$ajax.post('myLikeDelete', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res.message == '取消点赞成功'){
          this.$Message.success('取消点赞成功');
          this.menu_id = '';
          if(this.myFavoriteBookList.length == 0){
            this.isHasBookList = true;
          }
        }
      }).catch((err) => {
        console.log(err)
      })   
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
    },
    NoLogin() {
      const data = {
        "username": localStorage.getItem('username')
      }
      this.$ajax.post('logout', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res.message == '退出成功') {
          localStorage.removeItem('username')
          localStorage.removeItem('id')
          localStorage.removeItem('user_id')
          localStorage.removeItem('touImage')
          localStorage.setItem('state', '0');
          this.$router.push({
            name: "NoLogged"
          });       
        }
      }).catch((err) => {
        console.log(err)
      })      
    },
    // 获取用户的基本信息接口
    getBasicInfo(){
      const data = {
        "username": localStorage.getItem('username')
      }
      this.$ajax.post('basicInfo', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res[0] && res[0].lenght != 0) {
          this.userImage = res[0].image
          if(res[0].name !== ''){
            this.userName = res[0].name
          }
          else {
            this.userName = res[0].username
          }
          localStorage.setItem('user_id',res[0].id)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取我喜欢的菜单的列表
    getData(){
      const data = {
        "user_id": localStorage.getItem('user_id')
      }
      this.$ajax.post('myLikeSelect', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res.status =='200' && res.length == 0){
          this.isHasBookList = true;
        }else {
          this.myFavoriteBookList = res;
          this.isHasBookList = false;
        }
      }).catch((err) => {
        console.log(err)
      })  
    },
    // 进入我喜欢的菜谱的详情页面
    detailBook(item){
      this.$router.push({
        name: "CookBookDetail",
        params: { menu: {
            id: item.id,
            new: false,
            class: false,
            result: false
        } }
      });
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
      width: 40vw;

      img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
          overflow:hidden;
          width: 200px;
          height: 120px;
          float: left;
          vertical-align: middle;
          margin-top: 10px;
          margin-left: 10px;
          border-radius: 16px;
          img {
            width: 100%;
            height: 100%;
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
          .menu_name {
            padding-top: 11px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;            
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
