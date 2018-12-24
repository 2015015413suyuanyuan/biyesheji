<template>
  <div class="page-tabbar">
      <h1>已登录的时候显示的页面</h1>
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
      isHasBookList: false
    };
  },
  methods: {
    change(){
      this.isHasBookList = !this.isHasBookList
    }
  }
};
</script>


