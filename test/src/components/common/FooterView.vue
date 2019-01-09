<template>
  <div class="footer-box suitIphoneX">
    <template v-cloak v-for="(item, index) in footerList">
      <router-link :to="item.link" v-if="item.isShow" class="footer-list">
        <!-- 主要为了满足“推荐”的图片比其他的图片大的需求 -->
        <div v-if="index === 0" class="item" @click="activeFooter(item.name)">
          <img :src='item.activeImg' v-if="item.isActive"/>
          <img :src='item.defaultImg' v-else/>
          <div class="title active" v-if="item.isActive" >{{ item.title }}</div>
          <div class="title" v-else>{{ item.title }}</div>
        </div>
        <div v-else class="item" @click="activeFooter(item.name)">
          <img :src='item.activeImg' v-if="item.isActive"/>
          <img :src='item.defaultImg' v-else/>
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
          name: '',
          isShow: true,
          isActive: true,
          title: '主页',
          defaultImg: '/static/img/footer1.png',
          activeImg: '/static/img/footter1.png',
          link: '/',
        },
        {
          name: 'KitchenStory',
          isShow: true,
          isActive: false,
          title: '厨房故事',
          defaultImg: '/static/img/footer2.png',
          activeImg: '/static/img/footter2.png',
          link: '/KitchenStory',
        },
        {
          name: 'Classify',
          isShow: true,
          isActive: false,
          title: '菜谱分类',
          defaultImg: '/static/img/footer3.png',
          activeImg: '/static/img/footter3.png',
          link: '/Classify',
        },
        {
          name: 'NoLogged',
          isShow: true,
          isActive: false,
          title: '我的',
          defaultImg: '/static/img/footer4.png',
          activeImg: '/static/img/footter4.png',
          link: '/NoLogged',
        },
      ]
    };
  },
  created() {
    var url = this.$route.path;
    var url1 = url.slice(1);
   
      for (let index = 0, size = this.footerList.length; index < size; index += 1) {
        const item = this.footerList[index];
        if (item.name !== url1) {
          item.isActive = false;
        } else {
          item.isActive = true;
        }
      }    
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
  height: 45px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  z-index: 20000;
}

.footer-list {
  flex: 1 1 auto;
}

a.footer-list {
  cursor: cursor;
  text-decoration: none;
}

.item {
  height: 54px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  
  img {
    width: 24px;
    height: 24px;
  }

  .title {
    color: #333;
    font-size: 14px;
    vertical-align: middle;
    background: transparent;
  }

  .title.active {
    color: #FFBA00;
  }
}
</style>
