<template>
  <div class="page-about">
    <mt-header title="厨房故事" fixed class="abouttitle">
      <router-link to="/KitchenStory" slot="left" icon='back'>
        <mt-button icon='back' class="back"></mt-button>
      </router-link>
    </mt-header>
    <div class='detail'>
      <img :src="cover" alt="">
          <article>
            <h2>{{title}}</h2>
            <div v-for="(item1,index1) in item" :key="index1">
              <p>{{item1.content}}</p>
              <img :src="item1.image" alt="">
            </div>
          </article>
    </div>
    <div class="like" @click="good">
      <img :src="Good" alt="" class="good">
      <span>{{num}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-about {
  .abouttitle {
    font-size: 20px;
  }

  .detail {
    text-align: left;
    img {
      width: 360px;
      height: 220px;
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
  margin-top: 9px;
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
      item: []
    };
  },
  created(){
    if(JSON.stringify(this.$route.params) !== '{}'){
      const data = this.$route.params.story;
      this.cover = data.cover
      this.title = data.title
      this.item =data.story
    }
  },
  methods: {
    good () {
      this.isGood = !this.isGood
      if(this.isGood){
        this.Good = '/static/img/goods.png'
        this.num = this.num + 1
        this.isFirstCome++
      }
      else {
          this.num = this.num - 1 
        this.Good = '/static/img/good.png'
      }
    }
  }
};
</script>


