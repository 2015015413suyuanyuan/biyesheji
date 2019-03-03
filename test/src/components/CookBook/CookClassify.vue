<template>
  <div class="page-classify">
    <mt-header fixed title="推荐至分类">
      <mt-button class="canclecolor" @click.native="cancle" slot="left">取消</mt-button>
      <mt-button  class="canclecolor" slot="right" @click.native="save">完成</mt-button>
    </mt-header>
    <input type="text" v-model="inputval" disabled placeholder="如：快手菜、早餐、汤羹、零食" class="inputbox">
    <p class="all">所有分类</p>
    <ul v-for="(item,index) in classifyList" :key="index" class='classifyList'>
      <div class='titleHot'>{{item.titleHot}}</div>
      <li v-for="(item1,idx) in item.classify" :key="idx" class='listItem' @click="selected(item1.isSelected,index,item1,idx)">
        <div class='txt'>{{item1.name}}</div>
        <div v-if="item1.isSelected" class="trueImg">
          <img src="../../assets/img/true.png" class="move">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Checklist } from "mint-ui";
import { Header } from "mint-ui";
import { MessageBox } from "mint-ui";
export default {
  name: "classify",
  data() {
    return {
      classifyList:[
        { 
          titleHot: '热门分类',
          classify:[
            {
              name: '热菜',
              isSelected: false
            },
            {
              name: '宝宝辅食',
              isSelected: false
            },
            {
              name: '烘焙',
              isSelected: false
            },
            {
              name: '食疗养生',
              isSelected: false
            }
          ],
        },
        {
          titleHot: '一日三餐',
          classify:[
            {
              name: '早餐',
              isSelected: false
            },
            {
              name: '午餐',
              isSelected: false
            },
            {
              name: '晚餐',
              isSelected: false
            },
            {
              name: '宵夜',
              isSelected: false
            }
          ]
        },
        {
          titleHot: '家常菜谱',
          classify:[
            {
              name: '快手菜',
              isSelected: false
            },
            {
              name: '汤羹',
              isSelected: false
            },
            {
              name: '素食',
              isSelected: false
            },
            {
              name: '川菜',
              isSelected: false
            },
            {
              name: '粤菜',
              isSelected: false
            },
            {
              name: '下酒菜',
              isSelected: false
            },
            {
              name: '下饭菜',
              isSelected: false
            },
            {
              name: '家常菜',
              isSelected: false
            },
            {
              name: '凉菜沙拉',
              isSelected: false
            }
          ]
        },
        {
          titleHot: '主食小吃',
          classify:[
            {
              name: '点心',
              isSelected: false
            },
            {
              name: '粥品',
              isSelected: false
            },
            {
              name: '面食',
              isSelected: false
            },
            {
              name: '米食',
              isSelected: false
            },
            {
              name: '饮食',
              isSelected: false
            }
          ]
        },
        {
          titleHot: '时令美食',
          classify:[
            {
              name: '春季时令',
              isSelected: false
            },
            {
              name: '夏季时令',
              isSelected: false
            },
            {
              name: '秋季时令',
              isSelected: false
            },
            {
              name: '冬季时令',
              isSelected: false
            }
          ]
        }
      ], 
      inputval: "",
      inputarr: [],
      newarritem: "",
      selectedList:[]
    };
  },
  created() {
    console.log(this.$route.params.menu.new, 'this.$route.params.menu.new')
    if(JSON.stringify(localStorage.getItem('classifyList')) == 'null'){
    }else{
      var classifyList = JSON.parse(localStorage.getItem('classifyList'));
    for (var i = 0; i < classifyList.length; i++) {
      this.inputval += classifyList[i] + "、";
    }
    this.inputarr = this.inputval.split("、");
    this.inputarr.length = this.inputarr.length - 1;
    this.inputval = this.inputval.slice(0, this.inputval.length - 1);
      for(let i=0;i<this.classifyList.length;i++){
        for(let j=0;j<this.classifyList[i].classify.length;j++){
          for(let k=0;k<classifyList.length;k++){
            if(classifyList[k] == this.classifyList[i].classify[j].name ){
              this.classifyList[i].classify[j].isSelected = true
              this.selectedList.push({
                class_id: i+1,
                sort: classifyList[k]
              });
            }
          }
        }
      }  
    }    
  },
  methods: {
    cancle() {
      this.$router.push({
        name: "CreateBook",
        params: { 
          menu:{
            new: this.$route.params.menu.new,
            fromClassify: true
          }
        }
      });
    },
    save() {
      localStorage.setItem('list',JSON.stringify(this.selectedList));
      localStorage.setItem('classifyList',JSON.stringify(this.inputarr));
      this.$router.push({ name: "CreateBook" ,
      params: {
        menu : {
          new: this.$route.params.menu.new,
          isEdit: false,
          fromClassify: true
        }
      } });
    },
    selected(isSelected,index,item1,idx){
      this.inputarr = [];
      this.inputval = ''
      this.classifyList[index].classify[idx].isSelected = !this.classifyList[index].classify[idx].isSelected
      if(this.classifyList[index].classify[idx].isSelected){
        this.selectedList.push({
          class_id: index+1,
          sort: item1.name
        });
      } else {
        for(let i=0;i<this.selectedList.length;i++){
          if(this.selectedList[i].sort == item1.name){
            this.selectedList.splice(i,1);
          }
        }
      }
      if (this.selectedList.length != 0) {
        for (var i = 0; i < this.selectedList.length; i++) {
          this.inputval += this.selectedList[i].sort + "、";
        }
        this.inputarr = this.inputval.split("、");
        this.inputarr.length = this.inputarr.length - 1;
        this.inputval = this.inputval.slice(0, this.inputval.length - 1);
      }
    }
  }
};
</script>


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
  .classifyList {
    .titleHot {
      padding-left: 10px;
      color: #ffba00;
      font-size: 16px;
      text-align: left;
      height: 42px;
      line-height: 42px;
      border-bottom: 1px solid #F4F3F3;
    }
    .listItem {
      border-bottom: 1px solid #F4F3F3;
      height: 36px;
      line-height: 36px;
      list-style: none;
      .txt {
        padding-left: 10px;
        text-align: left;
        font-size: 16px;
        width: 60vw;
        float: left;
      }
      .trueImg {
        width: 36vw;
        float: left;
        img {
          width: 17px;
          float: right;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
