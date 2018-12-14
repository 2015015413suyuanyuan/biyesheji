<template>
  <div class="page-tabbar">
    <ClassifyList></ClassifyList>
  </div>
</template>

<style>
  
</style>
<script>
  import {
  
    Tabbar
  
  } from 'mint-ui';
  
  import Vue from 'vue';
  
  import Router from 'vue-router';
  
  import ClassifyList from './ClassifyList'
  
  
  
  export default {
  
    name: 'page-tabbar',
  
    data() {
  
      return {
  
        selected: '外卖'
  
      };
  
    },
  
    components: {
      ClassifyList
    },
  
  };
</script>


