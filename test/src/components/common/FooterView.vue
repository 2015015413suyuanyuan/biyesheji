<template>
<div>
    <mt-tabbar v-model="selected"  fixed>
      <template v-for="(item) in footerList">
      <mt-tab-item id="item.name" v-if="item.isShow" class="footer-list" @click="activeFooter(item.name)">
        <router-link :to="item.link">
        <div class="img">
         
            <img slot="icon" :src="item.activeImg" v-if="item.isActive">
            <img slot="icon" :src="item.defaultImg" v-else >
        </div>
        {{item.title}}</router-link>
      </mt-tab-item>        
      </template>




    </mt-tabbar>
</div>

</template>

<style>
.img img{
   width: 24px;
   height: 24px;
}

</style>
<script>
import 'mint-ui/lib/style.css'
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'

export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '主页',
      show1:true,
      show2:true,
      show3:true,
      show4:true,
      isShow1:false,
      isShow2:false,
      isShow3:false,
      isShow4:false,
     footerList:[
        {
          name:'home',
          isShow:true,
          isActive:true,
          title:'首页',
          defaultImg:'/static/img/footer1.png',
          activeImg:'/static/img/footter1.png',
          link:'/'
        },
        {
          name:'Classify',
          isShow:true,
          isActive:false,
          title:'菜谱分类',
          defaultImg:'/static/img/footer2.png',
          activeImg:'/static/img/footter2.png',
          link:'/Classify'
        },
        {
          name:'KitchenStory',
          isShow:true,
          isActive:false,
          title:'厨房故事',
          defaultImg:'/static/img/footer3.png',
          activeImg:'/static/img/footter3.png',
          link:'/KitchenStory'
        },
        {
          name:'NoLogged',
          isShow:true,
          isActive:false,
          title:'我的',
          defaultImg:'/static/img/footer4.png',
          activeImg:'/static/img/footter4.png',
          link:'/NoLogged'
        },
      ],
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


