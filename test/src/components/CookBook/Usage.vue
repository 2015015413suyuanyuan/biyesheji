<template>
  <div class="page-usage">
    <!-- 编辑用料信息 -->
    <div class='editBox' v-show="!isChangeIndex">
      <p class="title">用料</p>
      <div v-for="(item,index) in usage" class="usage-li" :class="{'frist': index == 0}" :key="index">
        <div class='rich' contenteditable="true" :placeholder=item.usage @blur="dayin"></div>
        <div class='rich' contenteditable="true" :placeholder=item.usage2 @blur='dayin'></div>
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
    .rich {
      width: 45vw; 
      min-height: 20px; 
      max-height: 300px;
      _height: 120px; 
      outline: 0; 
      font-size: 16px; 
      line-height: 24px;
      word-wrap: break-word;
      overflow-x: hidden;
      overflow-y: auto;
      float: left;
      text-align: left;
      display: flex;
      align-items:center;
      justify-content:left;
    }
    .rich:empty:before{
        content: attr(placeholder);   /* element attribute*/
        /*content: 'this is content';*/
        color:#A29999;
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

export default {
  name: 'footer-view',
  data() {
    return {
      usage:[
        {
          'usage':'食材：如鸡蛋如鸡dfaasdfdsfadsdsfdsfadf蛋如鸡蛋如鸡蛋如鸡蛋如鸡蛋1',
          'usage2':'用量：如一只1'
        },
                {
          'usage':'食材：如鸡dffdsafdsfsdafsadfdasffdsafdsafsadfsdfsdf蛋2',
          'usage2':'用量：如一只2'
        },
                {
          'usage':'食材：如鸡蛋3食材：如鸡蛋3食材：如鸡蛋3食材：如鸡蛋3食材：如鸡蛋3',
          'usage2':'用量：如一只3'
        }
      ],
      isChangeIndex: false
    };
  },
  created() {
    
  },
  components: {
      draggable,
  },
  methods: {
    addStep () {
      // this.usage.push({
      //   'usage':'食材：如dfadsfdsfsdafdsafdsfdsafsdafadsf鸡蛋',
      //   'usage2':'用量：如一只'
      // });
      this.$set(this.usage,this.usage.length,{'usage':'食材：如鸡蛋','usage2':'用量：如一只'})
    },
    remove: function(item, index) {
      // Remove job from GUI
      this.usage.splice(index, 1);
      console.log(this.usage);
    },
    changeIndex(){
      this.isChangeIndex = true
      console.log(this.usage,'调整之前')
    },
    changeOver(){
      this.isChangeIndex = false
      console.log(this.usage,'调整之后')
    },
    dayin(){
      console.log('dayin',this.usage)
    }
  },

};
</script>