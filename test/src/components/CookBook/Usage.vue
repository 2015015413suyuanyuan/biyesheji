<template>
  <div class="page-usage">
    <p class="title">用料</p>
      <div v-for="(item,index) in usage" class="usage-li" :class="{'frist': index == 0}">
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
  width: 95vw;
  margin: 0 auto;
  margin-bottom: 36px;
  margin-top: 28px;
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