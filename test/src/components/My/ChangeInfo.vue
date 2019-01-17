<template>
  <div class="page-change">
    <mt-header fixed title="我的资料">
        <mt-button @click.native="back" icon='back'  slot="left"></mt-button>
        <mt-button slot="right"  @click.native="save">保存</mt-button>
    </mt-header>
      <div class='changeImg'>
        <span>头像</span>
        <Cropper></Cropper>
      </div>
  </div>
</template>

<style lang='scss' scoped>
.page-change {
  .changeImg {
    width: 100vw;
    height: 50px;
    margin-top: 40px;
    float: left;
  }
  span {
    display: block;
    float: left;
    height: 50px;
    line-height: 50px;
  }
}
.page-change::after {
  display: block;
  content: '';
  clear: both;
}
</style>
<script>
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'
import Cropper from './Cropper.vue';

export default {
  name: 'page-tabbar',
  data() {
    return {
      touImage: '',
      list: []
    };
  },
  created() {
    this.getData();
  },
  components: {
Cropper
  },
  methods: {
    getData() {
      const data = {
        "username": localStorage.getItem('username'),
      }
      this.axios.post('http://140.143.75.82:81/index.php/basicInfo', this.qs.parse(data),{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        console.log('查看个人信息',res.data[0])
        this.list = res.data[0]
      }).catch((err) => {
        console.log(err)
      })      
    },
    back() {
      this.$router.back(-1);
    },
    save() {

    }
  },
};
</script>


