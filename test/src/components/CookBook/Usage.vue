<template>
  <div class="page-usage">
    <p class="title">用料</p>
      <div v-for="(item,index) in usage" class="usage-li">
        <div class='rich' contenteditable="true" :placeholder=item.usage1></div>
        <div class='rich' contenteditable="true" :placeholder=item.usage2></div>
      </div>
    <p class="addstep" @click="addStep">
        增加一步
    </p> 
  </div>
</template>

<style lang="scss" scoped>
.page-usage {
  .title {
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: left;
    font-family: SourceHanSansSC-bold;
  }
    .usage-li{
      height: auto;
      padding: 5px 0;
      display: flex;
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
    margin-left: auto; 
    margin-right: auto; 
    padding: 3px; 
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
    text-align: left;
    color: #FFBA00;
    font-size: 16px;
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
          'usage1':'食材：如鸡蛋',
          'usage2':'用量：如一只'
        });
                console.log('添加步骤之后的',this.step);
        }
  },

};
</script>