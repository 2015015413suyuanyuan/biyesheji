<template>
  <div class="page-search">
    <Search></Search>
    <div class='searchHistory'>
      <div class='searchheader'>
        <span>历史搜索</span>
        <img src="../../assets/img/delete.png">
      </div>
      <ul class='searchHistoryList'>
        <li v-for="(item,index) in optionList" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class='readHistory'>
      <div class='readheader'>
        <span>阅读历史</span>
        <img src="../../assets/img/delete.png">
      </div>
      <ul class='readHistoryList'>
        <li v-for="(item,index) in readList" :key="index">
          <img :src="item.img">
          <p class="txt">
            <span class="name">{{item.name}}</span>
            <span class="userName">{{item.userName}}</span>
            <span class="like">点赞{{item.like}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-search {
  background-color: #FFF9EF;
  height: 100vh;
  .searchHistory{
    .searchheader {
      margin-top: 50px;
      margin-right: 27px;
      margin-left: 27px;
      padding-top: 15px;
      span {
        font-size: 16px;
        float: left;
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
      margin-top: 50px;
      margin-right: 27px;
      margin-left: 27px;
      span {
        font-size: 16px;
        float: left;
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
        }
        .name {
          width: 55px;
          height: 20px;
          color: rgba(0, 0, 0, 1);
          font-size: 18px;
          text-align: left;
          font-family: 方正楷体-标准;
          margin-bottom: 30px;
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
}
</style>

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
      optionList: ['锅包肉','红烧肉','糖醋里脊','宫保鸡丁','蒜薹炒肉','红烧鱼','清蒸鲈鱼','爆炒鱿鱼',
      '红烧狮子头','土豆炖排骨','爆炒土豆丝'
      ],
      readList: [
        {
          img: '/static/img/food2.jpg',
          name: '红烧肉',
          userName: '手机用户1111',
          like: '123333'
        },
        {
          img: '/static/img/food1.jpg',
          name: '红烧肉',
          userName: '手机用户1111',
          like: '123'
        },
        {
          img: '/static/img/food2.jpg',
          name: '红烧肉',
          userName: '手机用户1111',
          like: '123'
        }
      ]
    };
  },
  components: {
    Search
  },
  methods: {

  }
};
</script>


