<template>
  <div class="page-search">
    <div class='header'>
      <span class="mint-button-icon" @click="backPage">
        <i class="mintui mintui-back"></i>
      </span>
      <span class='searchimg'><img src="../../assets/img/search.png"></span>
      <input type="search" list='name' result placeholder="搜索菜谱" class='searchinput' v-model="value" @input="toSearch()" autofocus="autofocus"/>
      <span class='searchtext'>搜索</span>
    </div>
    <div class='searchHistory' v-if="isSearch">
      <div class='searchheader'>
        <span>历史搜索</span>
        <img src="../../assets/img/delete.png" @click="deleteSearch">
      </div>
      <ul class='searchHistoryList'>
        <li v-for="(item,index) in optionList" :key="index" @click="toResult(item)">{{item}}</li>
      </ul>
    </div>
    <div class='readHistory' v-if="isRead">
      <div class='readheader'>
        <span>阅读历史</span>
        <img src="../../assets/img/delete.png" @click="deleteRead">
      </div>
      <ul class='readHistoryList'>
        <li v-for="(item,index) in readList" :key="index" @click="toDetail(item)">
          <img :src="item.cover">
          <p class="txt">
            <span class="name">{{item.menu_name}}</span>
            <span class="userName">{{item.user.name}}</span>
            <span class="like">点赞{{item.spot}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import Vue from 'vue'
import Router from 'vue-router'
import Search from './Search.vue'

export default {
  name: 'page-search',
  data() {
    return {
      value: '',
      isShowList: false,
      optionList: [],
      readList: [],
      // 是否显示历史搜索
      isSearch: false,
      isRead: false
    };
  },
  components: {
    Search
  },
  created() {
    if(localStorage.getItem('hository')) {
      this.optionList = JSON.parse(localStorage.getItem('hository'))
    }
    if(localStorage.getItem('hositoryRead')) {
      this.readList = JSON.parse(localStorage.getItem('hositoryRead'))
    }
    if(this.optionList.length != 0){
      this.isSearch = true
    }
    if(this.readList.length != 0){
      this.isRead = true
    }
  },
  methods: {
    toSearch() {
      if(this.value != '') {
        this.$router.push({
          name: "Search",
          params: { menu_name:  this.value,isJustSearch: true,isClassify:false}            
        });  
      }
    },
    backPage() {
      if(this.$route.params.isJustSearch){
        this.$router.push({
          name: "Home"      
        });         
      }else if(this.$route.params.isClassify){
         this.$router.push({
          name: "Classify"      
        });         
      } else {
        this.$router.push({
          name: "Home"      
        });      
      }
    },
    toResult(value) {
      this.$router.push({
        name: "Result",
        params: { menu_name: value,backSearchHome: true}
      });
    },
    toDetail(item) {
      this.$router.push({
        name: "CookBookDetail",
        params:{
          menu:{
          menu_name: item.menu_name,
          id: item.id,
          new : false,
          class: false,
          result: false,
          backSearchHome: true
          }
        }
      });
    },
    // 删除历史搜索
    deleteSearch() {
      localStorage.removeItem('hository');
      this.optionList = [];
      this.isSearch = false
    },
    // 删除阅读历史
    deleteRead() {
      localStorage.removeItem('hositoryRead');
      this.readList = [];
       this.isRead = false
    }
  }
};
</script>

<style lang="scss" scoped>
.page-search {
  background-color: #FFF9EF;
  height: 100vh;
  .searchHistory{
    padding-top: 60px;
    .searchheader {
      margin-right: 27px;
      margin-left: 27px;
      span {
        font-size: 16px;
        float: left;
        color: #000;
      }
      img {
        height: 20px;
        width: 20px;
        float: right;
      }
    }
    .searchheader::after {
      display: block;
      clear: both;
      content: '';
    }
    .searchHistoryList {
      margin: 0;
      padding: 0;
      margin-top: 10px;
      list-style: none;
      padding-top: 8px;
      padding-left: 13px;
      li {
        display: block;
          width: 70px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          float: left;
          background-color: rgba(244, 243, 243, 1);
          text-align: center;
          margin-left: 12px;
          margin-bottom: 8px;
          border-radius: 3px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 0 4px;
      }
    }
  }
  .searchHistoryList::after {
    content: '';
    display: block;
    clear: both;
  }
  .readHistory {
    .readheader {
      padding-top: 60px;
      margin-right: 27px;
      margin-left: 27px;
      margin-bottom: 17px;
      span {
        font-size: 16px;
        float: left;
        color: #000;
      }
      img {
        height: 20px;
        width: 20px;
        float: right;
      }
    }
    .readHistoryList {
      list-style: none;
      li {
        width: 100vw;
        height: 100px;
      }
      li::after {
        content: '';
        display: block;
        clear: both;
      }
      img {
        left: 24px;
        top: 220px;
        width: 116px;
        height: 90px;
        border-radius: 11px;
      }
      p {
        float: right;
      }
      .txt {
        width: 220px;
        
        span {
          width: 100%;
          display: block;
          float: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .name {
          color: rgba(0, 0, 0, 1);
          font-size: 18px;
          text-align: left;
          font-family: 方正楷体-标准;
          margin-bottom: 20px;
        }
        .userName {
          color: rgba(0, 0, 0, 0.76);
          font-size: 14px;
          text-align: left;
          font-family: SourceHanSansSC-regular;
        }
        .like {
          color: rgba(0, 0, 0, 0.76);
          font-size: 14px;
          text-align: left;
          font-family: SourceHanSansSC-regular;
        }
      }
      .txt::after {
        display: block;
        content: '';
        clear: both;
      }
    }
    .readheader::after {
      display: block;
      clear: both;
      content: '';
    }
  }
  .header{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: white;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: black;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0.373333rem;
    height: 1.066667rem;
    line-height: 1;
    padding: 0 0.266667rem;
    position: relative;
    text-align: center;
    white-space: nowrap;
    background-color: white;
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    .searchimg {
      position: absolute;
      left: 53px;
      width: 24px;
      height: 24px;
      img {
        width: 24px;
      }
    }
    .searchinput {
      margin-left: 10px;
      width: 230px;
      height: 31px;
      border-radius: 10px;
      background-color: rgba(244, 243, 243, 1);
      text-align: left;
      font-size: 17px;
      outline: 0;
      padding-left: 40px;
      border: 1px solid rgba(255, 255, 255, 0);
      display: block;
    }
    .searchtext {
      color: rgba(16, 16, 16, 1);
      font-size: 20px;
      font-family: SourceHanSansSC-regular;
      padding-left: 30px;
    }
    input[type="search" i] {
      -webkit-appearance: none;
      box-sizing: border-box;
    }
    input::-webkit-input-placeholder {
        color: #888888;
    }
  }
}
</style>

