<template>
  <div class="page-tabbar">
      <h1>我的首页</h1>
  </div>
</template>

<style>

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


