<template>
    <div class="cookbook">
        <mt-header fixed title="创建菜谱">
            <mt-button class="canclecolor"  @click.native="openConfirm"  slot="left">取消</mt-button>
            <!-- <router-link to="/CreateBook" slot="right" :class="{ colorStyle: isActive }"> -->
            <mt-button slot="right" class='disabledA' :class="{ colorStyle: isActive }" @click.native="toNext">继续</mt-button>
        </mt-header>
        <MyInput v-model='inputVlue' :placeholderValue='placeHolder' class='MyClass'></MyInput>
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
import MyInput from './MyInput.vue'
export default {
  name: 'page-cookbook',
  data() {
    return {
      inputVlue: '',
      placeHolder: '写下你的菜谱名吧',
      isActive: false
    };
  },
  watch: {
    'inputVlue'(){
      if(this.inputVlue != ''){
        this.isActive = true
      }else {
        this.isActive = false
      }
    }
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
    },
    toNext() {
      if(this.isActive){
        this.$router.push({
          name: "CreateBook",
          params: { cookName: this.inputVlue }
      });
      }
    }
  },
  components: {
    MyInput
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
  .disabledA {
    color: #bab5b2;
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
      
    }
    .specialLineHeight {
      line-height: 25px;
      letter-spacing: 2px;
    }
  }
  .MyClass {
    margin-top: 50px;
    text-align: center;
    font-size: 24px;
  }
}
</style>

