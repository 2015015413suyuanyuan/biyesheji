<template>
  <div class="page-classifylist">
      <div class="classify-list" v-for="(item,index) in classifyList" :key="index" @click='toClassifyListDetail'>
          <div class="classify-title">{{item.title}}</div>
          <div v-for="(item1,index1) in item.list" :key="index1" class="item"  :class="{marginStyle : index1 % 3 === 1}">
              {{item1}}
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.page-classifylist{
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    .classify-list{
        padding: 7px;
        .classify-title{
            width: 171px;
            height: 35px;
            line-height: 35px;
            border: 1px solid #FF9800;
            color: #FF9800;
            background-color: white;
            font-size: 14px; 
            margin: 0 auto;
            margin-bottom: 23px;
        }
        .item{
            width: 110px;
            height: 60px;
            float: left;
            padding-top: 7px;
            padding-left: 6px;
            background-color: red;
            margin-bottom: 6px;
        }
    }
    .classify-list::after{
        display: block;
        clear: both;
        content: '';
    }
}
.page-classifylist::after{
        display: block;
        clear: both;
        content: '';
}
            .marginStyle {
                margin: 0px 6px;
            }
</style>

<script>
import Vue from 'vue'
import Router from 'vue-router'

export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖',
      classifyList:[
          {
              title:'热门分类',
              list:["早餐", "宝宝辅食", "烘焙", "食疗养生"]
          },
          {
              title:'一日三餐',
              list:["早餐", "午餐", "晚餐", "宵夜"]
          },
          {
              title:'家常菜谱',
              list:[        
                    "快手菜",
                    "汤羹",
                    "素食",
                    "川菜",
                    "粤菜",
                    "下酒菜",
                    "下饭菜",
                    "家常菜",
                    "凉菜沙拉"
              ]
          },
          {
              title:'主食小吃',
              list:["点心", "粥品", "面食", "米食", "饮品"]
          },
          {
              title:'时令美食',
              list:["春季时令", "夏季时令", "秋季时令", "冬季时令"]
          }
      ]
    };
  },
  methods: {
    toClassifyListDetail(){
      this.$router.push({
              name: "ClassifyListDetail"
      });
    }
  }
};
</script>


