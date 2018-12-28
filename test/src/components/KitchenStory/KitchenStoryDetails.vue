<template>
  <div class="page-about">
    <mt-header title="厨房故事" fixed class="abouttitle">
      <router-link to="/KitchenStory" slot="left" icon='back'>
        <mt-button icon='back' class="back"></mt-button>
      </router-link>
    </mt-header>
    <div class='detail'>
      <img src="../../assets/MyLogo.png" alt="">
          <article>
            <h2>外国留学生第一次吃中国面食, 吃了3个小时, 服务员买单笑晕了!</h2>
            <p>
              我曾偶尔听到一些老外评论中国的面食，超级好吃！怎么吃都不够！越吃越上瘾！谈到面食，我想网友们第一个就会想到我们北方人，比如：炸酱面，油泼面，韭菜盒子，水饺，发面饼等，中国的美食现在已经风靡全球，我们北方的面食也不例外，小伙伴们应该都看到美国人吃我们中国的方便面的视频了吧？吃上一口，简直高兴的要飞起来的感觉，前几天，我听说有的老外以为我们中国的方便面只有上级人士才能吃到，所以攒钱要来中国吃方便面，到了中国才知道，方便面原来是这么普通的一件东西，甚至有的国家把我们中国的方便面当成奢饰品，只有重要的宴会才可以吃到，可想而知，我们中国的面食魅力有多么伟大了吧！
            </p>
          </article>
    </div>
    <div class="like">
      <img src="../../assets/good.png" alt="" class="good">
      <span>88</span>
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
  .good {
   width: 18px;
   height: 18px;
   position: absolute;
   top: 7px;
   left: 46px;
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
      selected: '外卖'
    };
  },
};
</script>


