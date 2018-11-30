<template>
  <div class="footer-box suitIphoneX">
    <template v-cloak v-for="(item, index) in footerList">
      <router-link :to="item.link" v-if="item.isShow" class="footer-list">
        <!-- 主要为了满足“推荐”的图片比其他的图片大的需求 -->
        <div v-if="index === 0" class="item" @click="activeFooter(item.name)">
          <img :src='item.activeImg' v-if="item.isActive" :style="firstImgStyle" />
          <img :src='item.defaultImg' v-else :style="firstImgStyle"/>
          <div class="title active" v-if="item.isActive" >{{ item.title }}</div>
          <div class="title" v-else>{{ item.title }}</div>
        </div>
        <div v-else class="item" @click="activeFooter(item.name)">
          <img :src='item.activeImg' v-if="item.isActive" :style="imgStyle" />
          <img :src='item.defaultImg' v-else :style="imgStyle"/>
          <div class="title active" v-if="item.isActive" >{{ item.title }}</div>
          <div class="title" v-else>{{ item.title }}</div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'footer-view',
  data() {
    return {
      footerList: [
        {
          name: 'home',
          isShow: true,
          isActive: true,
          title: '推荐',
          defaultImg: '/static/img/toolbaricon_home.png',
          activeImg: '/static/img/toolbaricon_home_full.png',
          link: '/',
        },
        {
          name: 'category',
          isShow: true,
          isActive: false,
          title: '逛',
          defaultImg: '/static/img/toolbaricon_classify.png',
          activeImg: '/static/img/toolbaricon_classify_full.png',
          link: '/KitchenStory',
        },
        {
          name: 'cart',
          isShow: true,
          isActive: false,
          title: '购物车',
          defaultImg: '/static/img/toolbaricon_shoppingcart.png',
          activeImg: '/static/img/toolbaricon_shoppingcart_full.png',
          link: '/Classify',
        },
        {
          name: 'my',
          isShow: true,
          isActive: false,
          title: '我的',
          defaultImg: '/static/img/toolbaricon_profile.png',
          activeImg: '/static/img/toolbaricon_profile_full.png',
          link: '/my',
        },
      ],
      imgStyle: {
        height: '22px',
      },
      firstImgStyle: {
        height: '25px',
      },
    };
  },
  created() {
    this.setDefaultActive();
  },
  methods: {
    activeFooter(key) {
      // 处理底部导航的点击事件
      for (let index = 0, size = this.footerList.length; index < size; index += 1) {
        const item = this.footerList[index];
        if (item.name !== key) {
          item.isActive = false;
        } else {
          item.isActive = true;
        }
      }
    },
    setDefaultActive() {
      const routerName = this.defaultPage;
      this.activeFooter(routerName);
    },
  },
  mounted() {
    // 从API获取最新的底部导航图片和类别【暂时没用到】
  },
  computed: {
    defaultPage() {
      return this.$store.state.defaultPage;
    },
  },
  watch: {
    defaultPage() {
      this.setDefaultActive();
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: px2vw(100);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  z-index: 11;
}

.footer-list {
  flex: 1 1 auto;
}

a.footer-list {
  cursor: cursor;
  text-decoration: none;
}

.item {
  height: px2vw(100);
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: #fafafa;

  .title {
    color: #333;
    font-size: 10px;
    vertical-align: middle;
    background: transparent;
  }

  .title.active {
    color: red;
  }
}
</style>
