<template> 
<div class="page-cookbook1">
    <mt-header fixed title="创建菜谱">
        <router-link to="/" slot="left">
            <mt-button icon='back'></mt-button>
        </router-link>
    </mt-header>
    <main>
        <img src="../../assets/img/logo.jpg" class="head">
        <p>分享的人是厨房里的天使</p>
        <router-link  to="/cookBook2" class="cancleunderline">
            <img src="../../assets/img/create.jpg" class="create">
            <p>创建菜单</p>        
        </router-link>
    </main>
    
</div>
</template>
<style lang="scss" scoped>
.page-cookbook1 {
    main {
        p {
            padding: 0;
            font-size: 18px;
            color: #101010;
            margin: 20px 0;
        }
        .head {
            margin-top: 50px;
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
        .create {
            width: 117px;
            height: 220px;
            border: 1px solid #9ee6fc;

        }
        .cancleunderline {
            text-decoration: none;
            color: #2c3e50;
        }
    }
}
</style>
<script>
import { Search } from "mint-ui";
import { Header } from "mint-ui";
import { Swipe, SwipeItem } from "mint-ui";
import Vue from "vue";
import Router from "vue-router";

export default {
  name: "page-cookboo1",
  data() {
    return {
      value: "外卖"
    };
  },
};
</script>