<template>
<div>
  <mt-header fixed title="创建菜谱">
    <mt-button class="canclecolor"  @click.native="openConfirm" slot="left">取消</mt-button>
    <mt-button slot="right">保存</mt-button>
  </mt-header> 
  <Cropper></Cropper>
  <section class="inputspe">
    <input type="text" placeholder="写下你的菜谱名吧" autofocus >
  </section>
  <div class="inputspe1">
    <div class='rich' contenteditable="true" placeholder='输入这道美食背后的故事'></div>
  </div>
  <Usage></Usage>
  <Step></Step>
  <section>
    <p class="tip">小贴士</p>
    <input type="textarea" class="inputTip" placeholder="这道菜还有哪些需要注意的细节和小技巧？">
  </section>
  <router-link to="/CookClassify" class="linktoclassify">
    <div class="box">
      <span>推荐至分类</span>
      <i class="right"></i>
    </div>
  </router-link>
  <ul class='classifyList'>
    <li v-for="(item, index) in classifyList" :key="index">{{item}}</li>
  </ul>
</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import Step from './Step'
import { Header } from 'mint-ui';
import Usage from './Usage'
import Cropper from './Cropper.vue';

export default {
  data() {
    return {
      classifyList:[],
      isShowClassifyList: false
    };
  },
  created()  { 
    if(JSON.stringify(this.$route.params.new) != '[]'){
      this.isShowClassifyList = true
      this.classifyList = this.$route.params.new
    }
  },
  components: {
    Step,
    Usage,
    Cropper
  },
  methods: {
  openConfirm() {
    MessageBox.confirm('',{
    message: '编辑还未保存，你确定要退出吗？', 
    title: '提示', 
    confirmButtonText: '确定', 
    cancelButtonText: '取消' 
    }).then(action => {
      if(action == 'confirm'){
          this.$router.push('/')
      }
    }).catch(err=> {
      if (err == 'cancel') {     //取消的回调
      } 
    });
  }
  }
}
</script>
<style lang="scss" scoped>
.canclecolor{
  color: #FF9800 !important;
}
.tip{
  text-align: left;
  font-weight: bolder;
  font-size: 19px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.inputTip{
  outline: none;
  border: 0;
  width: 100%;
  height: 30px;
  font-size: 16px;
  margin-bottom: 30px;
}

.box{
  text-align: left;
  position: relative;
  font-size: 18px;
  margin-bottom: 10px;
}
.box span {
  padding-left: 12px;
}
.right::after {
  border: solid 2px #999;
  border-bottom-width: 0;
  border-left-width: 0;
  content: " ";
  top: 50%;
  right: 20px;
  position: absolute;
  width: 5px;
  height: 5px;
  -webkit-transform: translateY(-50%) rotate(45deg);
  transform: translateY(-50%) rotate(45deg);
}
.linktoclassify{
  text-decoration: none;
  color: black;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
section {
  width: 95vw;
  margin: 0 auto;
  text-align: left;
}
.classifyList {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 14px;
}
.classifyList::after {
  display: block;
  content: '';
  clear: both;
}
.classifyList li {
  display: block;
  float: left;
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: rgba(255, 152, 0, 1);
  text-align: center;
  color: white;
  font-size: 14px;
  margin-right: 9px;
  margin-bottom: 11px;
}
.inputspe {
  margin: 0 auto;
  text-align: center;
  width: 95vw;
  height: 56px;
  line-height: 56px;
  margin-top: 18px;
  border-bottom: 1px solid #e3e0e0;
}
.inputspe input {
  width: 95vw;
  border: 0;
  outline: none;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: rgba(85, 83, 83, 1);
  font-size: 24px;
  font-family: Microsoft Yahei;
}
.inputspe1{
  margin: 0 auto;
  margin-bottom: 36px;
  height: auto;
  padding: 19px 0;
  display: flex;
  width: 95vw;
  .rich {
    width: 95vw;
    min-height: 20px;
    max-height: 300px;
    _height: 120px;
    margin-left: auto;
    margin-right: auto;
    outline: 0;
    font-size: 12px;
    line-height: 24px;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
    color: #101010;
    text-align: left;
  }
  .rich:empty:before{
    content: attr(placeholder);
    color:#A29999;
    font-size: 20px !important;
  }
  .rich:focus:before{
    content:none;
  }
}
</style>
