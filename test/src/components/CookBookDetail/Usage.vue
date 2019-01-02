<template>
  <div class="page-usage">
    <p class="title">材料</p>
      <div v-for="(item,index) in usage" class="usage-li" :key="index">
        <div class='rich left'>{{item.usage1}}</div>
        <div class='rich right'>{{item.usage2}}</div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.page-usage {
    .title {
      padding: 0;
      margin: 0;
      color: #101010;
      font-size: 18px;
      text-align: left;
      padding-left: 10px;
      height: 27px;
    }
    .usage-li{
      height: auto;
      padding: 5px 0;
      display: flex;
    }
    .usage-li:nth-child(even){
      background-color: #F4F3F3;
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
    outline: 0; 
    font-size: 15px;
    color: #101010;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
    float: left;
    text-align: left;
    display: flex;
    align-items:center;
    justify-content:left;
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
          'usage1':'鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋',
          'usage2':'一只鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋'
        },
        {
          'usage1':'鸡蛋300g鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋加单',
          'usage2':'一只'
        },
        {
          'usage1':'鸡蛋',
          'usage2':'一只一只一只一只一只一只一只'
        }
      ]
    };
  },
  created() {
    
  },
  methods: {
  },

};
</script>