<template>
    <div class="cookbook">
        <mt-header fixed title="创建菜谱">
            <mt-button class="canclecolor"  @click.native="openConfirm"  slot="left">取消</mt-button>
            <!-- <router-link to="/CreateBook" slot="right" :class="{ colorStyle: isActive }"> -->
            <mt-button slot="right" class='disabledA' :class="{ colorStyle: isActive }" @click.native="toNext">继续</mt-button>
        </mt-header>
        <div class='MyClass'>
          <i-input class="menuName" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeholderMenuName" v-model='menu_name' @on-change='testMenuName(menu_name)' @on-blur='testMenuName(menu_name)'></i-input>
        </div>
        <section class="inputspe1">
            <p class="tip">提示</p>
            <p class='specialLineHeight'>
                1.好的标题是吸引厨友关注的第一步<br>
                2.在标题中描述菜谱的特点，会吸引更多人点击。如[不用捏的饭团]、[不焯水不放油的红烧肉]
            </p>
        </section>
        <!-- 提示用户是否退出编辑 -->
        <div class='msgbox' style="position:absolute;z-index: 2007;display:none;" ref="msgbox">
          <div class='mint-msgbox'>
            <div class='title'>编辑还未保存</div>
            <div class='textbox'>
              <div class='cancel' @click="cancel">
                继续编辑
              </div>
              <div class='sure' @click="dele">
                退出
              </div>
            </div>
          </div>
        </div>
        <div class='v-modal' style='z-index: 2006;display:none;' ref='modal'></div>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
export default {
  name: 'page-cookbook',
  data() {
    return {
      isActive: false,
      placeholderMenuName: '写下你的菜谱名吧',
      menu_name: ''
    };
  },
  mounted() {
    this.$Message.config({
        top: 10,
        duration: 1.5
    });
  },
    methods: {
    openConfirm() {
      this.$refs.modal.style.display = 'block'
      this.$refs.msgbox.style.display = 'block'        
    },
    toNext() {
      if(this.isActive){
        this.$router.push({
          name: "CreateBook",
          params: {
            menu: {
              new: true,
              isEdit: false,
              fromClassify: false
            }
          }
      
        });
      }
    },
    cancel(){
      this.$refs.modal.style.display = 'none'
      this.$refs.msgbox.style.display = 'none'
    },
    dele(){
      this.$router.push('/')
    },
    testMenuName(menu_name) {
      if(menu_name == ''){
        this.$Message.warning('菜谱名不能为空哦');
      }else {
        localStorage.setItem('menu_name',menu_name)
        this.isActive = true
      }
    }
  },
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
.mint-msgbox {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  width: 75%;
  border-radius: 0.08rem;
  font-size: 0.426667rem;
  -webkit-user-select: none;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: .2s;
  transition: .2s;
  text-align: center;
  .title {
    height: 60px;
    line-height: 60px;
  }
  .textbox::after {
    display: block;
    content: '';
    clear: both;
  }
  .textbox {
    border-top: 1px solid rgb(243, 238, 238);
    .cancel {
      width: 50%;
      float: left;
      height: 35px;
      line-height: 35px;
    }
    .sure {
      width: 50%;
      height: 35px;
      line-height: 35px;
      float: left;
      background-color: #FF9800;
      color: white;
    }
  }
}
}
</style>