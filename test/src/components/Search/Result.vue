<template>
  <div class="page-Result">
    <Search></Search>
    <div class='readHistory'>
      <ul class='readHistoryList'>
        <li v-for="(item,index) in readList" :key="index" @click="getDetail(item.menu_name,item.id)">
          <img :src="item.cover">
          <p class="txt">
            <span class="name">{{item.menu_name}}</span>
            <span class="userName">{{item.user.name}}</span>
            <span class="like">点赞{{item.like}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-Result {
  background-color: #FFF9EF;
  .readHistory {
    .readHistoryList {
      padding: 0;
      margin: 0;
      list-style: none;
      padding-top: 40px;
      margin-top: 19px;
      li {
        width: 100vw;
        height: 90px;
        background-color: white;
        margin-bottom: 19px;
        vertical-align: middle;
      }
      li::after {
        content: '';
        display: block;
        clear: both;
      }
      img {
        float: left;
        width: 133px;
        height: 65px;
        padding-left: 7px;
        vertical-align: middle;
        padding-top: 11px;
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
          color: #101010;
          font-size: 16px;
          text-align: left;
          font-family: 方正楷体-标准;
          padding-top: 8px;
        }
        .userName {
          color: #101010;
          font-size: 14px;
          text-align: left;
          padding-top: 8px;
          font-family: SourceHanSansSC-regular;
        }
        .like {
          padding-top: 4px;
          color: #101010;
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
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'
import Search from './Search.vue'

export default {
  name: 'page-tabbar',
  data() {
    return {
      readList: []
    };
  },
  components: {
    Search
  },
  created() {
  this.getSearchData();
  },
  methods: {
    getSearchData() {
      const data = {
        'menu_name':  this.$route.params.menu_name
      }
      this.$ajax.post('select', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        this.readList = res;
        console.log('result',res);
      })
    },
    // 进入搜索列表的菜谱详情页
    getDetail(menu_name, id) {
      this.$router.push({
        name: "CookBookDetail",
        params:{
          menu:{
          menu_name: menu_name,
          id: id,
          new : false,
          class: false,
          result: true
          }
        }
      });
    }
  }
};
</script>


