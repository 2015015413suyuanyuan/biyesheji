<template>
<div class='page'>
  <div class="MyDiyBookItem" v-for='(item,index) in myDiyBookList' :key="index">
    <div class='bookImg'>
        <div class='Img' :style=" {backgroundImage:'url('+item.cover+')'}">
        </div>
        <div class='edit' @click="editBook(item)">
          <img src="../../assets/img/edit.png">
        </div>
        <div class='close' @click="delBook(index,item.id)">
          <img src="../../assets/img/closeee.png">
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
  <!-- 提示用户是否退出编辑 -->
  <div class='Mymsgbox' style="position:absolute;z-index: 2007;display:none;" ref="Mymsgbox">
    <div class='mint-msgbox'>
      <div class='title'>是否删除该菜谱</div>
      <div class='textbox'>
        <div class='cancel' @click="cancel">
          取消
        </div>
        <div class='sure' @click="deleteDel">
          确认删除
        </div>
      </div>
    </div>
  </div>
  <div class='Mymodal' style='z-index: 2006;display:none;' ref='Mymodal'></div>
</div>
</template>


<script>
import Vue from 'vue'
import Router from 'vue-router'


export default {
  name: 'page-tabbar',
  data() {
    return {
      myDiyBookList: [],
      menu_id: 1,
      menu_index: 1
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
    },
    // 点击叉子 删除菜谱
    delBook(index,id) {
      this.menu_index = index
      this.menu_id = id
      this.$refs.Mymodal.style.display = 'block'
      this.$refs.Mymsgbox.style.display = 'block'  
      // const data = {
      //   "id": 1
      // }
      // this.$ajax.post('menuDelete', data,{
      //   headers: {'Content-Type': 'application/json'}
      // }).then((res) => {
      //   if(res && res.lenght != 0){
      //     this.myDiyBookList = res;
      //   }else {

      //   }
      // }).catch((err) => {
      //   console.log(err)
      // })
    },
    cancel(){
      this.$refs.Mymodal.style.display = 'none'
      this.$refs.Mymsgbox.style.display = 'none'
    },
    deleteDel() {
      this.myDiyBookList.splice(this.menu_index,1)
      this.$refs.Mymodal.style.display = 'none'
      this.$refs.Mymsgbox.style.display = 'none'
      const data = {
        "id": this.menu_id
      }
      this.$ajax.post('menuDelete', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
      }).catch((err) => {
        console.log(err)
      })        
    }
  }
};
</script>


<style lang="scss" scoped>
.page {
margin-top: 12px;
  .Mymodal {
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
          right: 45px;
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
        .close {
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
