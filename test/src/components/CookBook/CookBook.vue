<template>
    <div class="cookbook">
        <mt-header fixed title="创建菜谱">
            <mt-button class="canclecolor"  @click.native="openConfirm"  slot="left">取消</mt-button>
            <router-link to="/CreateBook" slot="right" class='colorStyle'>
                <mt-button>继续</mt-button>
            </router-link>
        </mt-header>
        <div class="inputspe">
            <div class='rich' contenteditable="true" placeholder='写下你的菜谱名吧'></div>
        </div>
        <section class="inputspe1">
            <p class="tip">提示</p>
            <p class='specialLineHeight'>
                1.好的标题是吸引厨友关注的第一步<br>
                2.在标题中描述菜谱的特点，会吸引更多人点击。如[不用捏的饭团]、[不焯水不放油的红烧肉]
            </p>
        </section>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import { Header } from 'mint-ui';
export default {
  name: 'page-cookbook',
  data() {
    return {
     
    };
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
};   
</script>
<style lang="scss" scoped>
.cookbook {
  color: #888888;
  text-align: left;

  .canclecolor,.colorStyle{
      color: #FF9800 !important;
  }
  .inputspe{
    margin: 0 auto;
    margin-top: 40px;
    height: auto;
    padding: 8px 0;
    display: flex;
    border-bottom: 1px solid #e3e0e0;
    width: 95vw;
    .rich {
      width: 95vw;
      min-height: 20px;
      max-height: 300px;
      _height: 120px;
      margin-left: auto;
      margin-right: auto;
      outline: 0;
      font-size: 14px;
      line-height: 24px;
      word-wrap: break-word;
      overflow-x: hidden;
      overflow-y: auto;
      text-align: center;
      color: #101010;
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
  .inputspe1 {
    width: 95vw;
    margin: 0 auto;
    font-size: 14px;
    .tip {
      color: black;
      border-bottom: 5px solid red;
      width: 34px;
      padding-bottom: 3px;
      font-size: 17px;
      margin-bottom: 10px;
      margin-top: 15px;
    }
    .specialLineHeight {
      line-height: 25px;
      letter-spacing: 2px;
    }
  }
}
</style>

