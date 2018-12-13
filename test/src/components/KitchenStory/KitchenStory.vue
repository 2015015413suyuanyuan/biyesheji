<template>
  <div class="page-tabbar">
    <mt-header fixed title="厨房故事">
    </mt-header> 
    <StoryList></StoryList>
  </div>
</template>

<style>
.page-tabbar{
  background-color: #FFF9EF;
}
</style>
<script>
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'
import StoryList from './StoryList.vue'
import { Header } from "mint-ui";

export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    };
  },
  components:{
    StoryList
  }
};
</script>


