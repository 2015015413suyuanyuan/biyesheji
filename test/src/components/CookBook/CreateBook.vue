<template>
<div>
    <mt-header fixed title="创建菜谱">
        <mt-button class="canclecolor"  @click.native="openConfirm" slot="left">取消</mt-button>
    </mt-header> 
    <SimpleCropper></SimpleCropper>
    <Usage></Usage>
    <Step></Step>
    <section>
        <p class="tip">小贴士</p>
        <input type="textarea" class="inputTip" placeholder="这道菜还有哪些需要注意的细节和小技巧？">
    </section>
        <div class="box" @click="toClassify">
            <span>推荐至分类</span>
            <i class="right"></i>
        </div>
    <ul class="classifyBox">
      <li  v-for="(item,index) in classifyList.new">{{item}}</li>
    </ul>
    <button class="btn">发布这个菜谱</button>
</div>
</template>
<script>
import SimpleCropper from "./SimpleCropper";
import { MessageBox } from "mint-ui";
import Step from "./Step";
import { Header } from "mint-ui";
import Usage from "./Usage";

export default {
  data() {
    return {
      filesPreview: [],
      classifyList: []
    };
  },
  components: {
    SimpleCropper,
    Step,
    Usage
  },
  created() {
    if (this.$route != undefined) {
      this.classifyList = this.$route.params;
      console.log(this.classifyList);
    } else {
    }
  },
  methods: {
    openConfirm() {
      MessageBox.confirm("", {
        message: "编辑还未保存，你确定要退出吗？",
        title: "提示",
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(action => {
          if (action == "confirm") {
            this.$router.push("/");
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    },
    toClassify(){
       this.$router.push({ name: "CookClassify", params: { new: this.classifyList.new } });
    }
  }
};
</script>
<style>
.btn{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #FFBA00;
  color: white;
  border: 0;
  margin-top: 30px;
  padding: 0;
  font-size: 21px;
}
.classifyBox{
  color: white;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-left: 10px;
}
.classifyBox::after{
  display: block;
  content: "";
  clear: both;
}
.classifyBox li {
  list-style: none;
  float: left;
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
  background-color: #ff9800
}
.canclecolor {
  color: #ff9800 !important;
}
.tip {
  text-align: left;
  font-weight: bolder;
}
.inputTip {
  outline: none;
  border: 0;
  width: 100%;
  height: 30px;
}

.box {
  text-align: left;
  font-size: 16px;
  margin-bottom: 20px;
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
.linktoclassify {
  text-decoration: none;
  color: black;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
</style>
