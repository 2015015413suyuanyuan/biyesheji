<template>
  <div class="page-tabbar">
    <mt-header :title="title" fixed class="abouttitle">
        <mt-button icon='back' class="back" slot="left"  @click="toBack"></mt-button>
    </mt-header>
      <div class="content" @click="toCookBookDetail(item)" v-for="(item,index) in classifyList" 
      :class="{'active': index == 0}" :key="index">
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

<style lang="scss" scoped>
.page-tabbar {
  overflow: hidden;
  background-color: #FFF9EF;
  p{
    margin: 0;
    padding: 0;
  }
  .active {
  margin-top: 68px !important;
  }

  .content {
    background-color: white;
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;

    .imgContent{
        width: 340px;
        height: 140px;
        overflow: hidden;
        margin: 0 auto;
        margin-bottom: 10px;
        padding-top: 10px;
        .img1 {
          width: 100%;
          height: 140px;
          background-size: 100%;
          background-position:50% 50%;
        }
    }
    .content-detail {
      margin-bottom: 25px;
      padding: 0 10px;
      padding-bottom: 10px;

      .text-left {
        width: 70vw;
        float: left;
        text-align: left;
        .sp1{
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .sp2{
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
      .img-right {
        float: right;
        margin: 0 auto;
        text-align: center;
        width: 20vw;
        .img2 {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .sp3{
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

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
