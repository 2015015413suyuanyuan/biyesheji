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
        <span>历史搜索</span>
        <img src="../../assets/delete.png" alt="">
      </div>
      <ul class='readHistoryList'>
        <li v-for="(item,index) in readList" :key="index">
          <img :src="item.img" alt="">
          <p>
            <span>{{item.img}}</span>
            <span>{{item.userName}}</span>
            <span>{{item.like}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

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
          like: ''
        },
        {
          img: '/static/img/footer1.png',
          name: '红烧肉',
          userName: '手机用户1111',
          like: ''
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


