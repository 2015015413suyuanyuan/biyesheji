<template>
  <div class="page-about">
    <mt-header title="关于" fixed class="abouttitle">
      <router-link to="/NoLogged" slot="left" icon='back'>
        <mt-button icon='back'></mt-button>
      </router-link>
    </mt-header>
    <div class='detail'>
      <img src="../../assets/img//MyLogo.png">
      <p class='title'>美食加</p>
      <p class='version'>版本号v1.0.0</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-about {
  background-color: rgba(255, 249, 239, 1);
  overflow: hidden;
  height: 100vh;

  .abouttitle {
    font-size: 20px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .detail {
    img {
      margin-top: 128px;
      width: 120px;
      height: 120px;
      border-radius: 11px;
    }
    .title {
      margin-top: 20px;
      color: #101010;
      font-size: 20px;
    }
    .version {
      margin-top: 11px;
      color: #101010;
      font-size: 14px;
    }
  }
}
</style>
<script>
import Vue from 'vue'
import Router from 'vue-router'

export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖',
      num: 50
    };
  },
  components: {
  }
};
</script>


