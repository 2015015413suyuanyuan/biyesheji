<template>
<div class='page'>
  <div class="MyDiyBookItem" v-for='(item,index) in myDiyBookList' :key="index">
    <div class='bookImg'>
        <div class='Img'>
            <img :src="item.cover" alt="">
        </div>
        <div class='edit' @click="editBook(item)">
            <img src="../../assets/img/edit.png" alt="" class='editPencil'>
        </div>
    </div>
    <div class='mongolia'>

    </div>
    <div class='bookItemBottom'>
        <p class='title'>{{item.menu_name}}</p>
        <div class='useritem'>
            <img :src="item.user.image" alt="">
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
        if(res.status == 200 && res.status && res.data && res.data.lenght != 0){
          this.myDiyBookList = res.data;
        }else {

        }
      }).catch((err) => {
        console.log(err)
      })      
    },
    // 点击小笔 编辑菜谱
    editBook(menu){
      this.$router.push({
        name: "CreateBook",
        params: { menu: {
            menu: menu,
            menu_name: menu.menu_name,
            id: menu.id,
            new : false,
            title: '编辑菜谱'     
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
