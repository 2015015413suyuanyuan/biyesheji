<template>
  <div class="page-classify">
    <mt-header fixed title="推荐至分类">
      <mt-button class="canclecolor" @click.native="openConfirm" slot="left">取消</mt-button>
      <mt-button slot="right">完成</mt-button>
    </mt-header>
    <input type="text" v-model="inputval">
    <ul v-show="isActive">
      <li>没有找到相关分类</li>
      <li class="txtred" @click="pushlist">在分类中添加"拒绝"</li>
    </ul>
    <mt-checklist align="left" class="page-part" title="所有分类" v-model="value4" :options="classify"></mt-checklist>
  </div>
</template>

<style lang="scss" scoped>
.txtred{
  color: red;
}
</style>

<script>
import { Checklist } from "mint-ui";
import { Header } from "mint-ui";
import { MessageBox } from "mint-ui";
export default {
  name: "classify",
  data() {
    return {
      value4: [],
      classify: ['早餐','午餐','晚餐','宝宝辅食','川菜','粤菜'
      ],
      inputval: "",
      inputarr: [],
      isActive:false,
      newarritem:''
    };
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
            this.$router.push("/CreateBook");
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    },
    pushlist(){
      this.inputarr.push(this.newarritem);
      this.classify.push(this.newarritem);
      console.log('push',this.inputarr);
      this.inputval='';
      for(var i=0;i<this.inputarr.length;i++){
        this.inputval += this.inputarr[i]+ "、";
        console.log(this.inputarr[i])
      }
    },
  },
  watch: {
    value4: {
      handler: function(newVal) {
        this.inputval = "";
        this.inputarr=[]
        if (this.value4.length != 0) {
          for (var i = 0; i < this.value4.length; i++) {
            this.inputval += this.value4[i]+ "、";
          }
          this.inputarr = this.inputval.split('、');
          this.inputarr.length=this.inputarr.length-1;
          console.log('12',this.inputarr);
        }
      },
      deep: true
    },
    inputval: {
      handler: function(newVal) {
        for (var i = 0; i < this.value4.length; i++) {
        }
        var inputval1 = this.inputval.slice(0,this.inputval.length-1);
        if(inputval1.split('、').length != this.value4.length){
          this.isActive = true;
          var newarr = newVal.split('、');
          this.newarritem=newarr.pop();
        }
      },
      deep: true
    }
  }
};
</script>