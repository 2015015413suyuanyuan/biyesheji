<template>
  <div class="page-classify">
    <div class="search-box">
      <div class="search">
        <i class="searchicon">
            <img src="/static/img/search.png" alt>
        </i>
        <input type="search" placeholder="搜索菜谱" class="searchbar" @click="toSearch">
      </div>
    </div>
    <ClassifyList></ClassifyList>
  </div>
</template>

<style lang="scss" scoped>
.page-classify {
  padding-top: 10px;
  background-color: #FFF9EF;
}
  .search-box {
    margin: 0 auto;
    margin-bottom: 10px;
    .search {
      margin: 0 auto;
      width: 309px;
      position: relative;
      text-align: left;
      .searchicon {
        width: 24px;
        height: 24px;
        img {
          width: 24px;
          height: 24px;
          position: absolute;
          top: 6.5px;
          left: 6.5px;
        }
      }
      .searchbar {
        outline: none;
        left: 5px;
        top: 34px;
        width: 309px;
        height: 37px;
        line-height: 20px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid rgba(187, 187, 187, 1);
        padding-left: 24px;
        font-size: 16px;
      }
    }
  }
</style>
<script>
  import {
    Tabbar
  } from 'mint-ui';
  import Vue from 'vue';
  import Router from 'vue-router';
  import ClassifyList from './ClassifyList'
  
  export default {
    name: 'page-tabbar',
    data() {
      return {
        selected: '外卖'
      };
    },
    components: {
      ClassifyList
    },
  created()  {
    this.getBigClass();
    this.getClassList();
  },
  methods: {
    toSearch() {
      this.$router.push({
        name: "Search"
      });
    },
    // 大分类列表
    getBigClass() {
      const data = {}
      const data1 = this.qs.parse(data)
      this.axios.post('http://140.143.75.82:81/index.php/list', data1,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        console.log('res',res)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 菜谱分类展示列表
    getClassList() {
      const data = {}
      const data1 = this.qs.parse(data)
      this.axios.post('http://140.143.75.82:81/index.php/classSelect', data1,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        console.log('res',res)
      }).catch((err) => {
        console.log(err)
      })
    },
  }
  };
</script>
