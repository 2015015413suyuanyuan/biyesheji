<template>
<div>
  <mt-header fixed :title="title">
    <mt-button class="canclecolor"  @click.native="openConfirm" slot="left">取消</mt-button>
  </mt-header> 
  <Cropper></Cropper>
  <i-input class="menuName" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeholderMenuName" v-model='menu_name' @on-blur='testMenuName(menu_name)'></i-input>
  <div class="hr"></div>
  <i-input class="story" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeholderStory" v-model='story'></i-input>
  <Usage></Usage>
  <Step></Step>
  <section>
  <p class="tip">小贴士</p>
  <i-input class='tipInput' type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeholderTips" v-model='tips' ></i-input>
  </section>
  <div class="linktoclassify" @click="saveInfo">
    <div class="box">
      <span>推荐至分类</span>
      <i class="right"></i>
    </div>
  </div>
  <ul class='classifyList'>
    <li v-for="(item, index) in classifyList" :key="index">{{item}}</li>
  </ul>
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
import Step from './Step'
import { Header } from 'mint-ui';
import Usage from './Usage'
import Cropper from './Cropper.vue';
// import { constants } from 'http2';

export default {
  data() {
    return {
      classifyList:[],
      isShowClassifyList: false,
      story: '',
      menu_name: '',
      tips: '',
      placeholderStory: '输入这道美食背后的故事',
      placeholderMenuName: '写下你的菜谱名吧',
      placeholderTips: '这道菜还有哪些需要注意的细节和小技巧？',
      new : true,
      bookID: '',
      title:'创建菜谱'
    };
  },
  created()  {
    // 菜谱名
    if(JSON.stringify(localStorage.getItem('menu_name')) == 'null'){
    }else{
      this.menu_name = localStorage.getItem('menu_name');
    }
    // 小窍门
    if(JSON.stringify(localStorage.getItem('tips')) == 'null'){
    }else{
      this.tips = localStorage.getItem('tips');
    }
    // 厨房故事
    if(JSON.stringify(localStorage.getItem('story')) == 'null'){
    }else{
      this.story = localStorage.getItem('story');
    }
    // 推荐分类
    if(JSON.stringify(localStorage.getItem('classifyList')) == '[]'){
    }else{
      this.isShowClassifyList = true
      this.classifyList = JSON.parse(localStorage.getItem('classifyList'));
    }

   const data =  this.$route.params;
   if(JSON.stringify(data) == 'undefined' || JSON.stringify(data) == '{}'){
     this.title = '创建菜谱'
   }else {
     this.tips = data.menu.menu.tips;
     localStorage.setItem('cover',data.menu.menu.cover)
     this.menu_name = data.menu.menu.menu_name
     this.story = data.menu.menu.story
     localStorage.setItem('materials',JSON.stringify(data.menu.menu.materials));
     localStorage.setItem('step',JSON.stringify(data.menu.menu.step));
     this.new = data.menu.new
     this.bookID = data.menu.id
     this.title = data.menu.title
   }
   
  },
  components: {
    Step,
    Usage,
    Cropper,
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
      localStorage.removeItem('tips');
      localStorage.removeItem('story');
      localStorage.removeItem('cover');
      localStorage.removeItem('step');
      localStorage.removeItem('materials');
      localStorage.removeItem('classifyList');
      this.$router.push('/')
    },
    publicTheCook() {
      // 新增
      if(this.new){
        localStorage.setItem('menu_name',this.menu_name)
        const data = {
          "user_id": localStorage.getItem('user_id'),
          "cover": localStorage.getItem('cover'),
          'menu_name': this.menu_name,
          'story': this.story,
          'tips': this.tips,
          'materials': JSON.parse(localStorage.getItem('materials')),
          'step': JSON.parse(localStorage.getItem('step')),
          'class': JSON.parse(localStorage.getItem('list'))
        }
        this.$ajax.post('/create', data).then((res) => {
        if(res.data.message == '添加成功') {
          this.$Message.success('创建成功');
          localStorage.removeItem('tips');
          localStorage.removeItem('story');
          localStorage.removeItem('cover');
          localStorage.removeItem('step');
          localStorage.removeItem('materials');
          localStorage.removeItem('classifyList');
          this.$router.push({
            name: "CookBookDetail",
            params:{
              menu:{
              menu_name: this.menu_name,
              id: res.data.id,
              new : true,
              class: false
              }
            }
          });
        }
        }).catch((err) => {
          console.log(err)
        })
      }
      // 编辑
      else {
        localStorage.setItem('menu_name',this.menu_name)
        const data = {
          "user_id": localStorage.getItem('user_id'),
          "cover": localStorage.getItem('cover'),
          'menu_name': this.menu_name,
          'story': this.story,
          'tips': this.tips,
          'materials': JSON.parse(localStorage.getItem('materials')),
          'step': JSON.parse(localStorage.getItem('step')),
          'class': JSON.parse(localStorage.getItem('list')),
          "id":this.bookID
        }
        this.$ajax.post('update', data,{
          headers: {'Content-Type': 'application/json'}
        }).then((res) => {
        if(res.data.message == '编辑成功') {
          this.$Message.success('编辑成功');
          localStorage.removeItem('tips');
          localStorage.removeItem('story');
          localStorage.removeItem('cover');
          localStorage.removeItem('step');
          localStorage.removeItem('materials');
          localStorage.removeItem('classifyList');
          this.$router.push({
            name: "CookBookDetail",
            params:{
              menu:{
              menu_name: this.menu_name,
              id: this.bookID,
              new : false,
              class: false
              }
            }
          });
        }
        }).catch((err) => {
          console.log(err)
        })        
      }
    },
    // 输入菜谱名是否为空的验证
    testMenuName(menu_name) {
      if(menu_name == ''){
        this.$Message.warning('菜谱名不能为空哦'); 
      }else {
        localStorage.setItem('menu_name',menu_name)
      }
    },
    saveInfo(){
      localStorage.setItem('menu_name',this.menu_name);
      localStorage.setItem('tips',this.tips);
      localStorage.setItem('story',this.story);
      this.$router.push({
        name: "CookClassify",
        params: { new: this.classifyList }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.menuName>.ivu-input{
  text-align: center !important;
}
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
  height: 1.5px;
  background: #E3E0E0;
  margin: auto;
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
textarea.ivu-input {
  resize: none !important;
}
</style>
