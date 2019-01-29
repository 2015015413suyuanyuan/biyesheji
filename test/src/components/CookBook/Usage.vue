<template>
  <div class="page-usage">
    <p class="title">用料</p>
    <!-- 编辑用料信息 -->
    <div class='editBox' v-show="!isChangeIndex">
      <div v-for="(item,index) in materials" class="usage-li" :key="index">
        <i-input class="story" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeMaterials_used" v-model='item.materials_used'  @on-change='temporaryStorage'></i-input>
        <i-input class="story" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeDosage" v-model='item.dosage'  @on-change='temporaryStorage'></i-input>
      </div>
      <p class="addstep">
        <span class='addALine'  @click="addStep">再增加一行</span>
        <span class='changeIndex' @click="changeIndex">调整用料</span>
      </p> 
    </div>
    <!-- 调整/删除用料 -->
    <div class='dragBox' v-show="isChangeIndex">
      <draggable :list="materials" class='dragDiv'> 
        <transition-group name="list-complete">
          <div v-for="(item, index) in materials" :key="index" class="list-complete-item">
              <div class='imgLeft'>
                <img src="../../assets/img/del.png" class="delete" alt="删除" v-on:click="remove(item, index)">
              </div>
              <div class='editBox1'>
                <div class="usage-li" :key="index">
                <i-input class="story" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeMaterials_used" v-model='item.materials_used' @on-change='temporaryStorage'></i-input>
                <i-input class="story" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeDosage" v-model='item.dosage' @on-change='temporaryStorage'></i-input>
                </div>
              </div>
              <div class='imgRight'>
                <img src="../../assets/img/more11.png" class="move" alt="移动">
              </div>              
          </div>
        </transition-group>
      </draggable>
      <div v-if="isShowInfo" class='Info'>用料最少为一种哦~</div>
      <div class='save' @click="changeOver">调整完成</div>
    </div> 
  </div>
</template>



<script>
import draggable from 'vuedraggable'

export default {
  name: 'footer-view',
  data() {
    return {
      placeMaterials_used: '鸡蛋',
      placeDosage: '如：一个',
      isShowInfo: false,
      materials:[
        {
          'materials_used':'',
          'dosage':''
        }
      ],
      isChangeIndex: false
    };
  },
  created() {
    this.materials = Object.assign([], this.materials)
    if(JSON.stringify(localStorage.getItem('materials')) == 'null'){
    }else{
      this.materials = JSON.parse(localStorage.getItem('materials'));
    }
  },
  components: {
      draggable,
  },
  methods: {
    addStep () {
      this.$set(this.materials,this.materials.length,{'materials_used':'','dosage':''})
    },
    remove: function(item, index) {
      if(this.materials.length >=2){
        this.materials.splice(index, 1);
      } else {
        this.isShowInfo = true
      }
    },
    changeIndex(){
      this.isChangeIndex = true
    },
    changeOver(){
      localStorage.setItem('materials',JSON.stringify(this.materials));
      this.isChangeIndex = false
    },
    dayin(){
    },
    temporaryStorage() {
      localStorage.setItem('materials',JSON.stringify(this.materials));
    },
  },
};
</script>

<style lang="scss" scoped>
.page-usage {
  width: 95vw;
  margin: 0 auto;
  margin-bottom: 36px;
  margin-top: 18px;
  overflow: hidden;
  .title {
    color: rgba(16, 16, 16, 1);
    font-weight: bolder;
    font-size: 0.533333rem;
    text-align: left;
    font-family: SourceHanSansSC-bold;
    margin-bottom: 19px;
  }
  .Info {
    text-align: left;
    color: #FFBA00;
    font-size: 16px;
    width: 50vw;
    float: left;
    padding: 5px 0;
  }
  .editBox {
    .usage-li{
      height: auto;
      padding: 8px 0;
      display: flex;
      border-bottom: 1px solid rgba(227, 224, 224, 1);
      font-size: 16px;
    }
    .frist {
      border-top: 1px solid rgba(227, 224, 224, 1);
    }

    .usage-li::after {
      display:block;
      content: '';
      clear:both;
      height: 0px;      
    }
    .rich:focus:before{
    content:none;
    }
    .addstep {
      margin-top: 15px;
      text-align: left;
      color: #FFBA00;
      font-size: 16px;

      .addALine {
        float: left;
      }
      .changeIndex {
        float: right;
      }
    }
    .addstep::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .dragDiv {

  .editBox1 {
    .title {
      color: rgba(16, 16, 16, 1);
      font-weight: bolder;
      font-size: 0.533333rem;
      text-align: left;
      font-family: SourceHanSansSC-bold;
      margin-bottom: 19px;
    }
    .usage-li{
      width: 75vw;
      height: auto;
      padding: 8px 0;
      display: flex;
      font-size: 16px;
    }
    .frist {
      border-top: 1px solid rgba(227, 224, 224, 1);
    }

    .usage-li::after {
      display:block;
      content: '';
      clear:both;
      height: 0px;      
    }
    .rich:focus:before{
    content:none;
    }
    .addstep {
      margin-top: 15px;
      text-align: left;
      color: #FFBA00;
      font-size: 16px;

      .addALine {
        float: left;
      }
      .changeIndex {
        float: right;
      }
    }
    .addstep::after {
      content: '';
      display: block;
      clear: both;
    }
  }

    .list-complete-item {
      height: auto;
      font-size: 16px;
      color: #101010;
      border-bottom: 1px solid #e3e3e3;
      text-align: left;
      display: flex;
      // justify-content : center;
      align-items:center;
      .imgLeft {
        width: 35px;
        display: flex;
        justify-content : left;
        align-items:left;
        img {
          width: 24px;
          height: 24px;
        }
      }

      .imgRight {
        width: 35px;
        display: flex;
        justify-content : right;
        align-items:right;
        img {
          width: 24px;
          height: 24px;
        }
      }

      .txtBox {
       float: left;
       display: flex;
        justify-content : center;
          align-items:center;
       .yongliao {
         width: 125px;
         padding: 10px;
         word-break:break-all;
       }
       .yongliang {
         width: 125px;
         padding: 10px;
         word-break:break-all;
       }
      }
      .txtBox::after {
        display: block;
        content: '';
        clear: both;
      }
    }
    .list-complete-item::after {
      display: block;
      clear: both;
      content: '';
    }
  }
  .dragDiv::after {
    display: block;
    content: '';
    clear: both;
  }
  .save {
    text-align: right;
    height: 38px;
    line-height: 38px;
    color: #FFBA00;
    font-size: 16px;
  }
}
</style>