<template>
    <div class="cookbook">
        <mt-header fixed title="创建菜谱">
            <mt-button class="canclecolor"  @click.native="openConfirm"  slot="left">取消</mt-button>
            <router-link to="/CreateBook" slot="right">
                <mt-button>继续</mt-button>
            </router-link>
        </mt-header>
        <section class="inputspe">
            <div class='rich' contenteditable="true" placeholder='写下你的菜谱名吧'></div>
        </section>
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

  .canclecolor{
      color: #FF9800 !important;
  }

  .inputspe {


  }

  .inputspe{
    margin-top: 40px;
    border-bottom: 1px solid #ccc;
    height: auto;
    padding: 8px 0;
    display: flex;
    border-bottom: 1px solid rgba(227, 224, 224, 1);
    font-size: 14px;
  }

	.rich {
    width: 95vw; 
    min-height: 20px; 
    max-height: 600px;
    _height: 120px; 
    outline: 0; 
    font-size: 14px; 
    line-height: 24px;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
    float: left;
    text-align: left;
    display: flex;
    align-items:center;
    justify-content:left;
}
.rich:empty:before{
    content: attr(placeholder);   /* element attribute*/
    /*content: 'this is content';*/
    color:#A29999;
}
.rich:focus:before{
content:none;
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

