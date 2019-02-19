<template>
  <div class="page-Result">
    <div class='header'>
      <span class="mint-button-icon" @click="backPage">
        <i class="mintui mintui-back"></i>
      </span>
      <span class='searchimg'><img src="../../assets/img/search.png"></span>
      <input type="search" list='name' result placeholder="搜索菜谱" id="input1" ref="input1" class='searchinput' v-model="value" @click="toSearch()"/>
    </div>
    <div class='readHistory'>
      <ul class='readHistoryList'>
        <li v-for="(item,index) in readList" :key="index" @click="getDetail(item.menu_name,item.id,item)">
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
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'
import Search from './Search.vue'

export default {
  name: 'page-tabbar',
  data() {
    return {
      readList: [],
      value: '',
    };
  },
  components: {
    Search
  },
  created() {
    this.getSearchData(this.$route.params.menu_name);
    this.value = this.$route.params.menu_name;
    this.$nextTick(() => {
      this.setCaretPosition(document.getElementById('input1'),this.value.length)
  　})
  },
  methods: {
    searchList1(value) {
      this.getSearchData(value)
    },
    getSearchData(menu_name) {
      const data = {
        'menu_name':  menu_name
      }
      this.$ajax.post('select', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        this.readList = res;
      })
    },
    // 进入搜索列表的菜谱详情页
    getDetail(menu_name, id,item) {
      const arr1 = []
      arr1.push(item)
      if(localStorage.getItem('hositoryRead')){
        let arr2 = [];
        arr2 = JSON.parse(localStorage.getItem('hositoryRead'));
        for(let i =0;i<arr2.length;i++) {
          if(arr2[i].id != item.id){
            arr2.push(item)
          }
        }
        let arr3 = Array.from(new Set(arr2))
        arr2 = arr3;
        localStorage.setItem('hositoryRead',JSON.stringify(arr2))
      } else {
        localStorage.setItem('hositoryRead',JSON.stringify(arr1))
      }
      let isClassify = false
      if(this.$route.params.isClassify) {
        isClassify = true
      }
      this.$router.push({
        name: "CookBookDetail",
        params:{
          menu:{
          menu_name: menu_name,
          id: id,
          new : false,
          class: false,
          result: true,
          backSearchHome: this.$route.params.backSearchHome,
          isClassify: isClassify
          }
        }
      });
    },
    // 从result点击返回到search
    backPage() {
     if(this.$route.params.isClassify){
        this.$router.push({
          name: "Classify"
        });
      }else if(this.$route.params.backSearchHome){
        this.$router.push({
          name: "SearchHome"
        });
      }else {
        this.$router.push({
          name: "Search",
          params:{
          menu_name: this.$route.params.menu_name,
          isJustSearch: false
          }
        });
      }
    },
    toSearch() {
      this.$router.push({
        name: "Search",
        params:{
         menu_name: this.$route.params.menu_name,
         isJustSearch: false,
         isClassify: false
        }
      });           
    },
    setCaretPosition(tObj, sPos){
      if(tObj.setSelectionRange){
        setTimeout(function(){
          tObj.setSelectionRange(sPos, sPos);
          tObj.focus();
        }, 0);
      }else if(tObj.createTextRange){
        var rng = tObj.createTextRange();
        rng.move('character', sPos);
        rng.select();
      }
    }
  }
};
</script>

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
          width: 220px;
          // height: 30px;
          color: #101010;
          font-size: 16px;
          text-align: left;
          font-family: 方正楷体-标准;
          padding-top: 4px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .userName {
          color: #101010;
          font-size: 14px;
          text-align: left;
          padding-top: 4px;
          font-family: SourceHanSansSC-regular;
        }
        .like {
          padding-top: 2px;
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
      left: 75px;
      width: 24px;
      height: 24px;
      img {
        width: 24px;
      }
    }
    .searchinput {
      margin-left: 10px;
      margin: 0 auto;
      width: 260px;
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

