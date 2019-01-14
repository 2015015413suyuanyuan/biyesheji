<template>
<div class="step">
    <p class="cooktitle">做法</p>
    <div v-for="(item, index) in step" class="little" :key="index">
      <p class="txt">步骤{{index+1}}</p>
      <div class="upload">
        <div class="img-container">
          <article :class="{displayImg:!item.displayImg}" class="pstyle">
            <p class="p1">
                + 步骤图
            </p>
            <p class="p2">
                清晰的步骤图会让菜谱更瘦欢迎
            </p>
          </article>
          <img :src="item.img" alt="user image" class="special" :class="{displayImg:item.displayImg}"> 
        </div>
          <input type="file" @change="getFile(index,item.img)" ref="file" id="file">
      </div>
      <MyInputStep v-model='item.detail' :placeholderValue='placeHolder' :idx='index' class='MyClass' @toFatherData='getStepText'></MyInputStep>
    </div> 
    <p class="addstep" @click="addStep">
        增加一步
    </p> 
</div>
</template>
<style lang="scss" scoped>
.step{
  width: 95vw;
  margin: 0 auto;
  overflow: hidden;
  input{
      outline: none;
  }

  p {
      margin: 0;
      padding: 0;
  }
  .addstep{
      padding: 5px 0;
      color: #FFBA00;
      text-align: left;
      font-size: 16px;
  }
  .cooktitle{
      padding: 5px 0;
      text-align: left;
      font-weight: bolder;
      font-size: 20px;
      color: #101010;
  }
  .little{
      position: relative;
      margin-bottom: 10px;
  }
  .txt{
      font-weight: bolder;
      text-align: left;
      font-size: 19px;
      color: #101010;
  }
  .img-container{
      width: 100%;
      height: 100%;
    .displayImg{
        display: none;
    }
    .special{
        width: 100%;
        height:100%;
        background-color: white;
    }
  }

  .upload{
    position: relative;
    margin-top: 10px;
    width: 100vw;
    height: 220px;
    background-color: #efefed;
    color: #b3b3b3;
  }
  #file{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      font-size: 18px;
  }
  .pstyle {
      height: 220px;
      font-size: 18px;
      color: #A29999;
      p {
          height: 28px;
      }
      .p1 {
          padding-top: 82px;
      }
  }
}
</style>
<script>
import MyInputStep from './MyInputStep';

export default {
  data() {
    return {
      removeClass:true,
      inputVlue: '',
      placeHolder: '添加步骤说明',
      idx: 1,
      step:[
        {
            num:'1',
            img:'',
            detail:'',
            displayImg:true
        },
        {
            num:'2',
            img:'',
            detail:'',
            displayImg:true
        },
        {
            num:'3',
            img:'',
            detail:'',
            displayImg:true
        }
      ]
    };
  },
  components: {
    MyInputStep
  },
    watch: {
      step: {
        handler: function (newVal) {
          for(var i=0;i<newVal.length;i++){
              if(newVal[i].img !== ''){
              newVal[i].displayImg = false;
              }
          }
        },
        deep: true
      }
  },
  methods: {
    getFile (idx,img) {
      var step = this.step;
      const e = window.event;
      let _this = this
      var files = e.target.files[0]
      if (!e || !window.FileReader) return  // 看支持不支持FileReader
      let reader = new FileReader()
      reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
      reader.onloadend = function () {
        img = this.result;
        step[idx].img=this.result;
        console.log('this.result', this.result)
      }
    },
    addStep (){
      this.$set(this.step,this.step.length,{num:'4',img:'',detail:'',displayImg:true})
    },
    getStepText (data){
        console.log('data',data)
    }
  }
}    
</script>

