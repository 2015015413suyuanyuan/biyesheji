<template>
  <div class="page-search">
    <Search></Search>
    <div class='searchHistory'>
      <div class='searchheader'>
        <span>历史搜索</span>
        <img src="../../assets/delete.png" alt="">
      </div>
      <ul class='searchHistoryList'>
        <li v-for="(item,index) in optionList" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class='readHistory'>
      <div class='readheader'>
        <span>阅读历史</span>
        <img src="../../assets/delete.png" alt="">
      </div>
      <ul class='readHistoryList'>
        <li v-for="(item,index) in readList" :key="index">
          <img :src="item.img" alt="">
          <p>
            <span>{{item.userName}}</span>
            <span>{{item.like}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-search {
  .searchHistory{
    .searchheader {
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
      background-color: red;
      padding-top: 8px;
      padding-left: 26px;
      li {
        display: block;
          width: 70px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          float: left;
          background-color: rgba(244, 243, 243, 1);
          text-align: center;
          margin-left: 8px;
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
        width: 116px;
        height: 90px;
        float: left;
      }
      p {
        float: right;
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
          img: '/static/img/footer1.png',
          name: '红烧肉',
          userName: '手机用户1111',
          like: '123333'
        },
        {
          img: '/static/img/footer1.png',
          name: '红烧肉',
          userName: '手机用户1111',
          like: '123'
        },
        {
          img: '/static/img/footer1.png',
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


