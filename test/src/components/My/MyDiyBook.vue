<template>
<div class='page'>
  <div class="MyDiyBookItem" v-for='(item,index) in myDiyBookList' :key="index">
    <div class='bookImg'>
        <div class='Img' :style=" {backgroundImage:'url('+item.cover+')'}">
        </div>
        <div class='edit' @click="editBook(item)">
            <img src="../../assets/img/edit.png" class='editPencil'>
        </div>
    </div>
    <div class='mongolia'>

    </div>
    <div class='bookItemBottom'>
        <p class='title'>{{item.menu_name}}</p>
        <div class='useritem'>
            <img :src="item.user.image">
            <p>{{item.user.name}}</p>
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
      myDiyBookList: []
    };
  },
  created() {
      this.getMyBook();
  },
  methods: {
    // 获取我的作品的列表
    getMyBook(){
      const data = {
        "user_id": localStorage.getItem('user_id')
      }
      this.$ajax.post('select', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res && res.lenght != 0){
          this.myDiyBookList = res;
        }else {

        }
      }).catch((err) => {
        console.log(err)
      })      
    },
    // 点击小笔 编辑菜谱
    editBook(menu){
      let list11 = menu.sort
      localStorage.setItem('list',JSON.stringify(list11));
      this.$router.push({
        name: "CreateBook",
        params: { 
          new: false,
          menu: {
            menu: menu,
            menu_name: menu.menu_name,
            id: menu.id,
            new : false,
            title: '编辑菜谱',
            toMy: true,
            isEdit: true,
            fromClassify: false
        } }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.page {
margin-top: 12px;
.MyDiyBookItem {
    position: relative;
    margin-bottom: 19px;
    background-color: white;
    padding: 10px 0;
    
    .bookImg {
        width: 100vw;
        height: 140px;
        position: relative;
        overflow: hidden;
        .Img {
            width: 100vw;
            height: 140px;
            background-size:100%;
            background-position:50% 50%;
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
                top: 4px;
                right: 8px;
                width: 16px;
                height: 20px;            
            }
        }
    }

    .mongolia {
        position: absolute;
        z-index: 100;
        top: 10px;
        left: 0;
        width: 100vw;
        height: 140px;
        line-height: 20px;
        background-color: rgba(16, 16, 16, 0.2);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .bookItemBottom {
      padding: 0 10px;
      margin-top: 5px;
      .title {
        width: 70vw;
        float: left;
        height: 60px;
        line-height: 60px;
        color: rgba(16, 16, 16, 1);
        font-size: 18px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        }
        .useritem {
          font-size: 12px;
          width: 20vw;
          float: right;
          height: 60px;
          text-align: center;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
