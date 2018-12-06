<template>
<div>
    <mt-header fixed title="创建菜谱">
        <mt-button class="canclecolor"  @click.native="openConfirm" slot="left">取消</mt-button>
        <mt-button slot="right">保存</mt-button>
    </mt-header> 
    <!-- <SimpleCropper :filesPreview='filesPreview' placeholder="选择或拖放图片"></SimpleCropper> -->
    <Step></Step>
    <section>
        <p class="tip">小贴士</p>
        <input type="textarea" class="inputTip" placeholder="这道菜还有哪些需要注意的细节和小技巧？">
    </section>
</div>
</template>
<script>
import SimpleCropper from './SimpleCropper'
import { MessageBox } from 'mint-ui';
import Step from './Step'
import { Header } from 'mint-ui';
export default {
    data() {
        return {
            filesPreview: [],
        };
    },
    components: {
        SimpleCropper,
        Step
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
<style>
.canclecolor{
    color: #FF9800 !important;
}
.tip{
    text-align: left;
    font-weight: bolder;
}
.inputTip{
    outline: none;
    border: 0;
    width: 100%;
    height: 30px;
}
</style>
