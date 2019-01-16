<template>
<div>
  <mt-header fixed title="创建菜谱">
    <mt-button class="canclecolor"  @click.native="openConfirm" slot="left">取消</mt-button>
  </mt-header> 
  <Cropper></Cropper>
  <div class="edit-div123 MyClass"
      v-html="innerText"
      :contenteditable="canEdit"
      @focus="isLocked = true"
      @blur="isLocked = false"
      @input="changeText"
      :placeholder='placeholderValue'
      ref='input111'
      id="input111"
      >
</div>
  <div class="hr"></div>
  <MyInputaStory :placeholderValue='storyPlaceHolder' class='storyClass'></MyInputaStory>
  <Usage></Usage>
  <Step></Step>
  <section>
    <p class="tip">小贴士</p>
    <MyInputTip :placeholderValue='tipPlaceHolder' ></MyInputTip>
  </section>
  <div class='myBtn' @click="publicTheCook">
    发布这个菜谱
  </div>
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
import { MessageBox } from 'mint-ui';
import Step from './Step'
import { Header } from 'mint-ui';
import Usage from './Usage'
import Cropper from './Cropper.vue';
import MyInput from './MyInput.vue'
import MyInputaStory from './MyInputaStory.vue'
import MyInputTip from './MyInputTip.vue'

export default {
  data() {
    return {
      value: '',
      canEdit: true,
      innerText: this.value,
      isLocked: false,
      placeholderValue: '',
      inputVlue: '',
      inputStoryValue: '',
      inputTipValue: '',
      classifyList:[],
      isShowClassifyList: false,
      placeHolder: '写下你的菜谱名吧',
      storyPlaceHolder: '输入这道美食背后的故事',
      tipPlaceHolder: '这道菜还有哪些需要注意的细节和小技巧？'
    };
  },
  created()  {
    if(JSON.stringify(this.$route.params.new) != '[]'){
      this.isShowClassifyList = true
      this.classifyList = this.$route.params.new
    }
    if(this.$route.params.cookName  != ''){
      this.innerText = this.$route.params.cookName
    }
    localStorage.clear();
  },
  components: {
    Step,
    Usage,
    Cropper,
    MyInput,
    MyInputaStory,
    MyInputTip
  },
  methods: {
    openConfirm() {
      this.$refs.modal.style.display = 'block'
      this.$refs.msgbox.style.display = 'block'  
    },
    cancel(){
      this.$refs.modal.style.display = 'none'
      this.$refs.msgbox.style.display = 'none'
    },
    dele(){
      this.$router.push('/')
    },
    publicTheCook() {
      console.log('this.inputVlue', this.inputVlue,'this.inputTipValue', 
      this.inputTipValue,'inputStoryValue',this.inputStoryValue,
      'usage',JSON.parse(localStorage.getItem('usage')),
      'step',JSON.parse(localStorage.getItem('step')),
      // 'coverImage',localStorage.getItem('coverImage'),
      )
    },
    changeText(){
      console.log( this.$refs.input111.innerHTML);
    }   
  }
}
</script>
<style lang="scss" scoped>
.canclecolor{
  color: #FF9800 !important;
}
.edit-div123 {
  margin: 0 auto;
  width: 95vw;
  min-height: 30px;
  max-height: 300px;
  _height: 26px;
  line-height: 30px;
  overflow: auto;
  word-break: break-all;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  color: #101010;
  font-size: 22px;
  &[contenteditable=true]{
    -webkit-user-modify: read-write-plaintext-only;
    font-size: 16px;
    &:empty:before {
      content: attr(placeholder);
      font-size: 22px;
      display: block;
      color: #555353;
    }
  }
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
  margin: 0 auto;
  text-align: left;
  position: relative;
  font-size: 18px;
  margin-bottom: 10px;
  width: 95vw;
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
.inputspe1 {
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
.myBtn {
  background-color: #FFBA00;
  color: white;
  width: 100vw;
  height: 62px;
  line-height: 62px;
  font-size: 21px;
  margin-top: 36px;
}
.MyClass {
  margin-top: 30px;
  text-align: center;
  font-size: 22px;
  padding: 13px 0;
  color: #555353
}
.storyClass {
  font-size: 14px;
  padding: 19px 0;
}
.hr {
  width: 95vw;
  height: 1px;
  background: #E3E0E0;
  margin: 0 auto;
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
</style>
