<template>
  <div class="page-classifylist">
      <div class="classify-list" v-for="(item,index) in classifyList" :key="index">
          <div class="classify-title">{{item.title}}</div>
          <div v-for="(item1,index1) in item.list" :key="index1" class="item"  
          :class="{marginStyle : index1 % 3 === 1}" 
          @click='toClassifyListDetail(item1.name)'
          v-bind:style="{backgroundImage:'url(' + item1.img + ')'}">
              {{item1.name}}
          </div>
      </div>
  </div>
</template>

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
          title: '热门分类',
          list: [{
            name: '热菜',
            img: './static/img/img32.png'},
            {
              name: '宝宝辅食',
              img: './static/img/img10.png'
            },
            {
              name: '烘焙',
              img: './static/img/img31.png'
            },
            {
              name: '食疗养生',
              img: './static/img/img25.png'
          }]
        },
        {
          title:'一日三餐',
          list: [{
            name: '早餐',
            img: './static/img/img18.png'},
            {
              name: '午餐',
              img: './static/img/img3.png'
            },
            {
              name: '晚餐',
              img: './static/img/img2.png'
            },
            {
              name: '宵夜',
              img: './static/img/img6.png'
          }]
        },
        {
          title:'家常菜谱',
          list: [{
            name: '快手菜',
            img: './static/img/img5.png'},
            {
              name: '汤羹',
              img: './static/img/img19.png'
            },
            {
              name: '素食',
              img: './static/img/img17.png'
            },
            {
              name: '川菜',
              img: './static/img/img13.png'
            },{
              name: '粤菜',
              img: './static/img/img11.png'
            },
            {
              name: '下酒菜',
              img: './static/img/img12.png'
            },
            {
              name: '下饭菜',
              img: './static/img/img15.png'
            },
            {
              name: '家常菜',
              img: './static/img/img14.png'
            },
            {
              name: '凉菜沙拉',
              img: './static/img/img16.png'
            },
        ]},
        {
          title:'主食小吃',
          list: [{
            name: '点心',
            img: './static/img/img21.png'},
            {
              name: '粥品',
              img: './static/img/img22.png'
            },
            {
              name: '面食',
              img: './static/img/img20.png'
            },
            {
              name: '米食',
              img: './static/img/img24.png'
            },{
              name: '饮品',
              img: './static/img/img23.png'
          }]
        },
        {
          title:'时令美食',
          list: [{
            name: '春季时令',
            img: './static/img/img7.png'},
            {
              name: '夏季时令',
              img: './static/img/img8.png'
            },
            {
              name: '秋季时令',
              img: './static/img/img9.png'
            },
            {
              name: '冬季时令',
              img: './static/img/img5.png'
          }]
        }
      ]
    };
  },
  methods: {
    toClassifyListDetail(name){
      this.$router.push({
        name: "ClassifyListDetail",
        params: { sort: name }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.page-classifylist{
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    margin-bottom: 60px;
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
            width: 115px;
            height: 70px;
            float: left;
            padding-top: 4px;
            padding-left: 6px;
            margin-bottom: 6px;
            background-size: 100% 100%;
            font-size: 16px;
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
        margin: 0px 7px;
    }
</style>
