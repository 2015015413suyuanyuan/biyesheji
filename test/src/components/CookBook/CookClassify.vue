<template>
  <div class="page-classify">
    <mt-header fixed title="推荐至分类">
        <mt-button class="canclecolor"  @click.native="openConfirm" slot="left">取消</mt-button>
        <mt-button slot="right">完成</mt-button>
    </mt-header> 
    <mt-checklist
      align="left"
      class="page-part"
      title="右对齐"
      v-model="value4"
      :options="classify">
    </mt-checklist>
    <div class="box">
    <i class="right">111</i>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.page-part {
  text-align: left;
}
.box{
  position: relative;
}
.right::after {
    border: solid 2px #c8c8cd;
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
</style>

<script>
import { Checklist } from 'mint-ui';
import { Header } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  name: 'classify',
  data() {
    return {
      value4: [],
      classify:[
        {
          'name':'早餐',
        },
        {
          'name':'午餐',
        },
        {
          'name':'晚餐',
        },
        {
          'name':'宝宝辅食',
        },
        {
          'name':'营养餐',
        },
      ]
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
                  this.$router.push('/CreateBook')
              }
          }).catch(err=> {
                if (err == 'cancel') {     //取消的回调
                } 
          });
      }
    }

};
</script>