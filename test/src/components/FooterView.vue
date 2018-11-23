<template>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <router-link to="/">
        <div class="img">
            <img slot="icon" src="../assets/logo.png">
        </div>
        首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="菜谱">
        <router-link to="/CookBook">
        <div class="img">
            <img slot="icon" src="../assets/logo.png">
        </div>
        菜谱</router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <router-link to="/My">
        <div class="img">
            <img slot="icon" src="../assets/logo.png">
        </div>
        我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
</template>

<style>
.img img{
   width: 24px;
   height: 24px;
}
.mint-tabbar.is-fixed{
    display: none;
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
      selected: '首页'
    };
  },

};
</script>


