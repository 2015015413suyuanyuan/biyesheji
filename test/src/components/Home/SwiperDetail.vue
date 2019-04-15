<template>
  <div class="page-about">
    <mt-header title="时令推荐" fixed class="abouttitle">
      <router-link to="/KitchenStory" slot="left" icon='back'>
        <mt-button icon='back' class="back"></mt-button>
      </router-link>
    </mt-header>
    <div class='detail'>
      <div class='headerImg'>
        <img :src="cover">
      </div>
      <article>
        <h2 style="text-align: center;">{{title}}</h2>
        <div v-for="(item1,index1) in item" :key="index1">
          <p>{{item1.content}}</p>
          <div class='headerImg'>
              <img :src="item1.image">
          </div>
          
        </div>
      </article>
    </div>
    <div class="like" @click="good">
      <img :src="Good" class="good">
      <span>{{num}}</span>
    </div>
  </div>
</template>

<script>
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'

export default {
  name: 'page-tabbar',
  data() {
    return {
      Good: '/static/img/good.png',
      // 是否点赞
      isGood: false,
      num: 88,
      cover: '',
      title:'',
      item: [],
      id: ''
    };
  },
  created(){
    if(JSON.stringify(this.$route.params) !== '{}'){
      const data = this.$route.params.story;
      this.cover = data.cover
      this.title = data.title
      this.item =data.story
      this.id = data.id
      this.num = data.spot
    }
    this.isLike()
  },
  methods: {
    // 点赞功能
    good () {
      if(localStorage.getItem('username')){
        this.isGood = !this.isGood
        if(this.isGood){
          this.Good = '/static/img/goods.png'
          this.num = this.num + 1
          this.isFirstCome++
          const data = {
            'id':  this.id,
            'user_id': localStorage.getItem('user_id')
          }
          this.$ajax.post('kitchenLike', data,{
            headers: {'Content-Type': 'application/json'}
          }).then((res) => {
          })
        }
        else {
          this.num = this.num - 1 
          this.Good = '/static/img/good.png'
          const data = {
            'id':  this.id,
            'user_id': localStorage.getItem('user_id')
          }
          this.$ajax.post('kitchenDelete', data,{
            headers: {'Content-Type': 'application/json'}
          }).then((res) => {
          })
        }
      }
    },
    // 判断该厨房故事用户是否喜欢
    // 判断用户是否登录 进一步判断该菜谱用户是否喜欢
    isLike() {
      if(localStorage.getItem('username')){
        const data = {
          'user_id': localStorage.getItem('user_id')
        }
        this.$ajax.post('kitchenList', data,{
          headers: {'Content-Type': 'application/json'}
        }).then((res) => {
          const list = res;
            if(list[0] && list[0].id == this.id) {
              this.isGood = true
               this.Good = '/static/img/goods.png'
          }
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.page-about {
  .abouttitle {
    font-size: 20px;
  }
  .detail {
    text-align: left;
    margin-top: 50px;
    .headerImg {
      margin: 0 auto;
      overflow: hidden;
      width: 360px;
      height: 220px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    article {
    h2 {
      margin: 0;
      padding: 8px 13px;
      text-align: left;
      color: rgba(16, 16, 16, 1);
      font-size: 20px;
      font-family: SourceHanSansSC-regular;
      font-weight: normal;
    }
    p {
      text-indent: 25px;
      padding: 0 15px;
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      text-align: left;
      font-family: SourceHanSansSC-regular;
      line-height: 27px;
    }
  }
}
.like{
  margin: 0 auto;
  width: 113px;
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 1);
  font-size: 16px;
  vertical-align: middle;
  position: relative;
  padding-left: 22px;
  margin-bottom: 55px;
  margin-top: 20px;
  .good {
   width: 18px;
   height: 18px;
   position: absolute;
   top: 5px;
   left: 33px;
  }
}
}
</style>
