<template>
  <div class="page-tabbar">
    <mt-header :title="title" fixed class="abouttitle">
        <mt-button icon='back' class="back" slot="left"  @click="toBack"></mt-button>
    </mt-header>
      <div class="content contentone" @click="toCookBookDetail(item)" v-for="(item,index) in classifyList" :key="index">
        <div class='imgContent'>
          <img :src="item.cover" class="img1">
        </div>
        <div class="content-detail">
          <div class="text-left">
            <p class="sp1">{{item.menu_name}}</p>
            <p class="sp2">{{item.story}}</p>
          </div>
          <div class="img-right">
            <img :src="item.user.image" class="img2">
            <p class="sp3">{{item.user.name}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.page-tabbar {
  overflow: hidden;
  p{
    margin: 0;
    padding: 0;
  }
  .content.contentone{
      margin-top: 68px;
  }
  .content {
    background-color: white;
    text-align: center;
    margin: 0 auto;
    .imgContent{
        width: 340px;
        height: 140px;
        overflow: hidden;
        margin: 0 auto;
      .img1 {
        width: 100%;
      }
    }
    .content-detail {
      margin-bottom: 50px;
      .text-left {
        width: 70vw;
        float: left;
        text-align: left;
        padding: 10px 0 10px 18px;
        .sp1{
          font-size: 14px;
        }
        .sp2{
          font-size: 12px;
        }
      }
      .img-right {
        float: right;
        margin: 0 auto;
        text-align: center;
        margin-right: 18px;
        .img2 {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .sp3{
          text-align: left;
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

<script>
import { Tabbar } from "mint-ui";
import Vue from "vue";
import Router from "vue-router";
export default {
  name: "page-tabbar",
  data() {
    return {
      selected: "外卖",
      title: '',
      classifyList: []
    };
  },
  created(){
    if(JSON.stringify(this.$route.params) !== '{}'){
      this.getSmallClassifyList(this.$route.params.sort);
    }else {
    }
  },
  methods: {
    toCookBookDetail(menu){
      this.$router.push({
        name: "CookBookDetail",
        params: { 
              menu:{
              menu_name: menu.menu_name,
              sort: this.$route.params.sort,
              id: menu.id,
              new : false,
              class: true,
              result: false
              },
          class:true,
        }
      });
    },
    toBack() {
      this.$router.push({
        name: "Classify",
      });
    },
    //获取小分类的菜谱列表
    getSmallClassifyList(name) {
      const data = {
        "sort": name,
      }
      this.$ajax.post('classSelect', data).then((res) => {
        this.classifyList = Object.assign([],res.menu);
        this.title = res.sort
      }).catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>