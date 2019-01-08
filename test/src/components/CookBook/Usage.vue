<template>
  <div class="page-usage">
    <!-- 编辑用料信息 -->
    <div class='editBox'>
      <p class="title">用料</p>
      <div v-for="(item,index) in usage" class="usage-li" :class="{'frist': index == 0}" :key="index">
        <div class='rich' contenteditable="true" :placeholder=item.usage></div>
        <div class='rich' contenteditable="true" :placeholder=item.usage2></div>
      </div>
      <p class="addstep" @click="addStep">
          增加一步
      </p> 
    </div>
    <!-- 调整/删除用料 -->
    <div class='dragBox'>
      <draggable :list="usage" class='dragDiv'> 
        <transition-group name="list-complete">
          <div v-for="(item, index) in usage" :key="index" class="list-complete-item">
              <img src="../../assets/img/del.png" class="delete" alt="删除" v-on:click="remove(item, index)">
              <div class='txtBox'>
                <div class='yongliao'>{{item.usage}}</div>
                <div class='yongliang'>{{item.usage2}}</div>
              </div>
              
              <img src="../../assets/img/more11.png" class="move" alt="移动">
              
          </div>
        </transition-group>
      </draggable> 
      <div @click="dayin" class='save'>调整完成</div>
    </div>    
  </div>
</template>

<style lang="scss" scoped>
.page-usage {
  width: 95vw;
  margin: 0 auto;
  margin-bottom: 36px;
  margin-top: 28px;
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
    }
  }
  .dragDiv {
    .list-complete-item {
      height: auto;
      font-size: 16px;
      color: #101010;
      border-bottom: 1px solid #e3e3e3;
      text-align: left;
      .delete {
        float: left;
      }
      .move {
        float: left;
      }
      .txtBox {
       float: left;
       display: flex;
       .yongliao {
         width: 100px;
         padding: 10px;
       }
       .yongliang {
         width: 100px;
         padding: 10px;
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
          'usage':'食材：如鸡蛋如鸡蛋如鸡蛋如鸡蛋如鸡蛋如鸡蛋1',
          'usage2':'用量：如一只1'
        },
                {
          'usage':'食材：如鸡蛋2',
          'usage2':'用量：如一只2'
        },
                {
          'usage':'食材：如鸡蛋3',
          'usage2':'用量：如一只3'
        }
      ]
    };
  },
  created() {
    
  },
  components: {
      draggable,
  },
  methods: {
    addStep () {
      this.usage.push({
        'usage':'食材：如dfadsfdsfsdafdsafdsfdsafsdafadsf鸡蛋',
        'usage2':'用量：如一只'
      });
    },
    remove: function(item, index) {
      // Remove job from GUI
      this.usage.splice(index, 1);
      console.log(this.usage);
    },
    dayin() {
      console.log(this.usage)
    }
  },

};
</script>