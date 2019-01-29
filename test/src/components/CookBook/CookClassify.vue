<template>
  <div class="page-classify">
    <mt-header fixed title="推荐至分类">
      <mt-button class="canclecolor" @click.native="openConfirm" slot="left">取消</mt-button>
      <mt-button  class="canclecolor" slot="right" @click.native="save">完成</mt-button>
    </mt-header>
    <input type="text" v-model="inputval" disabled placeholder="如：快手菜、早餐、汤羹、零食" class="inputbox">
    <p class="all">所有分类</p>
    <mt-checklist align="right" class="page-part" title="热门分类" v-model="value4" :options="classify1"></mt-checklist>
    <mt-checklist align="right" class="page-part" title="一日三餐" v-model="value4" :options="classify2"></mt-checklist>
    <mt-checklist align="right" class="page-part" title="家常菜谱" v-model="value4" :options="classify3"></mt-checklist>
    <mt-checklist align="right" class="page-part" title="主食小吃" v-model="value4" :options="classify4"></mt-checklist>
    <mt-checklist align="right" class="page-part" title="时令美食" v-model="value4" :options="classify5"></mt-checklist>
  </div>
</template>

<style lang="scss" scoped>
.page-classify {
  input:disabled {
    color: #2c3e50;
    background-color: white;
    padding: 0 5px;
    font-size: 14px;
    height: 54px;
    line-height: 54px;
  }
  .txtred {
    color: red;
  }
  .canclecolor {
    color: #ffba00;
  }
  .inputbox {
    padding: 0;
    width: 100%;
    border: 0;
    margin-top: 40px;
    overflow: scroll
  }
  .inputbox:focus {
    border: 0;
    outline: none;
  }
  .all {
    text-align: left;
    background-color: #F4F3F3;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    padding-left: 10px;
  }
  .page-part {
    text-align: left;
  }
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
      classify1: ["热菜", "宝宝辅食", "烘焙", "食疗养生"],
      classify2: ["早餐", "午餐", "晚餐", "宵夜"],
      classify3: [
        "快手菜",
        "汤羹",
        "素食",
        "川菜",
        "粤菜",
        "下酒菜",
        "下饭菜",
        "家常菜",
        "凉菜沙拉"
      ],
      classify4: ["点心", "粥品", "面食", "米食", "饮品"],
      classify5: ["春季时令", "夏季时令", "秋季时令", "冬季时令"],
      inputval: "",
      inputarr: [],
      newarritem: "",
      classifyList:[]
    };
  },
  created() {
    if (JSON.stringify(this.$route.params) !== "{}") {
      this.classifyList = this.$route.params;
      this.inputval = this.classifyList.new;
      if(this.inputval == ''){
        
      }
      this.value4= '';
    } else {
    }
  },
  methods: {
    openConfirm() {
      this.$router.push({
        name: "CreateBook",
        params: { new: this.inputarr }
      });
    },
    save() {
      this.$router.push({ name: "CreateBook", params: { new: this.inputarr } });
    }
  },
  watch: {
    value4: {
      handler: function(newVal) {
        this.inputval = "";
        this.inputarr = [];
        if (this.value4.length != 0) {
          for (var i = 0; i < this.value4.length; i++) {
            this.inputval += this.value4[i] + "、";
          }
          this.inputarr = this.inputval.split("、");
          this.inputarr.length = this.inputarr.length - 1;
          this.inputval = this.inputval.slice(0, this.inputval.length - 1);
        }
      },
      deep: true
    }
  }
};
</script>
