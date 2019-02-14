<template>
  <div class="page-tabbar">
    <div class="img-right" @click="toStoryDetail(item)" v-for="(item,index) in storyList" :key="index">
        <p class="p1">{{item.title}}</p>
        <div class='imgContain'>
          <img :src="item.cover" class="img2">
        </div>
        <p class="p2"><span>来自</span><span>饮品记</span></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-tabbar {
  overflow: hidden;

  .imgContain {
      width: 310px;
      height: 140px;
      margin: 10px 0;
      overflow: hidden;
      .img2 {
        width: 100%;
      }  
  }

  .img-right {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: white;
    padding: 3px 21px;
    .p1{
        font-size: 16px;
        color: #101010;
        text-align:center;
    }
    .p2{
        font-size: 12px;
    }
    p {
      padding: 0;
      margin: 0;
      text-align: left;
    }
    .img2 {
      display: inline-block;
      width: 80vw;
      height: 140px;
      margin: 10px 0;
    }
  }
  .img-right:nth-child(1){
    margin-top: 58px;
  }
}
.page-tabbar::after{
    display: block;
    content: "";
    clear: both;
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
      // 厨房故事数据列表
      storyList: []
    };
  },
  created(){
    this.getDataList();
  },
  methods: {
    toStoryDetail(item){
      this.$router.push({
        name: "KitchenStoryDetails",
        params: {story: item}
      });
    },
    // 获取厨房故事列表
    getDataList(){
    const data = {}
    this.$ajax.post('storySelect', data,{
      headers: {'Content-Type': 'application/json'}
    }).then((res) => {
      this.storyList = res
    }).catch((err) => {
      console.log(err)
    })      
    }
  }
};
</script>


