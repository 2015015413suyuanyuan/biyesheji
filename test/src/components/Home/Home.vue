<template>
  <div class="page-hellow">
      <h1>helloworld</h1>
      <router-link to="/CookBook">
        <div class="img">
         
        </div>
        菜谱</router-link>
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


