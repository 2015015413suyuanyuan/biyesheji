<template>
  <div class="page-usage">
    <!-- 编辑用料信息 -->
    <div class='editBox' v-show="!isChangeIndex">
      <p class="title">用料</p>
      <div v-for="(item,index) in usage" class="usage-li" :key="index">
        <MyInputUsage v-model='item.usage' :placeholderValue='placeHolder' class='MyClass'></MyInputUsage>
        <MyInputUsage v-model='item.usage2' :placeholderValue='placeHolder' class='MyClass'></MyInputUsage>
      </div>
      <p class="addstep">
        <span class='addALine'  @click="addStep">再增加一行</span>
        <span class='changeIndex' @click="changeIndex">调整用料</span>
      </p> 
    </div>
    <!-- 调整/删除用料 -->
    <div class='dragBox' v-show="isChangeIndex">
      <draggable :list="usage" class='dragDiv'> 
        <transition-group name="list-complete">
          <div v-for="(item, index) in usage" :key="index" class="list-complete-item">
              <div class='imgLeft'>
                <img src="../../assets/img/del.png" class="delete" alt="删除" v-on:click="remove(item, index)">
              </div>
              <div class='txtBox'>
                <div class='yongliao'>{{item.usage}}</div>
                <div class='yongliang'>{{item.usage2}}</div>
              </div>
              <div class='imgRight'>
                <img src="../../assets/img/more11.png" class="move" alt="移动">
              </div>              
          </div>
        </transition-group>
      </draggable> 
      <div class='save' @click="changeOver">调整完成</div>
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.page-usage {
  width: 95vw;
  margin: 0 auto;
  margin-bottom: 36px;
  margin-top: 18px;
  .editBox {
    .title {
      color: rgba(16, 16, 16, 1);
      font-weight: bolder;
      font-size: 0.533333rem;
      text-align: left;
      font-family: SourceHanSansSC-bold;
      margin-bottom: 19px;
    }
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


<script>
import draggable from 'vuedraggable'
import MyInputUsage from './MyInputUsage';

export default {
  name: 'footer-view',
  data() {
    return {
      placeHolder: '111',
      usage:[
        {
          'usage':'',
          'usage2':''
        }
      ],
      isChangeIndex: false
    };
  },
  created() {
    this.usage = Object.assign([], this.usage)

  },
  components: {
      draggable,
      MyInputUsage
  },
  methods: {
    addStep () {
      this.$set(this.usage,this.usage.length,{'usage':'','usage2':''})
    },
    remove: function(item, index) {
      this.usage.splice(index, 1);
    },
    changeIndex(){
      this.isChangeIndex = true
    },
    changeOver(){
      console.log('调整完成，usage',this.usage);
      this.isChangeIndex = false
    },
    dayin(){
    }
  },

};
</script>