<template>
  <div class="page-tabbar">
    <div class='header'>
      <span class="mint-button-icon" @click="backPage">
        <i class="mintui mintui-back"></i>
      </span>
      <span class='searchimg'><img src="../../assets/img/search.png"></span>
      <input type="search" list='name' result placeholder="搜索菜谱" id="input111" class='searchinput' v-model="value" autofocus="autofocus" @input="changeIsShow()" ref="input111"/>
      <span class='searchtext' @click="toResult">搜索</span>
    </div>
    <ul class='searchlist' v-if="isShowList">
      <li v-for="(item,index) in optionList" :key="index" class='searchItem' @click="handleValue(item,index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'

export default {
  name: 'page-tabbar',
  data() {
    return {
      value: '',
      isShowList: false,
      optionList:[]
    };
  },
  created() {
    if(JSON.stringify(this.$route.params) !== '{}'){
      this.isShowList = true
      this.value = this.$route.params.menu_name;
      this.getSearchData(this.value);
      this.$nextTick(() => {
        this.setCaretPosition(document.getElementById('input111'),this.value.length)
　　  })  
    }
  },
  methods: {
    handleValue(value,index) {
      this.value = value
      this.isShowList = false
      const arr1 = []
      arr1.push(value)
      if(localStorage.getItem('hository')){
        let arr2 = [];
        arr2 = JSON.parse(localStorage.getItem('hository'))
        arr2.push(value)
        let arr3 = Array.from(new Set(arr2))
        arr2 = arr3;
        localStorage.setItem('hository',JSON.stringify(arr2))
      } else {
        localStorage.setItem('hository',JSON.stringify(arr1))
      }
      this.$router.push({
        name: "Result",
        params: { menu_name: value}
      });
    },
    changeIsShow(){
      if(this.value != ''){
        this.getSearchData();
        this.isShowList = true
      }else {
        this.isShowList = false
      }
      
    },
    backPage () {
      if(this.$route.params.isJustSearch){
        this.$router.push({
          name: "Home"      
        });         
      }else if(this.$route.params.isClassify){
         this.$router.push({
          name: "Classify"      
        });         
      } else {
        this.$router.push({
          name: "Home"      
        });      
      }
    },
    getSearchData() {
      const data = {
        'menu_name':  this.value
      }
      this.$ajax.post('select', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res.length != 0) {
          const menuName = [];
          for(var i =0;i<res.length;i++){
            menuName.push(res[i].menu_name)
          }
        let arr3 = Array.from(new Set(menuName))
        this.optionList = arr3;
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    toResult(){
      if(this.value != ''){
        this.$router.push({
          name: "Result",
          params: { menu_name:  this.value}            
        });  
      }
    },
    setCaretPosition(tObj, sPos){
      if(tObj.setSelectionRange){
        setTimeout(function(){
          tObj.setSelectionRange(sPos, sPos);
          tObj.focus();
        }, 0);
      }else if(tObj.createTextRange){
        var rng = tObj.createTextRange();
        rng.move('character', sPos);
        rng.select();
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.page-tabbar {
  .header{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: white;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: black;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0.373333rem;
    height: 1.066667rem;
    line-height: 1;
    padding: 0 0.266667rem;
    position: relative;
    text-align: center;
    white-space: nowrap;
    background-color: white;
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    .searchimg {
      position: absolute;
      left: 53px;
      width: 24px;
      height: 24px;
      img {
        width: 24px;
      }
    }
    .searchinput {
      margin-left: 10px;
      width: 230px;
      height: 31px;
      border-radius: 10px;
      background-color: rgba(244, 243, 243, 1);
      text-align: left;
      font-size: 17px;
      outline: 0;
      padding-left: 40px;
      border: 1px solid rgba(255, 255, 255, 0);
      display: block;
    }
    .searchtext {
      color: rgba(16, 16, 16, 1);
      font-size: 20px;
      font-family: SourceHanSansSC-regular;
      padding-left: 30px;
    }
    input[type="search" i] {
      -webkit-appearance: none;
      box-sizing: border-box;
    }
    input::-webkit-input-placeholder {
        color: #888888;
    }
  }
  .searchlist {
    list-style: none;
    text-align: left;
    padding: 0;
    margin-top: 50px;
    li {
      font-size: 16px;
      height: 35px;
      line-height: 35px;
      padding-left: 30px;
    }
    li:hover {
      background-color: #F4F3F3;
    }
  }

  input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance:round($number: 1);/*此处只是去掉默认的小×*/
    color:red;
  }
  input[type=search]::-webkit-search-cancel-button{
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: white;
      background-image: url('../../assets/img/close.jpg');
      background-size: 100%;
      background-repeat: no-repeat;
  }
}
</style>
