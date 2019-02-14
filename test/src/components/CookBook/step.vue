<template>
<div class="step">
    <p class="cooktitle">做法</p>
    <div class='editStep' v-show="!isShowChange">
      <div v-for="(item, index) in step" class="little" :key="index">
        <p class="txt">步骤{{index+1}}</p>
        <div class="upload">
          <div class="img-container">
            <article v-if="!item.image" class="pstyle">
              <p class="p1">
                  + 步骤图
              </p>
              <p class="p2">
                  清晰的步骤图会让菜谱更瘦欢迎
              </p>
            </article>
            <img :src="item.image" class="special" v-if="item.image"> 
          </div>
            <input type="file" @change="getFile(index,item.image)" ref="file" id="file">
        </div>
        <i-input class="story" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeStep" v-model='item.step' @on-change='temporaryStorage'></i-input>
      </div> 
      <p class="addstep">
          <span @click="addStep">增加一步</span>
          <span @click="changeStep" class='textRight'>调整步骤</span>
      </p>
    </div>

    <div class='changeStep' v-show="isShowChange">
      <draggable :list="step" class='dragDiv'> 
        <transition-group name="list-complete">
          <div v-for="(item, index) in step" :key="index" class="list-complete-item">
              <div class='imgLeft'>
                <img src="../../assets/img/del.png" class="delete"  v-on:click="remove(item, index)">
              </div>
              <div class='content'>
                <div class="upload">
                  <div class="img-container">
                    <article  v-if="!item.image" class="pstyle">
                      <p class="p1">
                          + 步骤图
                      </p>
                      <p class="p2">
                          清晰的步骤图会让菜谱更瘦欢迎
                      </p>
                    </article>
                    <img :src="item.image" class="special"  v-if="item.image"> 
                  </div>
                  <input type="file" @change="getFile(index,item.image)" ref="file" class="file">
                </div>
                <i-input class="story" type="textarea" :autosize="{minRows: 1,maxRows: 5}" :placeholder="placeStep" v-model='item.step' @on-change='temporaryStorage'></i-input>
              </div>
              <div class='imgRight'>
                <img src="../../assets/img/more11.png" class="move">
              </div>              
          </div>
        </transition-group>
      </draggable>
      <div class='Info' v-show="mostOneStep">最少一个步骤哦~</div>
      <div class='save' @click="changeOver">调整完成</div>
    </div>
</div>
</template>


<script>

import draggable from 'vuedraggable';
import { sep } from 'path';

export default {
  data() {
    return {
      placeStep:'添加步骤说明',
      removeClass:true,
      step:[
        {
            image:'',
            step:'',
        },
        {
            image:'',
            step:'',
        },
      ],
      // 显示调整步骤
      isShowChange: false,
      // 显示提示信息 最少一步
      mostOneStep: false
    };
  },
  components: {
    draggable
  },
  created() {
    if(JSON.stringify(localStorage.getItem('step')) == 'null'){
    }else{
      this.step = JSON.parse(localStorage.getItem('step'));
    }
  },
  methods: {
    getFile (idx,img) {
      const that = this;
      var step = this.step;
      const e = window.event;
      let _this = this
      var files = e.target.files[0]
      this.file = files
      const params = new FormData();
      params.append('file',this.file,this.file.name);
      that.$ajax.post('upload', params,{
        headers: {'Content-Type': 'multipart/form-data'}
      }).then((res) => {
        if(res != ''){ 
          this.step[idx].image= res.image
          localStorage.setItem('step',JSON.stringify(this.step));
        }
      }).catch((err) => {
        console.log(err)
      })
      if (!e || !window.FileReader) return  // 看支持不支持FileReader
      let reader = new FileReader()
      reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
      reader.onloadend = function () {
        img = this.result;
      }
    },
    addStep (){
    this.$set(this.step,this.step.length,{image:'',step:''})
    },
    getStepText (data){
      localStorage.setItem('step',JSON.stringify(this.step));
    },
    remove: function(item, index) {
      if(this.step.length<=1) {
        this.mostOneStep = true
      } else {
        this.step.splice(index, 1);
        localStorage.setItem('step',JSON.stringify(this.step));
      }
    },
    changeStep () {
      this.isShowChange = true
    },
    changeOver() {
      localStorage.setItem('step',JSON.stringify(this.step));
      this.isShowChange = false
    },
    temporaryStorage(){
      localStorage.setItem('step',JSON.stringify(this.step));
    }
  }
}    
</script>

<style lang="scss" scoped>
.step{
  width: 95vw;
  margin: 0 auto;
  overflow: hidden;
  input{
      outline: none;
  }
  .cooktitle{
      padding: 5px 0;
      text-align: left;
      font-weight: bolder;
      font-size: 20px;
      color: #101010;
  }
  p {
      margin: 0;
      padding: 0;
  }
  .editStep {
    .addstep{
        margin-top: 5px;
        color: #FFBA00;
        text-align: left;
        font-size: 16px;
        .textRight {
          float: right;
        }
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
        padding-top: 82px;
        
        p {
            height: 28px;
        }
    }
  }
  .save {
    color: #FFBA00;
    font-size: 16px;
    text-align: right;
    padding: 5px 0;
    width: 30vw;
    float: right;
  }
.dragDiv {
  .content {
    width: 70vw;
    margin-right: 25px;
  }
  .list-complete-item {
    height: auto;
    font-size: 16px;
    color: #101010;
    border-bottom: 1px solid #e3e3e3;
    text-align: left;
    display: flex;
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
    .upload {
      position: relative;
      margin-top: 10px;
      width: 70vw;
      height: 120px;
      background-color: #efefed;
      color: #b3b3b3;

      .file {
        position: absolute;
        top: 0;
        left: 0;
        width: 70vw;
        height: 120px;
        opacity: 0;
        font-size: 18px;
      }
    }
    .pstyle {
      width: 60vw;
    }
    .img-container{
        width: 70vw;
        height: 120px;
      .special{
          width: 100%;
          height:100%;
          background-color: white;
      }
    }
    .MyClass {
      clear: both;
      width: 70vw;
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
  .Info {
    text-align: left;
    color: #FFBA00;
    font-size: 16px;
    width: 50vw;
    float: left;
    padding: 5px 0;
  }
}
</style>