<template>
  <div class="page-usage">
    <p class="title">用料</p>
    <ul class="usage-list">
      <li v-for="(item,index) in usage" class="usage-li txtleft1">
        <div class="left1">
          <textarea :placeholder=item.usage1></textarea>
        </div>
        <div class="right1">
        <textarea :placeholder=item.usage2></textarea>
        </div>
      </li>
    </ul>
    <p class="addstep" @click="addStep">
        增加一步
    </p> 
  </div>
</template>

<style lang="scss" scoped>
.page-usage {
         
  .usage-list {
    word-break: break-all; word-wrap: break-word;overflow:hidden;
    margin: 0;
    padding: 0;
    li {
      list-style:none;
      border-bottom: 1px solid #ccc;
    }
    .usage-li{
      height: auto;
      padding: 5px 0;
      display: flex;
      align-items: center;
      text-align: left;
    }
    .usage-li::after {
      display:block;
      content: '';
      clear:both;
      height: 0px;      
    }
    .left1 {
      width: 45vw;
      display: inline-block;
      float: left;
      textarea {
      resize: none;
      padding: 0;
      }
    }
    .right1 {
      width: 45vw;
      display: inline-block;
      float:right;
      textarea {
      resize: none;
      padding: 0;
      }
    }
  } 
  .addstep {
    text-align: left;
    color: #FFBA00;
  }
}
</style>


<script>
export default {
  name: 'footer-view',
  data() {
    return {
      usage:[
        {
          'usage1':'食材：如鸡蛋',
          'usage2':'用量：如一只'
        }
      ]
    };
  },
  created() {
    
  },
  methods: {
        addStep (){
                console.log('添加步骤之前的',this.step);
                this.usage.push(        {
          'usage1':'如鸡蛋',
          'usage2':'如一只'
        });
                console.log('添加步骤之后的',this.step);
        }
  },

};
</script>